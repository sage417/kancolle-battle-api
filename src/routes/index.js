import {sim, ALLFORMATIONS} from "../shipsim.js";
import {Fleet, Ship} from "../ksships";
import {ENEMYCOMPS} from "../kcENEMYCOMP";
import {SHIPDATA} from "../kcSHIPDATA";
var MongoClient = require('mongodb').MongoClient;
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
    console.info(new Date().getTime());
    battle(member_id)
        .then(function (result) {
            res.json(result.api_data);
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
    let keys = Object.keys(point);
    let fleetInfo = point[keys[Math.trunc(Math.random() * keys.length)]];
    let ships = fleetInfo.c;
    let s = [];
    for (let i = 0; i < ships.length; i++) {
        let {name, LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = SHIPDATA[ships[i]];
        let ship = new Ship(ships[i], name, 1, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
        ship.loadEquips(equips);
        s.push(ship);
    }
    fleet.loadShips(s);
    fleet.formation = ALLFORMATIONS[fleetInfo.f + ''];
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

async function battle(member_id) {
    let BAPI = {
        api_data: {},
    };

    var url = 'mongodb://192.168.1.100:40000,192.168.1.100:40001/kancolle?replicaSet=kancolle';
    var db = await MongoClient.connect(url);


    let result = await db.collection("member_battle_fleet").findOne({member_id}, {sort: {_id: 1}});

    let fleet1 = memberFleet(result.fleets[0]);
    let fleet2 = underSeaFleet(result.traveller_no, result.map_cell_name);

    let battle_result = sim(fleet1, fleet2, false, false, false, false, false, BAPI);

    db.close();
    return BAPI;
}

module.exports = router;
