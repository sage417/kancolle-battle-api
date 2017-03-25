import {sim, ALLFORMATIONS} from "../shipsim.js";
import {db} from "../db";
import {Fleet, Ship} from "../ksships";
import {ENEMYCOMPS} from "../kcENEMYCOMP";
import {SHIPDATA} from "../kcSHIPDATA";
let express = require('express');
let router = express.Router();

router.use(function checkApiMemberId(req, res, next) {
    console.log("in checker");
    let valid = false;
    let api_member_id = req.query.api_member_id;
    try {
        valid = Number.isInteger(Number.parseInt(api_member_id));
    } catch (e) {
    }
    valid ? next() : next(new Error("api_member_id is required"));
});

/* GET home page. */
router.get('/', function (req, res, next) {
    let member_id = Number.parseInt(req.query.api_member_id);
    findMemberBattleFleet(member_id)
        .then(function (result) {
            let fleet1 = memberFleet(result.fleets[0]);
            let fleet2 = underSeaFleet(result.traveller_no, result.map_cell_name);
            let BAPI = {
                api_data: {},
            };
            let battle_result = sim(fleet1, fleet2, false, false, false, false, false, BAPI);
            res.json(BAPI.api_data);
        }).catch(function (err) {
        console.error(err);
        next(err);
    })
});


function underSeaFleet(traveller_no, map_cell_no) {
    let fleet = new Fleet(1, false);
    let world_prefix = Math.trunc(traveller_no / 10);
    let world_sufix = traveller_no % 10;
    let point = ENEMYCOMPS[`World ${world_prefix}`][`${world_prefix}-${world_sufix}`][map_cell_no];
    let keys= Object.keys(point);
    let fleetInfo = point[keys[Math.trunc(Math.random()*keys.length)]];
    let ships = fleetInfo.c;
    let s = [];
    for (let i = 0; i < ships.length; i++) {
        let {name, LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = SHIPDATA[ships[i]];
        let ship = new Ship(ships[i], name, 1, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
        ship.loadEquips(equips);
        s.push(ship);
    }
    fleet.loadShips(s);
    fleet.formation = ALLFORMATIONS[fleetInfo.f+''];
    return fleet;
}

function memberFleet(fleet) {
    let fleet1 = new Fleet(0, false);
    let ships = [];
    for (let i = 0; i < fleet.ships.length; i++) {
        let ship = fleet.ships[i];
        let {id, LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = ship;
        let s = new Ship(id, SHIPDATA[ship.id].name, 0, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
        s.loadEquips(equips);
        ships.push(s);
    }
    fleet1.loadShips(ships);
    fleet1.formation = ALLFORMATIONS['1'];
    return fleet1;
}

async function findMemberBattleFleet(member_id) {
    return await
        new Promise((resolve) => {
            db.bind("member_battle_fleet").findOne({member_id}, {sort: {_id: 1}},
                function (err, result) {
                    resolve(result);
                }
            )
        });
}

module.exports = router;
