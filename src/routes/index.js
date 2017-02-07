import "../shipsim.js";
import {db} from "../db";
import {Fleet, Ship} from "../ksships";
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let member_id = Number.parseInt(req.query.api_member_id);
    findMemberBattleFleet(member_id)
        .then(function (result) {
            let fleet1 = new Fleet(0, false);
            let ships = [];
            for (let i = 0; i < result.fleets[0].ships.length; i++) {
                let ship = result.fleets[0].ships[i];
                let {id:mid, LVL, HP, TP, FP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots, equips} = ship;
                let s = new Ship(mid, '', 0, LVL, HP, FP, TP, AA, AR, EV, AWS, LOS, LUK, RNG, planeslots);
                s.loadEquips(equips);
                ships.push(s);
            }
            fleet1.loadShips(ships);
            res.send(ships);
        }).catch(function (err) {
        console.error(err);
        next(err);
    })
});

async function findMemberBattleFleet(member_id) {
    return await new Promise((resolve) => {
        db.bind("member_battle_fleet").findOne({member_id}, function (err, result) {
            resolve(result);
        })
    });
}

module.exports = router;
