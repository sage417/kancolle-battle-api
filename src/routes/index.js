import {sim, ALLFORMATIONS} from "../shipsim.js";
import {db} from "../db";
import {Fleet, Ship} from "../ksships";
import {ENEMYCOMPS} from "../kcENEMYCOMP";
import {SHIPDATA} from "../kcSHIPDATA";
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let member_id = Number.parseInt(req.query.api_member_id);
    findMemberBattleFleet(member_id)
        .then(function (result) {
            let fleet1 = memberFleet(result.fleets[0]);
            let fleet2 = underSeaFleet(result.traveller_no, result.map_cell_no);
            let BAPI = {
                data: {},
                yasen: {},
                mvp: [],
                rating: ''
            };
            let battle_result = sim(fleet1, fleet2, false, false, false, false, false, BAPI);
            res.send(BAPI);
        }).catch(function (err) {
        console.error(err);
        next(err);
    })
});

function underSeaFleet(traveller_no, map_cell_no) {
    let fleet = new Fleet(2, false);
    let world_prefix = Math.trunc(traveller_no / 10);
    let world_sufix = traveller_no % 10;
    console.log(ENEMYCOMPS[`World ${world_prefix}`][`${world_prefix}-${world_sufix}`]['A']);
    let ships = ENEMYCOMPS[`World ${world_prefix}`][`${world_prefix}-${world_sufix}`]['A']['1']['c'];
    let s = [];
    for (let i = 0; i < ships.length; i++) {
        let {LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = SHIPDATA[ships[i]];
        let ship = new Ship(ships[i], '', 1, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
        ship.loadEquips(equips);
        s.push(ship);
    }
    fleet.loadShips(s);
    fleet.formation = ALLFORMATIONS['1'];
    return fleet;
}

function memberFleet(fleet) {
    let fleet1 = new Fleet(0, false);
    let ships = [];
    for (let i = 0; i < fleet.ships.length; i++) {
        let ship = fleet.ships[i];
        let {id:mid, LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = ship;
        let s = new Ship(mid, '', 0, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
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
            db.bind("member_battle_fleet").findOne({member_id}, function (err, result) {
                resolve(result);
            })
        });
}

module.exports = router;
