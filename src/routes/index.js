import "../shipsim.js";
import {db} from "../db";
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let member_id = Number.parseInt(req.query.api_member_id);
    findMemberBattleFleet(member_id)
        .then(function (fleet) {
            res.send(fleet);
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
