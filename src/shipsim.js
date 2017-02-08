/**
 * Created by J.K.SAGE on 2017/1/29.
 */
import {EQTDATA} from "./kcEQDATA";
import {code as code2, shuffle} from "./sharded";
import {SHIPDATA} from "./kcSHIPDATA";
import {Fleet} from "./ksships";

let code = code2;

var LINEAHEAD = {
    shellmod: 1,
    torpmod: 1,
    ASWmod: .6,
    AAmod: 1,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    id: 1
};
var DOUBLELINE = {
    shellmod: .8,
    torpmod: .8,
    ASWmod: .8,
    AAmod: 1.2,
    shellacc: 1.2,
    torpacc: .8,
    NBacc: .9,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    id: 2
};
var DIAMOND = {
    shellmod: .7,
    torpmod: .7,
    ASWmod: 1.2,
    AAmod: 1.6,
    shellacc: 1,
    torpacc: .4,
    NBacc: .7,
    shellev: 1.1,
    torpev: 1.1,
    NBev: 1,
    ASWev: 1,
    id: 3
};
var ECHELON = {
    shellmod: .6,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1,
    shellacc: 1.2,
    torpacc: .6,
    NBacc: .8,
    shellev: 1.2,
    torpev: 1.3,
    NBev: 1.1,
    ASWev: 1.3,
    id: 4
};
var LINEABREAST = {
    shellmod: .6,
    torpmod: .6,
    ASWmod: 1.3,
    AAmod: 1,
    shellacc: 1.2,
    torpacc: .3,
    NBacc: .8,
    shellev: 1.3,
    torpev: 1.4,
    NBev: 1.2,
    ASWev: 1.1,
    id: 5
};

var CTFCOMBINED1M = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: 2,
    accbase: 90,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 11
};
var CTFCOMBINED1E = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: 10,
    accbase: 55,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.35,
    id: 11
};
var CTFCOMBINED2M = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: 2,
    accbase: 90,
    shellacc: .9,
    torpacc: .9,
    NBacc: 1,
    shellev: 1.1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 12
};
var CTFCOMBINED2E = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: 10,
    accbase: 55,
    shellacc: 1,
    torpacc: .9,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.35,
    id: 12
};
var CTFCOMBINED3M = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: 2,
    accbase: 90,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 13
};
var CTFCOMBINED3E = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: 10,
    accbase: 55,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.35,
    id: 13
};
var CTFCOMBINED4M = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: 2,
    accbase: 90,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: .9,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 14
};
var CTFCOMBINED4E = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: 10,
    accbase: 55,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: .9,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.35,
    id: 14
};

var STFCOMBINED1M = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: 10,
    accbase: 50,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 11
};
var STFCOMBINED1E = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: -5,
    accbase: 75,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.15,
    id: 11
};
var STFCOMBINED2M = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: 10,
    accbase: 50,
    shellacc: 1.2,
    torpacc: .9,
    NBacc: 1,
    shellev: 1.1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 12
};
var STFCOMBINED2E = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: -5,
    accbase: 75,
    shellacc: 1.2,
    torpacc: .9,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.15,
    id: 12
};
var STFCOMBINED3M = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: 10,
    accbase: 50,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 13
};
var STFCOMBINED3E = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: -5,
    accbase: 75,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.15,
    id: 13
};
var STFCOMBINED4M = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: 10,
    accbase: 50,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 14
};
var STFCOMBINED4E = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: -5,
    accbase: 75,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.15,
    id: 14
};

var TTFCOMBINED1M = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: -5,
    accbase: 50,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 11
};
var TTFCOMBINED1E = {
    shellmod: .8,
    torpmod: .7,
    ASWmod: 1.3,
    AAmod: 1.1,
    shellbonus: 10,
    accbase: 75,
    shellacc: 1,
    torpacc: .6,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 11
};
var TTFCOMBINED2M = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: -5,
    accbase: 50,
    shellacc: 1.2,
    torpacc: .9,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 12
};
var TTFCOMBINED2E = {
    shellmod: 1,
    torpmod: .9,
    ASWmod: 1.1,
    AAmod: 1,
    shellbonus: 10,
    accbase: 75,
    shellacc: 1.2,
    torpacc: .9,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 12
};
var TTFCOMBINED3M = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: -5,
    accbase: 50,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 13
};
var TTFCOMBINED3E = {
    shellmod: .7,
    torpmod: .6,
    ASWmod: 1,
    AAmod: 1.5,
    shellbonus: 10,
    accbase: 75,
    shellacc: 1,
    torpacc: .4,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 13
};
var TTFCOMBINED4M = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: -5,
    accbase: 50,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: -.4,
    id: 14
};
var TTFCOMBINED4E = {
    shellmod: 1.1,
    torpmod: 1,
    ASWmod: .7,
    AAmod: 1,
    shellbonus: 10,
    accbase: 75,
    shellacc: 1,
    torpacc: 1,
    NBacc: 1,
    shellev: 1,
    torpev: 1,
    NBev: 1,
    ASWev: 1,
    shellaccflat: 0,
    id: 14
};

var ALLFORMATIONS = {
    1: LINEAHEAD,
    2: DOUBLELINE,
    3: DIAMOND,
    4: ECHELON,
    5: LINEABREAST,
    '111': CTFCOMBINED1M,
    '111E': CTFCOMBINED1E,
    '112': CTFCOMBINED2M,
    '112E': CTFCOMBINED2E,
    '113': CTFCOMBINED3M,
    '113E': CTFCOMBINED3E,
    '114': CTFCOMBINED4M,
    '114E': CTFCOMBINED4E,
    '211': STFCOMBINED1M,
    '211E': STFCOMBINED1E,
    '212': STFCOMBINED2M,
    '212E': STFCOMBINED2E,
    '213': STFCOMBINED3M,
    '213E': STFCOMBINED3E,
    '214': STFCOMBINED4M,
    '214E': STFCOMBINED4E,
    '311': TTFCOMBINED1M,
    '311E': TTFCOMBINED1E,
    '312': TTFCOMBINED2M,
    '312E': TTFCOMBINED2E,
    '313': TTFCOMBINED3M,
    '313E': TTFCOMBINED3E,
    '314': TTFCOMBINED4M,
    '314E': TTFCOMBINED4E,
};

var AACIDATA = {
    1: {num: 7, rate: .65, mod: 1.75},
    2: {num: 6, rate: .58, mod: 1.7},
    3: {num: 4, rate: .5, mod: 1.6},
    4: {num: 6, rate: .52, mod: 1.5},
    5: {num: 4, rate: .55, mod: 1.55},
    6: {num: 4, rate: .4, mod: 1.5},
    7: {num: 3, rate: .45, mod: 1.35},
    8: {num: 4, rate: .5, mod: 1.45},
    9: {num: 2, rate: .4, mod: 1.3},
    10: {num: 8, rate: .6, mod: 1.65},
    11: {num: 6, rate: .55, mod: 1.5},
    12: {num: 3, rate: .45, mod: 1.25},
    // 13:{num:4,rate:.35,mod:1.35},
    14: {num: 4, rate: .35, mod: 1.35}, //don't know rate/mod
    15: {num: 3, rate: .35, mod: 1.35}, //don't know rate/mod
    16: {num: 4, rate: .35, mod: 1.35}, //don't know rate/mod
    17: {num: 2, rate: .35, mod: 1.35}, //don't know rate/mod
    18: {num: 2, rate: .35, mod: 1.35}, //don't know rate/mod
    19: {num: 5, rate: .35, mod: 1.35}, //don't know rate/mod
    20: {num: 3, rate: .5, mod: 1.35}, //don't know rate/mod
};

var FLEETS1 = [];
var FLEETS2 = [];
var FLEETS1S = [null, null];
var ENGAGEMENT = 1;
const CRITMOD = 1.5;

var BUCKETPERCENT = 0;
var BUCKETTIME = 99 * 3600;

var C = true;
var DIDPROTECT = false;

var MECHANICS = {
    artillerySpotting: true,
    OASW: true,
    AACI: true,
    fitGun: true,
    morale: true,
};

function getRepairCost(ship) {
    var base = (ship.maxHP - ship.HP) * SHIPDATA[ship.mid].fuel;
    return [Math.floor(base * .032), Math.floor(base * .06)];
}

function getRepairTime(ship) {
    var mod, base;
    if (ship.LVL <= 12) base = 10 * ship.LVL;
    else if (ship.LVL < 100) {
        base = 120;
        var extra = 0, count = 0, bm = 2;
        for (var i = 13; i <= ship.LVL; i++) {
            base += 5;
            if (count++ >= bm) {
                bm += 2;
                count = 0;
                base += 10;
            }
        }
    } else if (ship.LVL <= 128) base = 650 + 5 * (ship.LVL - 100);
    else if (ship.LVL < 150) base = 800 + 5 * (ship.LVL - 128);
    else base = 915;
    switch (SHIPDATA[ship.mid].type) {
        case 'BB':
        case 'BBV':
        case 'CV':
        case 'AR':
            mod = 2;
            break;
        case 'CA':
        case 'CAV':
        case 'FBB':
        case 'CVL':
        case 'AS':
            mod = 1.5;
            break;
        case 'SS':
            mod = .5;
            break;
        default:
            mod = 1;
            break;
    }
    return (ship.maxHP - ship.HP) * base * mod + 30;
}

function formationCountered(form1, form2) {
    if (form1 == 2 && form2 == 5) return true;
    if (form1 == 4 && form2 == 1) return true;
    if (form1 == 5 && form2 == 4) return true;
    return false;
}

function shell(ship, target, APIhou) {
    var da = false, cutin = false;
    var preMod = ship.fleet.formation.shellmod * ENGAGEMENT * ship.damageMod();
    var postMod = ship.APmod(target);

    var accMod = ship.moraleMod();
    if (!formationCountered(ship.fleet.formation.id, target.fleet.formation.id)) accMod *= ship.fleet.formation.shellacc;

    var accMod2 = ship.APacc(target);
    var evMod = target.fleet.formation.shellev;

    if (MECHANICS.artillerySpotting && ship.canAS() && ship.fleet.AS > 0) {
        var ASchance = ship.ASchance(ship.fleet.AS);
        if (C) console.log('AS chance: ' + ASchance);

        var AStypes = ship.AStype();
        for (var i = 0; i < AStypes.length; i++) {
            if (da || cutin) break;
            switch (AStypes[i]) {
                case 2:  //DOUBLE ATTACK
                    if (Math.random() < ASchance / 1.3) {
                        da = 2;
                        postMod *= 1.2;
                        accMod2 *= 1.1;
                    }
                    break;
                case 3: //secgun cut-in
                    if (Math.random() < ASchance / 1.2) {
                        postMod *= 1.1;
                        accMod2 *= 1.3;
                        cutin = 3;
                    }
                    break;
                case 4: //radar cut-in
                    if (Math.random() < ASchance / 1.3) {
                        postMod *= 1.2;
                        accMod2 *= 1.5;
                        cutin = 4;
                    }
                    break;
                case 5: //
                    if (Math.random() < ASchance / 1.4) {
                        postMod *= 1.3;
                        accMod2 *= 1.3;
                        cutin = 5;
                    }
                    break;
                case 6:  //AP SHELL
                    if (Math.random() < ASchance / 1.5) {
                        postMod *= 1.5;
                        accMod2 *= 1.2;
                        cutin = 6;
                    }
                    break;
            }
        }
    }

    //PT Imp bonus
    if (target.isPT) {
        var sguns = 0;
        for (var i = 0; i < ship.equips.length; i++) {
            if ([MAINGUNS, MAINGUNSAA, SECGUN, AAGUN].indexOf(ship.equips[i].type) != -1) sguns++;
        }
        if (sguns >= 2) {
            accMod *= 1.5;
            postMod *= 1.2;
        } //acc is guess
    }

    var accflat = (ship.ACC) ? ship.ACC : 0;
    //if (ship.fleet.formation.shellaccflat) accflat += ship.fleet.formation.shellaccflat; //try global for enemy too
    if (ship.ACCshellImprv) accflat += ship.ACCshellImprv;

    var acc = hitRate(ship, (ship.fleet.baseaccshell || 90), accflat, accMod); //use global hit acc
    if (MECHANICS.fitGun && ship.ACCfit) acc += ship.ACCfit * .01;
    acc *= accMod2;

    var FPfit = (ship.FPfit || 0);

    if (C) console.log('PREMOD: ' + preMod + ' POSTMOD: ' + postMod);

    if (da) {
        var res1 = rollHit(accuracyAndCrit(ship, target, acc, evMod, 0, 1.3, ship.CVshelltype));
        var dmg1 = Math.floor(target.HP * (.06 + .08 * Math.random())), realdmg1 = 0;
        if (res1) {
            dmg1 = damage(ship, target, ship.shellPower(target, ship.fleet.basepowshell) + FPfit, preMod, res1 * postMod);
            realdmg1 = takeDamage(target, dmg1);
        } else {
            realdmg1 = takeDamage(target, dmg1)
        }
        ;
        var res2 = rollHit(accuracyAndCrit(ship, target, acc, evMod, 0, 1.3, ship.CVshelltype));
        var dmg2 = Math.floor(target.HP * (.06 + .08 * Math.random())), realdmg2 = 0;
        if (res2) {
            dmg2 = damage(ship, target, ship.shellPower(target, ship.fleet.basepowshell) + FPfit, preMod, res2 * postMod);
            realdmg2 = takeDamage(target, dmg2);
        } else {
            realdmg2 = takeDamage(target, dmg2);
        }
        ship.fleet.giveCredit(ship, dmg1 + dmg2);

        if (C) {
            console.log(ship.name + ' shells ' + target.name + ' for ' + dmg1 + ', ' + dmg2 + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
            APIhou.api_at_list.push(ship.apiID);
            APIhou.api_df_list.push([target.apiID, target.apiID]);
            APIhou.api_damage.push([realdmg1 + DIDPROTECT * .1, realdmg2 + DIDPROTECT * .1]);
            APIhou.api_at_type.push(2);
            APIhou.api_cl_list.push([((res1 > 1) ? 2 : 1), ((res2 > 1) ? 2 : 1)]);
        }
    } else {
        var res = rollHit(accuracyAndCrit(ship, target, acc, evMod, 0, 1.3, ship.CVshelltype), ship.critdmgbonus);
        var dmg = (cutin) ? Math.floor(target.HP * (.06 + .08 * Math.random())) : 0, realdmg = 0;
        if (res) {
            dmg = damage(ship, target, ship.shellPower(target, ship.fleet.basepowshell) + FPfit, preMod, res * postMod);
            realdmg = takeDamage(target, dmg);
        } else {
            realdmg = takeDamage(target, dmg);
        }
        ship.fleet.giveCredit(ship, dmg);

        if (C) {
            console.log(ship.name + ' shells ' + target.name + ' for ' + dmg + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
            APIhou.api_at_list.push(ship.apiID);
            APIhou.api_df_list.push([target.apiID]);
            APIhou.api_damage.push([realdmg + DIDPROTECT * .1]);
            APIhou.api_at_type.push((cutin) ? 3 : 0);
            APIhou.api_cl_list.push([((res > 1) ? 2 : 1)]);
        }
    }
    return (target.HP <= 0);
}

function NBattack(ship, target, NBonly, NBequips, APIyasen) {
    var starshells = NBequips[0], searchlights = NBequips[1], nightscouts = NBequips[2];
    if (!ship.canNB()) return false;
    var da = false; //1 = combined damage, 2 = separate damages
    var cutin = false;

    var preMod = ship.damageMod();
    var postMod = 1;
    var bonus = 5 * nightscouts[0];//add if have night scout

    var accBase = (69 + starshells[0] * 5) * ((nightscouts[0]) ? 1.1 : 1);
    var accMod = ship.fleet.formation.NBacc * ship.moraleMod();
    var accFlat = ship.ACC;
    if (ship.ACCnbImprv) accFlat += ship.ACCnbImprv;

    var evMod = target.fleet.formation.NBev;
    var evFlat = (target.type == 'CA' || target.type == 'CAV') ? 5 : 0;
    if (target.hasSearchlight) {
        evMod *= .2;
        evFlat *= .2;
    }

    var NBchance = ship.NBchance();
    NBchance += starshells[0] * 4 - starshells[1] * 10 + searchlights[0] * 7 - searchlights[1] * 5;
    if (ship.HP / ship.maxHP <= .5) NBchance += 18;
    NBchance *= .01;
    if (C) console.log('base NB chance: ' + NBchance);

    switch (ship.NBtype()) {
        case 1:  //single attack

            break;
        case 2:  //double attack
            if (Math.random() < .99) {
                da = 2;
                preMod *= 1.2;
                accMod *= 1.1; //guess
            }
            break;
        case 3:  //mixed cut-in
            if (!target.isInstall && Math.random() < NBchance / 1.15) {
                cutin = 2;
                da = 1;
                preMod *= 1.3;
                accMod *= 1.5; //guess
            }
            break;
        case 4: //sec gun cut-in
            if (Math.random() < NBchance / 1.3) {
                cutin = 4;
                preMod *= 1.75;
                accMod *= 1.5; //guess
            }
            break;
        case 5: //main gun cut-in
            if (Math.random() < NBchance / 1.4) {
                cutin = 5;
                preMod *= 2;
                accMod *= 2; //guess
            }
            break;
        case 6: //torp cut-in
            if (!target.isInstall && Math.random() < NBchance / 1.22) {
                cutin = 3;
                da = 1;
                preMod *= 1.5;
                accMod *= 1.65;
            }
            break;
    }

    var acc = hitRate(ship, accBase, accFlat, accMod);
    if (ship.ACCfit) acc += ship.ACCfit * .01; //use NB specific fit calc? did it get updated?
    if (searchlights[0]) acc += .07;
    if (ship.ACCnbca) acc += ship.ACCnbca * .01;

    var critMod = 1.5;
    if (nightscouts[0]) critMod += .07;

    if (da) {
        var res1 = rollHit(accuracyAndCrit(ship, target, acc, evMod, evFlat, critMod));
        var dmg1 = Math.floor(target.HP * (.06 + .08 * Math.random())), realdmg1 = 0;
        if (res1) {
            dmg1 = damage(ship, target, ship.NBPower(target) + bonus, preMod, res1 * postMod, 300);
            realdmg1 = takeDamage(target, dmg1);
        } else {
            realdmg1 = takeDamage(target, dmg1)
        }
        ;
        var res2 = rollHit(accuracyAndCrit(ship, target, acc, evMod, evFlat, critMod));
        var dmg2 = Math.floor(target.HP * (.06 + .08 * Math.random())), realdmg2 = 0;
        if (res2) {
            dmg2 = damage(ship, target, ship.NBPower(target) + bonus, preMod, res2 * postMod, 300);
            realdmg2 = takeDamage(target, dmg2);
        } else {
            realdmg2 = takeDamage(target, dmg2);
        }
        ship.fleet.giveCredit(ship, dmg1 + dmg2);

        if (C) {
            console.log(ship.name + ' shells ' + target.name + ' for ' + dmg1 + ', ' + dmg2 + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
            APIyasen.api_at_list.push(ship.apiID);
            APIyasen.api_df_list.push([target.apiID, target.apiID]);
            APIyasen.api_damage.push([realdmg1 + DIDPROTECT * .1, realdmg2 + DIDPROTECT * .1]);
            APIyasen.api_sp_list.push((da == 2) ? 1 : cutin);
            APIyasen.api_cl_list.push([((res1 > 1) ? 2 : 1), ((res2 > 1) ? 2 : 1)]);
        }
    } else {
        var res = rollHit(accuracyAndCrit(ship, target, acc, evMod, evFlat, critMod));
        var dmg = (cutin) ? Math.floor(target.HP * (.06 + .08 * Math.random())) : 0;
        var realdmg = 0;
        if (res) {
            dmg = damage(ship, target, ship.NBPower(target) + bonus, preMod, res * postMod, 300);
            realdmg = takeDamage(target, dmg);
        } else {
            realdmg = takeDamage(target, dmg);
        }
        ship.fleet.giveCredit(ship, dmg);

        if (C) {
            console.log(ship.name + ' shells ' + target.name + ' for ' + dmg + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
            APIyasen.api_at_list.push(ship.apiID);
            APIyasen.api_df_list.push([target.apiID]);
            APIyasen.api_damage.push([realdmg + DIDPROTECT * .1]);
            APIyasen.api_sp_list.push((cutin) ? cutin : 0);
            APIyasen.api_cl_list.push([((res > 1) ? 2 : 1)]);
        }
    }
    return (target.HP <= 0);
}

function ASW(ship, target, isnight, APIhou) {
    var sonarAcc = 0;
    for (var i = 0; i < ship.equips.length; i++) if (ship.equips[i].btype == B_SONAR) sonarAcc += 2 * ship.equips[i].ASW;
    if (ship.ACCaswImprv) sonarAcc += ship.ACCaswImprv;
    var accMod = ship.moraleMod();
    if (!formationCountered(ship.fleet.formation.id, target.fleet.formation.id)) accMod *= ship.fleet.formation.shellacc;
    var acc = hitRate(ship, 80, sonarAcc, accMod);
    var res = rollHit(accuracyAndCrit(ship, target, acc, target.fleet.formation.ASWev, 0, 1.3, ship.planeasw), ship.critdmgbonus);
    var dmg = 0, realdmg = 0;
    var premod = (isnight) ? 0 : ship.fleet.formation.ASWmod * ENGAGEMENT * ship.damageMod();
    if (res) {
        if (C) console.log(ship.ASWPower());
        dmg = damage(ship, target, ship.ASWPower(), premod, res, 100);
        realdmg = takeDamage(target, dmg);
    }
    ship.fleet.giveCredit(ship, dmg);
    if (C) {
        console.log(ship.name + ' ASWs ' + target.name + ' for ' + dmg + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
        APIhou.api_at_list.push(ship.apiID);
        APIhou.api_df_list.push([target.apiID]);
        APIhou.api_damage.push([realdmg + DIDPROTECT * .1]);
        if (APIhou.api_at_type) APIhou.api_at_type.push(0);
        else APIhou.api_sp_list.push(0);
        APIhou.api_cl_list.push([((res > 1) ? 2 : 1)]);
    }
    return (target.HP <= 0);
}

function laser(ship, targets, APIhou) {
    var preMod = ship.fleet.formation.shellmod * ENGAGEMENT * ship.damageMod();
    var accMod = ship.moraleMod();
    if (!formationCountered(ship.fleet.formation.id, targets[0].fleet.formation.id)) accMod *= ship.fleet.formation.shellacc;
    var acc = hitRate(ship, 90, 0, accMod);
    var evMod = ship.fleet.formation.shellev;
    var targetids = [], damages = [], crits = [];
    for (var i = 0; i < targets.length; i++) {
        var postMod = ship.APmod(targets[i]); //want this?
        var res = rollHit(accuracyAndCrit(ship, targets[i], acc, evMod, 0, 1.3));
        var dmg = 0, realdmg = 0;
        if (res) {
            dmg = damage(ship, targets[i], ship.shellPower(targets[i]), preMod, res * postMod);
            realdmg = takeDamage(targets[i], dmg);
        } else {
            realdmg = takeDamage(targets[i], dmg);
        }
        ship.fleet.giveCredit(ship, dmg);
        if (C) {
            console.log(ship.name + ' LASERS ' + targets[i].name + ' FOR ' + dmg + ' DAMAGE, ' + targets[i].HP + '/' + targets[i].maxHP + ' left');
            targetids.push(targets[i].apiID);
            damages.push(realdmg);
            crits.push(((res > 1) ? 2 : 1));
        }
    }
    if (C) {
        APIhou.api_at_list.push(ship.apiID);
        APIhou.api_df_list.push(targetids);
        APIhou.api_damage.push(damages);
        APIhou.api_at_type.push(1);
        APIhou.api_cl_list.push(crits);
    }
}

function shellPhase(order1, order2, alive1, subsalive1, alive2, subsalive2, APIhou) {
    if (C) code += 'S:';
    for (var i = 0; i < 6; i++) {
        if (i < order1.length && order1[i].canStillShell()) {
            if (subsalive2.length && order1[i].canASW()) {
                var target = choiceWProtect(subsalive2);
                if (ASW(order1[i], target, false, APIhou)) subsalive2.splice(subsalive2.indexOf(target), 1);
            } else if (alive2.length) {
                if (order1[i].canlaser && Math.random() < .5) {
                    var targets = shuffle(alive2.slice()).slice(0, 1 + Math.max(0, Math.floor((alive2.length - 1) * Math.random())));
                    laser(order1[i], targets, APIhou);
                    for (var j = 0; j < targets.length; j++) if (targets[j].HP <= 0) alive2.splice(alive2.indexOf(targets[j]), 1);
                } else {
                    var targets; //divebomber can't shell install, copy over to enemy?
                    if (order1[i].hasDivebomber) {
                        targets = [];
                        for (var j = 0; j < alive2.length; j++) if (!alive2[j].isInstall) targets.push(alive2[j]);
                    } else targets = alive2;
                    if (targets.length) {
                        var target = choiceWProtect(targets);
                        if (shell(order1[i], target, APIhou)) alive2.splice(alive2.indexOf(target), 1);
                    }
                }
            }
        }
        if (alive2.length + subsalive2.length <= 0) break;
        if (i < order2.length && order2[i].canStillShell()) {
            if (subsalive1.length && order2[i].canASW()) {
                var target = choiceWProtect(subsalive1);
                if (ASW(order2[i], target, false, APIhou)) subsalive1.splice(subsalive1.indexOf(target), 1);
            } else if (alive1.length) {
                if (order2[i].canlaser && Math.random() < .5) {
                    var targets = shuffle(alive1.slice()).slice(0, 1 + Math.max(0, Math.floor((alive1.length - 1) * Math.random())));
                    laser(order2[i], targets, APIhou);
                    for (var j = 0; j < targets.length; j++) if (targets[j].HP <= 0) alive1.splice(alive1.indexOf(targets[j]), 1);
                } else {
                    var target = choiceWProtect(alive1);
                    if (shell(order2[i], target, APIhou)) alive1.splice(alive1.indexOf(target), 1);
                }
            }
        }
        if (alive1.length + subsalive1.length <= 0) break;
    }
}

function nightPhase(order1, order2, alive1, subsalive1, alive2, subsalive2, NBonly, APIyasen) {
    var APIhou = (APIyasen) ? APIyasen.api_hougeki : undefined;
    var star1 = false;
    for (var i = 0; i < alive1.length; i++) {
        if (alive1[i].hasStarShell && alive1[i].HP > 4 && Math.random() < .7) {
            star1 = true;
            if (C) APIyasen.api_flare_pos[0] = i + 1;
            break;
        }
    }
    var star2 = false;
    for (var i = 0; i < alive2.length; i++) {
        if (alive2[i].hasStarShell && alive2[i].HP > 4 && Math.random() < .7) {
            star2 = true;
            if (C) APIyasen.api_flare_pos[1] = i + 1;
            break;
        }
    }
    var light1 = false, lightship1 = 0, slrerolls1 = 0;
    for (var i = 0; i < alive1.length; i++) {
        if (alive1[i].hasSearchlight) {
            light1 = true;
            lightship1 = i;
            slrerolls1 = alive1[i].hasSearchlight;
            break;
        }
    }
    var light2 = false, lightship2 = 0, slrerolls2 = 0;
    for (var i = 0; i < alive2.length; i++) {
        if (alive2[i].hasSearchlight) {
            light2 = true;
            lightship2 = i;
            slrerolls2 = alive2[i].hasSearchlight;
            break;
        }
    }
    var scout1 = false;
    for (var i = 0; i < alive1.length; i++) {
        if (alive1[i].hasNightScout && Math.random() < Math.floor(Math.sqrt(alive1[i].LVL) * Math.sqrt(3)) / 25) {
            scout1 = true;
            if (C) APIyasen.api_touch_plane[0] = 102;
            break;
        }
    }
    var scout2 = false;
    for (var i = 0; i < alive2.length; i++) {
        if (alive2[i].hasNightScout && Math.random() < Math.floor(Math.sqrt(alive2[i].LVL) * Math.sqrt(3)) / 25) {
            scout2 = true;
            if (C) APIyasen.api_touch_plane[1] = 102;
            break;
        }
    }
    for (var i = 0; i < 6; i++) {
        if (i < order1.length && order1[i].canNB()) {
            if (subsalive2.length && order1[i].canASW() && !order1[i].planeasw) {
                var target = choiceWProtect(subsalive2);
                if (ASW(order1[i], target, !NBonly, APIhou)) subsalive2.splice(subsalive2.indexOf(target), 1);
            } else if (alive2.length) {
                var target = choiceWProtect(alive2, slrerolls2);
                // if (light2 && Math.random() < .2) target = alive2[lightship2];
                if (NBattack(order1[i], target, NBonly, [[star1, star2], [light1, light2], [scout1, scout2]], APIhou)) alive2.splice(alive2.indexOf(target), 1);
            }
        }
        if (alive2.length + subsalive2.length <= 0) break;
        if (i < order2.length && order2[i].canNB()) {
            if (subsalive1.length && order2[i].canASW() && !order2[i].planeasw) {
                var target = choiceWProtect(subsalive1);
                if (ASW(order2[i], target, !NBonly, APIhou)) subsalive1.splice(subsalive1.indexOf(target), 1);
            } else if (alive1.length) {
                var target = choiceWProtect(alive1, slrerolls1);
                // if (light1 && Math.random() < .2) target = alive1[lightship1];
                if (NBattack(order2[i], target, NBonly, [[star2, star1], [light2, light1], [scout2, scout1]], APIhou)) alive1.splice(alive1.indexOf(target), 1);
            }
        }
        if (alive1.length + subsalive1.length <= 0) break;
    }
    if (C) {
        if (code[code.length - 1] == '|') code = code.substr(0, code.length - 1);
        code += '~';
    }
}

function torpedoPhase(alive1, subsalive1, alive2, subsalive2, opening, APIrai) {
    var shots = []; //set up shots
    var targets2 = [];
    for (var i = 0; i < alive2.length; i++) {
        if (!alive2[i].isInstall) targets2.push(alive2[i]);
    }
    var targets1 = [];
    for (var i = 0; i < alive1.length; i++) {
        if (!alive1[i].isInstall) targets1.push(alive1[i]);
    }

    if (targets2.length) {  //any targets?
        for (var i = 0; i < alive1.length + subsalive1.length; i++) {
            var ship = (i < alive1.length) ? alive1[i] : subsalive1[i - alive1.length];
            if ((opening) ? ship.canOpTorp() : ship.canTorp()) {
                var target = choiceWProtect(targets2);
                shots.push([ship, target]);
            }
        }
    }
    if (targets1.length) {
        for (var i = 0; i < alive2.length + subsalive2.length; i++) {
            var ship = (i < alive2.length) ? alive2[i] : subsalive2[i - alive2.length];
            if ((opening) ? ship.canOpTorp() : ship.canTorp()) {
                var target = choiceWProtect(targets1);
                shots.push([ship, target]);
            }
        }
    }
    var damageMods = {};
    for (var i = 0; i < shots.length; i++) damageMods[shots[i][0].id] = shots[i][0].damageMod(true);
    for (var i = 0; i < shots.length; i++) {  //do the shots
        var ship = shots[i][0];
        var target = shots[i][1];

        var power = (ship.isescort) ? ship.TP : (ship.TP + 5);
        power *= ship.fleet.formation.torpmod * ENGAGEMENT * damageMods[ship.id];
        if (power > 150) power = 150 + Math.sqrt(power - 150);

        var accflat = (ship.ACC) ? ship.ACC : 0;
        if (ship.ACCtorpImprv) accflat += Math.floor(ship.ACCtorpImprv);
        accflat += Math.floor(power / 5);
        if (ship.TACC) accflat += ship.TACC;
        var acc = hitRate(ship, 85, accflat, ship.fleet.formation.torpacc * ship.moraleMod(true));

        var evFlat = (target.EVtorpImprv) ? ship.EVtorpImprv : 0;
        var res = rollHit(accuracyAndCrit(ship, target, acc, target.fleet.formation.torpev, evFlat, 1.5));
        var realdmg = 0, dmg = 0;
        if (res) {
            var bonus = (ship.PtorpImprv) ? ship.PtorpImprv : 0;
            dmg = damage(ship, target, power, 1, res, 10000); //power already capped
            realdmg = takeDamage(target, dmg);
        }
        ship.fleet.giveCredit(ship, dmg);
        if (C) {
            console.log(ship.name + ' torpedoes ' + target.name + ' for ' + dmg + ' damage, ' + target.HP + '/' + target.maxHP + ' left');
            APIrai[(ship.id > 9) ? 'api_erai' : 'api_frai'][ship.apiID - 6 * (ship.id > 9)] = target.apiID - 6 * (target.id > 9);
            APIrai[(target.id > 9) ? 'api_edam' : 'api_fdam'][target.apiID - 6 * (target.id > 9)] += realdmg;
            APIrai[(ship.id > 9) ? 'api_eydam' : 'api_fydam'][ship.apiID - 6 * (ship.id > 9)] = realdmg;
        }
    }
    for (var i = 0; i < alive1.length; i++) {   //remove dead things
        if (alive1[i].HP <= 0) {
            alive1.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < alive2.length; i++) {
        if (alive2[i].HP <= 0) {
            alive2.splice(i, 1);
            i--;
        }
    }

    if (C) {
        if (code[code.length - 1] == '|') code = code.substr(0, code.length - 1);
        code += '~';
    }
}

function airstrike(ship, target, slot, contactMod, issupport) {
    if (!contactMod) contactMod = 1;
    var acc = (issupport) ? .85 : .95;
    var res = rollHit(accuracyAndCrit(ship, target, acc, target.fleet.formation.AAmod, 0, .2, true), ship.critdmgbonus);
    var equip = ship.equips[slot];
    var dmg = 0, realdmg = 0;
    var planebase = (equip.isdivebomber) ? equip.DIVEBOMB : equip.TP;
    if (C) console.log('		' + slot + ' ' + planebase);
    if (res) {
        var base = (issupport) ? 3 : 25;
        dmg = damage(ship, target, base + Math.sqrt(ship.planecount[slot]) * planebase, (equip.isdivebomber) ? 1 : ((Math.random() < .5) ? .8 : 1.5), res * contactMod, 150);
        realdmg = takeDamage(target, dmg);
    }
    ship.fleet.giveCredit(ship, dmg);
    if (C) {
        console.log(ship.name + ' airstrikes ' + target.name + ' for ' + dmg + ' damage, ' + target.HP + '/' + target.maxHP + ' left, CONTACT: ' + contactMod);
    }
    return realdmg;
}

function takeDamage(ship, damage) {
    if (damage < 0) damage = 0;
    if (ship.protection) {
        if (ship.HP == 1) damage = 0;
        else if (damage >= ship.HP) damage = Math.floor(ship.HP * (.5 + .3 * Math.random()));  //overkill protection
    }
    ship.HP -= damage;

    return damage;
}

function hitRate(ship, accBase, accFlat, accMod) {
    if (C) console.log('hit: ' + accBase + ' ' + accFlat + ' ' + accMod);
    return (accBase + 2 * Math.sqrt(ship.LVL) + Math.sqrt(ship.LUK * 1.5) + accFlat) * accMod * .01;
}

function accuracyAndCrit(ship, target, hit, evMod, evFlat, critMod, isPlanes) {
    if (evMod === undefined) evMod = 1;

    var evade = (target.EV + Math.sqrt(target.LUK * 2)) * evMod; //formation
    var dodge = (evade > 65) ? 55 + 2 * Math.sqrt(evade - 65) : ((evade > 40) ? 40 + 3 * Math.sqrt(evade - 40) : evade);
    dodge *= .01;
    if (target.fuelleft < 7.5) dodge -= (7.5 - target.fuelleft) / 10;
    if (evFlat) dodge += evFlat * .01;

    if (C) console.log('	hit: ' + hit + ' dodge: ' + dodge);
    let acc = Math.max(hit - dodge, .1);
    acc *= target.moraleModEv();
    acc = Math.min(.96, acc);

    var crit = Math.sqrt(100 * acc) * critMod * .01;
    if (isPlanes) {
        if (ship.ACCplane) acc += ship.ACCplane * .01;
        if (ship.critratebonus) crit += ship.critratebonus * .01; //x.75 earlier, find real value?
    }
    if (C) console.log('	accfinal: ' + acc + ', crit: ' + crit);
    return [acc, crit];
}

function rollHit(accCrit, critdmgbonus) {
    var r = Math.floor(Math.random() * 100) / 100;
    if (r <= accCrit[1]) return CRITMOD * ((critdmgbonus) ? critdmgbonus : 1);
    if (r <= accCrit[0]) return 1; //normal hit
    return 0;  //miss
}

function damage(ship, target, base, preMod, postMod, cap) {
    if (!cap) cap = 150;
    if (typeof preMod === 'undefined') preMod = 1;
    if (typeof postMod === 'undefined') postMod = 1;
    if (C) console.log('	' + ship.id + ' ' + target.id + ' ' + base + ' ' + preMod + ' ' + postMod + ' ' + cap);

    var dmg = base;
    dmg *= preMod;  //NB attack, torpedo bomber, formation mod

    if (dmg > cap) dmg = cap + Math.sqrt(dmg - cap);

    dmg *= postMod;  //artillery spotting, contact, AP shell, critical
    if (target.installtype == 3) { //supply depot type installations
        dmg *= ship.supplyPostMult;
    }
    if (C) console.log('	before def: ' + dmg);
    dmg -= target.AR * (.7 + .6 * Math.random());
    if (C) console.log('	after def: ' + dmg);

    if (ship.ammoleft < 5) dmg *= .2 * ship.ammoleft;

    dmg = Math.floor(dmg);
    if (dmg <= 0) dmg = Math.floor(target.HP * (.06 + .08 * Math.random())); //scratch damage
    if (C) console.log('	returned: ' + dmg);
    return dmg;
}

function softCap(num, cap) {
    return (num > cap) ? cap + Math.sqrt(num - cap) : num;
}

function compareAP(fleet1, fleet2) {
    var ap1 = fleet1.fleetAirPower(), ap2 = fleet2.fleetAirPower();
    if (ap1 == 0 && ap2 == 0) {
        fleet1.AS = fleet2.AS = 0;
    }
    else if (ap1 >= ap2 * 3) {
        fleet1.AS = 2;
        fleet2.AS = -2;
    }
    else if (ap1 >= ap2 * 1.5) {
        fleet1.AS = 1;
        fleet2.AS = -1;
    }
    else if (ap2 >= ap1 * 3) {
        fleet1.AS = -2;
        fleet2.AS = 2;
    }
    else if (ap2 >= ap1 * 1.5) {
        fleet1.AS = -1;
        fleet2.AS = 1;
    }
    else {
        fleet1.AS = fleet2.AS = 0;
    }
    if (C) console.log('AS: ' + ap1 + ' ' + ap2 + ' ' + fleet1.AS + ' ' + fleet2.AS);
}

function choiceWProtect(targets, searchlightRerolls) {
    DIDPROTECT = false; //disgusting hack, rework later?
    var target = targets[Math.floor(Math.random() * targets.length)];
    if (searchlightRerolls) {
        for (var i = 0; i < searchlightRerolls; i++) {
            if (target.hasSearchlight) break;
            target = targets[Math.floor(Math.random() * targets.length)];
        }
    }
    if (!target.isflagship || target.isInstall || target.isescort) return target;

    //flagship protection
    var rate = [0, .45, .6, .75, .6, .6][target.fleet.formation.id];
    if (!rate) rate = .6;
    if (Math.random() < rate) {
        var defenders = [];
        for (var i = 0; i < targets.length; i++) {
            if (!targets[i].isflagship && targets[i].HP / targets[i].maxHP > .75 && targets[i].fleet.id == target.fleet.id) defenders.push(targets[i]);
        }
        if (C) {
            console.log('***FLAGSHIP PROTECT ' + rate + ' ' + defenders.length);
            console.log(defenders);
        }
        if (defenders.length <= 0) return target;
        DIDPROTECT = true;
        return defenders[Math.floor(Math.random() * (defenders.length))];
    }
    return target;
}

function AADefenceFighters(carriers, showplanes, APIkouku) {
    for (var i = 0; i < carriers.length; i++) {
        var ship = carriers[i], hasfighter = false;
        for (var j = 0; j < ship.equips.length; j++) {
            if (ship.equips[j].isfighter || ship.equips[j].isdivebomber || ship.equips[j].istorpbomber) {
                var lostcount;
                if (ship.side == 0) {
                    var rmin, rplus;
                    switch (ship.fleet.AS) {
                        case 2:
                            rmin = .025;
                            rplus = .0333;
                            break;
                        case 1:
                            rmin = .075;
                            rplus = .1;
                            break;
                        case 0:
                            rmin = .125;
                            rplus = .1666;
                            break;
                        case -1:
                            rmin = .175;
                            rplus = .2333;
                            break;
                        case -2:
                            rmin = .25;
                            rplus = .3333;
                            break;
                    }
                    var randplus = Math.floor((Math.floor(100 * rplus) + 1) * Math.random()) / 100;
                    lostcount = Math.floor(ship.PLANESLOTS[j] * (rmin + randplus));
                } else {
                    var rmax;
                    switch (ship.fleet.AS) {
                        case 2:
                            rmax = 2;
                            break;
                        case 1:
                            rmax = 5;
                            break;
                        case 0:
                            rmax = 7;
                            break;
                        case -1:
                            rmax = 9;
                            break;
                        case -2:
                            rmax = 11;
                            break;
                    }
                    var mod = Math.floor(Math.random() * rmax) * .35 + Math.floor(Math.random() * rmax) * .65;
                    lostcount = Math.floor(ship.PLANESLOTS[j] * mod / 10);
                }
                if (C) {
                    APIkouku.api_stage1[(ship.id > 9) ? 'api_e_count' : 'api_f_count'] += ship.planecount[j];
                    APIkouku.api_stage1[(ship.id > 9) ? 'api_e_lostcount' : 'api_f_lostcount'] += lostcount;
                }
                ship.planecount[j] -= lostcount;
                if (ship.planecount[j] < 0) ship.planecount[j] = 0;
                // if (!ship.equips[j].istorpbomber&&!ship.equips[j].isdivebomber) hasfighter = true;
                hasfighter = true;
            }
        }
        if (C && hasfighter && showplanes) APIkouku.api_plane_from[(ship.id > 9) ? 1 : 0].push(ship.apiID);
    }
}

function getAAShotProp(defender, slotsize) {
    return Math.floor(slotsize * defender.weightedAntiAir() / 400);
}

function getAAShotFlat(defender) {
    var mod = (defender.side == 0) ? .1 : 0.09375;
    return (defender.weightedAntiAir() + defender.fleet.fleetAntiAir()) * mod;
}

function AADefenceBombersAndAirstrike(carriers, targets, defenders, APIkouku, issupport) {
    var bombers = [], hasbomber = false, losPower = 0;
    for (var i = 0; i < carriers.length; i++) {
        var ship = carriers[i];
        bombers.push([]);
        for (var j = 0; j < ship.equips.length; j++) {
            var e = ship.equips[j];
            if ((e.istorpbomber || e.isdivebomber) && ship.planecount[j] > 0) {
                bombers[i].push(j);
                hasbomber = true;
                if (C && APIkouku.api_plane_from[(ship.id > 9) ? 1 : 0].indexOf(ship.apiID) == -1) APIkouku.api_plane_from[(ship.id > 9) ? 1 : 0].push(ship.apiID);
            }
            if (e.LOS && EQTDATA[e.type].isPlane) losPower += Math.floor(Math.sqrt(ship.planecount[j]) * e.LOS);
        }
    }
    if (!hasbomber) return;

    //get AACI
    var AACInum = 0, AACImod = 1;
    if (MECHANICS.AACI) {
        var AACIship, AACItype = 0;
        for (var i = 0; i < defenders.length; i++) {
            if (defenders[i].AACItype.length) {
                var r = Math.random();
                for (var j = 0; j < defenders[i].AACItype.length; j++) {
                    var type = defenders[i].AACItype[j];
                    if (type > AACItype && r < AACIDATA[type].rate) {
                        AACItype = type;
                        AACIship = defenders[i];
                        break;
                    }
                }
            }
        }
        if (AACItype) {
            AACInum = AACIDATA[AACItype].num;
            AACImod = AACIDATA[AACItype].mod;
            if (C) APIkouku.api_stage2[(AACIship.id < 10) ? 'api_air_fire' : 'api_air_fire_e'] = {
                api_idx: AACIship.apiID - 1 + ((AACIship.isescort) ? 6 : 0),
                api_kind: AACItype
            };
        }
    }

    //get contact
    var contactMod = 1;
    if (carriers[0].fleet.AS != -2 && carriers[0].fleet.AS != 0 && !issupport) {
        //phase 1
        var chance, cmod;
        if (carriers[0].fleet.AS == 2) {
            chance = losPower / 25;
            cmod = 14;
        }
        else if (carriers[0].fleet.AS == 1) {
            chance = losPower / 40;
            cmod = 16;
        }
        else {
            chance = losPower / 55;
            cmod = 18;
        }
        if (C) console.log('CONTACT CHANCE 1: ' + chance);
        //phase 2
        if (Math.random() < chance) {
            var contacter = null;
            for (var j = 0; j < carriers.length; j++) {
                var ship = carriers[j];
                for (var i = 0; i < ship.equips.length; i++) {
                    var equip = ship.equips[i];
                    if (!EQTDATA[equip.type].canContact || !equip.LOS) continue;
                    if (contacter && ((contacter.ACC || 0) >= (equip.ACC || 0))) continue;
                    if (C) console.log('    CHANCE 2: ' + (equip.LOS / cmod));
                    if (Math.random() < equip.LOS / cmod) contacter = equip;
                }
            }
            if (contacter) {
                if (contacter.ACC >= 3) contactMod = 1.2;
                else if (contacter.ACC == 2) contactMod = 1.17;
                else contactMod = 1.12;
                if (C) APIkouku.api_stage1.api_touch_plane[carriers[0].side] = contacter.mid;
            }
        }
    }

    for (var i = 0; i < bombers.length; i++) {
        var ship = carriers[i];
        for (var j = 0; j < bombers[i].length; j++) {
            var slot = bombers[i][j];
            var defender = defenders[Math.floor(Math.random() * defenders.length)];
            var supportMod = (issupport) ? .8 : 1;
            var shotProp = (Math.random() < .5) ? Math.floor(getAAShotProp(defender, ship.planecount[slot]) * supportMod) : 0;
            var shotFlat = (Math.random() < .5) ? Math.floor(getAAShotFlat(defender) * AACImod * supportMod) : 0;
            var shotFix = ((defender.side == 0 || AACInum) ? 1 : 0) + AACInum;

            if (C) {
                APIkouku.api_stage2[(ship.id > 9) ? 'api_e_count' : 'api_f_count'] += ship.planecount[slot];
                APIkouku.api_stage2[(ship.id > 9) ? 'api_e_lostcount' : 'api_f_lostcount'] += shotProp + shotFlat + shotFix;
            }
            ship.planecount[slot] = Math.max(0, ship.planecount[slot] - shotProp - shotFlat - shotFix);
            if (C) console.log('	anti air: ' + defender.name + ' ' + defender.AA + ' ' + shotProp + ' ' + shotFlat + ' ' + shotFix + ' ' + ship.planecount[slot]);

            if (ship.planecount[slot] <= 0) {
                ship.planecount[slot] = 0;
                continue;
            }

            if (targets.length) {  //even if subs only, bombers still get shot down
                var target = choiceWProtect(targets);
                var dmg = airstrike(ship, target, slot, contactMod, issupport);
                if (C) {
                    if (target.isescort) {
                        APIkouku.api_stage3_combined[(target.id > 9) ? 'api_ebak_flag' : 'api_fbak_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 1;
                        APIkouku.api_stage3_combined[(target.id > 9) ? 'api_edam' : 'api_fdam'][(target.id > 9) ? target.id - 9 : target.id + 1] += dmg;
                        APIkouku.api_stage3_combined[(target.id > 9) ? 'api_ecl_flag' : 'api_fcl_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 0;
                        if (ship.equips[slot].istorpbomber) APIkouku.api_stage3_combined[(target.id > 9) ? 'api_erai_flag' : 'api_frai_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 1;
                    } else {
                        APIkouku.api_stage3[(target.id > 9) ? 'api_ebak_flag' : 'api_fbak_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 1;
                        APIkouku.api_stage3[(target.id > 9) ? 'api_edam' : 'api_fdam'][(target.id > 9) ? target.id - 9 : target.id + 1] += dmg;
                        APIkouku.api_stage3[(target.id > 9) ? 'api_ecl_flag' : 'api_fcl_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 0;
                        if (ship.equips[slot].istorpbomber) APIkouku.api_stage3[(target.id > 9) ? 'api_erai_flag' : 'api_frai_flag'][(target.id > 9) ? target.id - 9 : target.id + 1] = 1;
                    }
                }
            }
        }
    }
}

function airPhase(alive1, subsalive1, alive2, subsalive2, APIkouku) {
    // if (C) code += 'A:'
    var carriers1 = [], carriers2 = [];
    for (var i = 0; i < alive1.length; i++) if (alive1[i].iscarrier && !alive1[i].isescort) carriers1.push(alive1[i]);
    for (var i = 0; i < subsalive1.length; i++) if (subsalive1[i].iscarrier && !subsalive1[i].isescort) carriers1.push(subsalive1[i]);
    for (var i = 0; i < alive2.length; i++) if (alive2[i].iscarrier) carriers2.push(alive2[i]);
    for (var i = 0; i < subsalive2.length; i++) if (subsalive2[i].iscarrier) carriers2.push(subsalive2[i]);

    if (carriers1.length || carriers2.length) {
        // if (C) code += '{aaci1},{aaci2},0,0:'
        if (C) {
            APIkouku.api_stage1 = {
                api_e_count: 0,
                api_e_lostcount: 0,
                api_f_count: 0,
                api_f_lostcount: 0,
                api_touch_plane: [-1, -1]
            };
            APIkouku.api_stage2 = {api_e_count: 0, api_e_lostcount: 0, api_f_count: 0, api_f_lostcount: 0};
            APIkouku.api_stage3 = {
                api_ebak_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_edam: [-1, 0, 0, 0, 0, 0, 0],
                api_erai_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fbak_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fdam: [-1, 0, 0, 0, 0, 0, 0],
                api_frai_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_ecl_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fcl_flag: [-1, 0, 0, 0, 0, 0, 0]
            };
            APIkouku.api_stage3_combined = {
                api_ebak_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_edam: [-1, 0, 0, 0, 0, 0, 0],
                api_erai_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fbak_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fdam: [-1, 0, 0, 0, 0, 0, 0],
                api_frai_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_ecl_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_fcl_flag: [-1, 0, 0, 0, 0, 0, 0]
            };
        }
        //fighter defence
        AADefenceFighters(carriers1, alive2.length, APIkouku);
        AADefenceFighters(carriers2, alive1.length, APIkouku);

        //bomber defence
        if (!bombing) AADefenceBombersAndAirstrike(carriers1, alive2, alive2.concat(subsalive2), APIkouku);
        AADefenceBombersAndAirstrike(carriers2, alive1, alive1.concat(subsalive1), APIkouku);
    }
    if (C) {
        for (var i = 0; i < 2; i++)
            if (APIkouku && APIkouku.api_plane_from[i].length > 1)
                APIkouku.api_plane_from[i] = APIkouku.api_plane_from[i].slice(1);
    }
}

function supportPhase(shipsS, alive2, subsalive2, suptype, BAPI) {
    if (C) {
        BAPI.api_data.api_support_flag = suptype;
        BAPI.api_data.api_support_info = {api_support_airatack: null, api_support_hourai: null};
        if (suptype == 2 || suptype == 3) BAPI.api_data.api_support_info.api_support_hourai = {
            api_cl_list: [0, 0, 0, 0, 0, 0, 0],
            api_damage: [0, 0, 0, 0, 0, 0, 0],
            api_deck_id: 3
        };
        else if (suptype == 1) {
            BAPI.api_data.api_support_info.api_support_airatack = {
                api_plane_from: [[-1]],
                api_stage1: null,
                api_stage2: null,
                api_stage3: null
            };
            BAPI.api_data.api_support_info.api_support_airatack.api_stage1 = {
                api_e_count: 0,
                api_e_lostcount: 0,
                api_f_count: 0,
                api_f_lostcount: 0
            };
            BAPI.api_data.api_support_info.api_support_airatack.api_stage2 = {api_f_count: 0, api_f_lostcount: 0};
            BAPI.api_data.api_support_info.api_support_airatack.api_stage3 = {
                api_ebak_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_edam: [-1, 0, 0, 0, 0, 0, 0],
                api_erai_flag: [-1, 0, 0, 0, 0, 0, 0],
                api_ecl_flag: [-1, 0, 0, 0, 0, 0, 0]
            };
        }
    }
    if (!alive2.length) return;
    if (suptype == 2 || suptype == 3) {
        var hou = (BAPI) ? BAPI.api_data.api_support_info.api_support_hourai : undefined;
        for (var i = 0; i < shipsS.length; i++) {
            var ship = shipsS[i];
            var target = choiceWProtect(alive2);
            var accCrit, torpDmg;
            if (suptype == 3) {
                if (!ship.canTorp()) continue;
                torpDmg = 0; //ship.TP;  //is this the bug in the browser version?
                for (var j = 0; j < ship.equips.length; j++) if (ship.equips[j].TP) torpDmg -= ship.equips[j].TP; //is this correct?
                torpDmg += 8;
                accCrit = accuracyAndCrit(ship, target, hitRate(ship, 54, ship.ACC + torpDmg * .35, ship.moraleMod()), target.fleet.formation.torpev, 0, 1.2);
            } else {
                accCrit = accuracyAndCrit(ship, target, hitRate(ship, 64, ship.ACC, ship.moraleMod(true)), target.fleet.formation.shellev, 0, 1, ship.CVshelltype);
            }
            var res = rollHit(accCrit);
            var dmg = 0, realdmg = 0;
            if (res) {
                var dmg;
                if (suptype == 3) dmg = damage(ship, target, torpDmg * .55, ENGAGEMENT, res);
                else dmg = damage(ship, target, ship.shellPower(target) - 1, ENGAGEMENT, res);
                realdmg = takeDamage(target, dmg);
            } else {
                realdmg = 0;
            }
            if (C) {
                console.log(ship.name + ' support attacks ' + target.name + ' for ' + dmg + ' damage');
                hou.api_cl_list[i + 1] = 1;
                hou.api_damage[target.apiID - 7] += realdmg;
            }
        }
        for (var i = 0; i < alive2.length; i++) {
            if (alive2[i].HP <= 0) {
                alive2.splice(i, 1);
                i--;
            }
        }
    } else if (suptype == 1) {
        for (var i = 0; i < shipsS.length; i++) shipsS[i].id = 1;
        var prevAS = alive2[0].fleet.AS;
        compareAP(shipsS[0].fleet, alive2[0].fleet);
        AADefenceFighters(shipsS, false, (C) ? BAPI.api_data.api_support_info.api_support_airatack : null);
        AADefenceBombersAndAirstrike(shipsS, alive2, alive2.concat(subsalive2), (C) ? BAPI.api_data.api_support_info.api_support_airatack : null, true);
        alive2[0].fleet.AS = prevAS;
    }
}

function orderByRange(ships, order) {
    var ranges = [[], [], [], [], []]; //fleet 1
    for (var i = 0; i < ships.length; i++) {
        if (!ships[i].canShell()) continue;
        ranges[ships[i].RNG].push(ships[i]);
    }
    for (var i = 0; i < ranges.length; i++) shuffle(ranges[i]);
    for (var i = 0; i < ranges[4].length; i++) order.push(ranges[4][i]);
    for (var i = 0; i < ranges[3].length; i++) order.push(ranges[3][i]);
    for (var i = 0; i < ranges[2].length; i++) order.push(ranges[2][i]);
    for (var i = 0; i < ranges[1].length; i++) order.push(ranges[1][i]);
    for (var i = 0; i < ranges[0].length; i++) order.push(ranges[0][i]);
}

var bombing = false;
function loadFleet(side, ships, formation, isescort) {
    var link = (isescort) ? FLEETS1[0] : null; //better way to do this...?
    var f = new Fleet(side, link);
    f.ships = [];
    f.loadShips(ships);
    f.formation = ALLFORMATIONS[formation];
    if (side == 0) FLEETS1.push(f);
    else if (side == 1) FLEETS2.push(f);
    else if (side == 2) FLEETS1S[0] = f;
    else if (side == 3) FLEETS1S[1] = f;
}

function createDefaultShip(mid) {
    var data = SHIPDATA[mid];
    var ShipType = window[data.type];
    var ship = new ShipType(mid, data.name, (isPlayable(mid)) ? 0 : 1, (isPlayable(mid)) ? 99 : 1, data.HP, data.FP, data.TP, data.AA, data.AR, data.EV, data.ASW, data.LOS, data.LUK, data.RNG, data.SLOTS);
    if (ship.type == 'SS' && (ship.name.indexOf('Elite') > 0 || ship.name.indexOf('Flagship') > 0)) ship.LVL = 50;
    if (data.EQUIPS) ship.loadEquips(data.EQUIPS, [0, 0, 0, 0], true);
    if (SHIPDATA[mid].isInstall) ship.isInstall = true;
    return ship;
}

function sim(F1, F2, Fsupport, doNB, NBonly, aironly, landbomb, BAPI) {
    bombing = landbomb;
    var ships1 = F1.ships, ships2 = F2.ships;
    var alive1 = [], alive2 = [], subsalive1 = [], subsalive2 = [];
    for (var i = 0; i < ships1.length; i++) {
        if (ships1[i].HP <= 0) continue;
        if (ships1[i].type == 'SS') subsalive1.push(ships1[i]);
        else alive1.push(ships1[i]);
        ships1[i].HPprev = ships1[i].HP;
        if (!MECHANICS.morale) ships1[i].morale = 49;
    }
    for (var i = 0; i < ships2.length; i++) {
        if (ships2[i].HP <= 0) continue;
        if (ships2[i].type == 'SS') subsalive2.push(ships2[i]);
        else alive2.push(ships2[i]);
    }

    var r = Math.random();
    if (r < .45) ENGAGEMENT = 1;
    else if (r < .6) ENGAGEMENT = 1.2;
    else if (r < .9 || F1.noRedT || F2.noRedT) ENGAGEMENT = .8;
    else ENGAGEMENT = .6;

    compareAP(F1, F2);

    if (bombing) aironly = true;

    if (C) {
        console.log('ENGAGEMENT: ' + ENGAGEMENT);
        var dataroot = (NBonly) ? BAPI.yasen : BAPI.api_data;
        dataroot.api_formation = [F1.formation.id, F2.formation.id, {1: 1, .8: 2, 1.2: 3, .6: 4}[ENGAGEMENT]];
        dataroot.api_dock_id = 1;
        dataroot.api_maxhps = [-1];
        dataroot.api_nowhps = [-1];
        for (var i = 0; i < 6; i++) {
            dataroot.api_nowhps.push((i < ships1.length) ? ships1[i].HP : -1);
            dataroot.api_maxhps.push((i < ships1.length) ? ships1[i].maxHP : -1);
        }
        dataroot.api_ship_ke = [];
        dataroot.api_eSlot = [];
        for (var i = 0; i < 6; i++) {
            dataroot.api_ship_ke.push((i < ships2.length) ? ships2[i].mid : -1);
            dataroot.api_nowhps.push((i < ships2.length) ? ships2[i].HP : -1);
            dataroot.api_maxhps.push((i < ships2.length) ? ships2[i].maxHP : -1);
            dataroot.api_eSlot.push([]);
            for (var j = 0; j < 5; j++)
                dataroot.api_eSlot[i].push((i < ships2.length && j < ships2[i].equips.length) ? ships2[i].equips[j].mid : -1);
        }

    }
    //if (C) console.log(API);

    var doShell2 = false;
    for (var i = 0; i < ships1.length; i++) {
        if (ships1[i].type == 'BB' || ships1[i].type == 'BBV') doShell2 = true;
    }
    for (var i = 0; i < ships2.length; i++) {
        if (ships2[i].type == 'BB' || ships2[i].type == 'BBV') doShell2 = true;
    }

    //opening airstrike
    if (!NBonly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        if (C) BAPI.api_data.api_kouku = {
            api_plane_from: [[-1], [-1]],
            api_stage1: null,
            api_stage2: null,
            api_stage3: null
        };
        airPhase(alive1, subsalive1, alive2, subsalive2, (C) ? BAPI.api_data.api_kouku : undefined);
        if (C) {
            if (BAPI.api_data.api_kouku.api_stage1) BAPI.api_data.api_kouku.api_stage1.api_disp_seiku = {
                4: 1,
                3: 2,
                2: 0,
                1: 3,
                0: 4
            }[F1.AS + 2];
            else BAPI.api_data.api_kouku = null;
            if (BAPI.api_kouku) delete BAPI.api_data.api_kouku.api_stage3_combined;
        }

        for (var i = 0; i < alive1.length; i++) {   //remove dead things
            if (alive1[i].HP <= 0) {
                alive1.splice(i, 1);
                i--;
            }
        }
        for (var i = 0; i < alive2.length; i++) {
            if (alive2[i].HP <= 0) {
                alive2.splice(i, 1);
                i--;
            }
        }
    }

    //second airphase
    if (!NBonly && aironly && !bombing && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        compareAP(F1, F2);
        if (C) BAPI.api_data.api_kouku2 = {
            api_plane_from: [[-1], [-1]],
            api_stage1: null,
            api_stage2: null,
            api_stage3: null
        };
        airPhase(alive1, subsalive1, alive2, subsalive2, (C) ? BAPI.api_data.api_kouku2 : undefined);
        if (C) {
            if (!BAPI.api_data.api_kouku2.api_stage1) delete BAPI.api_data.api_kouku2;
            else BAPI.api_data.api_kouku2.api_stage1.api_disp_seiku = {4: 1, 3: 2, 2: 0, 1: 3, 0: 4}[F1.AS + 2];
            delete BAPI.api_data.api_kouku.api_stage3_combined;
        }

        for (var i = 0; i < alive1.length; i++) {   //remove dead things
            if (alive1[i].HP <= 0) {
                alive1.splice(i, 1);
                i--;
            }
        }
        for (var i = 0; i < alive2.length; i++) {
            if (alive2[i].HP <= 0) {
                alive2.splice(i, 1);
                i--;
            }
        }
    }

    //support phase
    if (Fsupport && !NBonly && !aironly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        supportPhase(Fsupport.ships, alive2, subsalive2, Fsupport.supportType, BAPI);
    }

    //opening asw
    if (MECHANICS.OASW && !NBonly && !aironly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        var attackers1 = [], order1 = [];
        for (var i = 0; i < alive1.length; i++) {
            if ((alive1[i].ASW >= 100 || alive1[i].alwaysOpASW) && alive1[i].equiptypes[B_SONAR])
                attackers1.push(alive1[i]);
        }
        orderByRange(attackers1, order1);

        if (order1.length) {
            if (C) BAPI.api_data.api_opening_taisen = {
                api_at_list: [-1],
                api_at_type: [-1],
                api_damage: [-1],
                api_df_list: [-1],
                api_cl_list: [-1]
            };
            shellPhase(order1, [], alive1, subsalive1, subsalive2, subsalive2, (C) ? BAPI.api_data.api_opening_taisen : undefined);
        }
    }

    // opening torpedo
    if (!NBonly && !aironly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        if (C) BAPI.api_data.api_opening_atack = {
            api_edam: [-1, 0, 0, 0, 0, 0, 0],
            api_erai: [-1, 0, 0, 0, 0, 0, 0],
            api_eydam: [-1, 0, 0, 0, 0, 0, 0],
            api_fdam: [-1, 0, 0, 0, 0, 0, 0],
            api_frai: [-1, 0, 0, 0, 0, 0, 0],
            api_fydam: [-1, 0, 0, 0, 0, 0, 0]
        };
        torpedoPhase(alive1, subsalive1, alive2, subsalive2, true, (C) ? BAPI.api_data.api_opening_atack : undefined);
    }

    //shelling 1
    if (!NBonly && !aironly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        var order1 = [], order2 = [];
        orderByRange(alive1, order1);
        orderByRange(alive2, order2);

        if (C) BAPI.api_data.api_hougeki1 = {
            api_at_list: [-1],
            api_at_type: [-1],
            api_damage: [-1],
            api_df_list: [-1],
            api_cl_list: [-1]
        };
        shellPhase(order1, order2, alive1, subsalive1, alive2, subsalive2, (C) ? BAPI.api_data.api_hougeki1 : undefined);
    }

    //shelling 2
    if (!NBonly && !aironly && doShell2 && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        var order1 = [], order2 = [];
        for (var i = 0; i < alive1.length; i++) {
            if (alive1[i].canShell()) order1.push(alive1[i]);
        }
        for (var i = 0; i < alive2.length; i++) {
            if (alive2[i].canShell()) order2.push(alive2[i]);
        }

        if (C) BAPI.api_data.api_hougeki2 = {
            api_at_list: [-1],
            api_at_type: [-1],
            api_damage: [-1],
            api_df_list: [-1],
            api_cl_list: [-1]
        };
        shellPhase(order1, order2, alive1, subsalive1, alive2, subsalive2, (C) ? BAPI.api_data.api_hougeki2 : undefined);
    }

    // closing torpedo
    if (!NBonly && !aironly && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        if (C) BAPI.api_data.api_raigeki = {
            api_edam: [-1, 0, 0, 0, 0, 0, 0],
            api_erai: [-1, 0, 0, 0, 0, 0, 0],
            api_eydam: [-1, 0, 0, 0, 0, 0, 0],
            api_fdam: [-1, 0, 0, 0, 0, 0, 0],
            api_frai: [-1, 0, 0, 0, 0, 0, 0],
            api_fydam: [-1, 0, 0, 0, 0, 0, 0]
        };
        torpedoPhase(alive1, subsalive1, alive2, subsalive2, false, (C) ? BAPI.api_data.api_raigeki : undefined);
    }

    //night battle
    var didNB = false;
    if ((doNB || NBonly) && alive1.length + subsalive1.length > 0 && alive2.length + subsalive2.length > 0) {
        didNB = !NBonly;
        var order1 = [], order2 = [];
        for (var i = 0; i < ships1.length; i++) {
            order1.push(ships1[i]);
        }
        for (var i = 0; i < ships2.length; i++) {
            order2.push(ships2[i]);
        }

        if (C) {
            if (!BAPI.yasen) BAPI.yasen = {};
            BAPI.yasen.api_hougeki = {
                api_at_list: [-1],
                api_damage: [-1],
                api_df_list: [-1],
                api_sp_list: [-1],
                api_cl_list: [-1]
            };
            BAPI.yasen.api_flare_pos = [-1, -1];
            BAPI.yasen.api_touch_plane = [-1, -1];
        }
        nightPhase(order1, order2, alive1, subsalive1, alive2, subsalive2, NBonly, (C) ? BAPI.yasen : undefined);
    }

    var subonly = true;
    for (var j = 0; j < ships2.length; j++) if (ships2[j].type != 'SS') subonly = false;
    for (var i = 0; i < ships1.length; i++) {
        if (bombing) {
            ships1[i].fuelleft -= .5;
            ships1[i].ammoleft -= .5;
        } else {
            ships1[i].fuelleft -= 2;
            if (!subonly) ships1[i].ammoleft -= (didNB) ? 3 : 2;
            else if (didNB) ships1[i].ammoleft -= 1;
            if (C) console.log('FUEL LEFT: ' + ships1[i].fuelleft + ' AMMO LEFT: ' + ships1[i].ammoleft);
        }
    }


    var results = {};
    var rank = '';
    var dmg1 = 0, dmg2 = 0, sunk1 = 0, sunk2 = 0, dtotal1 = 0, dtotal2 = 0;
    for (var i = 0; i < ships2.length; i++) {
        if (ships2[i].HP <= 0) sunk2++;
        dmg2 += ships2[i].maxHP - Math.max(0, ships2[i].HP);
        dtotal2 += ships2[i].maxHP;
    }
    for (var i = 0; i < ships1.length; i++) {
        if (ships1[i].HP <= 0) sunk1++;
        dmg1 += ships1[i].prevHP - Math.max(0, ships1[i].HP);
        dtotal1 += ships1[i].HPprev;
    }
    dmg1 /= dtotal1;
    dmg2 /= dtotal2;
    if (!sunk1) {
        if (sunk2 == ships2.length) rank = 'S';
        else if (ships2.length > 1 && sunk2 >= Math.floor(ships2.length * 2 / 3)) rank = 'A';
        else if (ships2[0].HP <= 0 || dmg2 >= dmg1 * 2.5) rank = 'B';
        else if (dmg1 > dmg2) rank = 'C';
        else rank = 'D';
    } else {
        if (sunk1 >= Math.floor(ships1.length * 2 / 3)) rank = 'E';
        else if (ships2[0].HP <= 0) {
            if (sunk1 < sunk2) rank = 'B';
            else rank = 'C';
        } else {
            if (dmg1 <= dmg2) rank = 'D';
            else if (sunk2 >= Math.floor(ships2.length * 2 / 3)) {
                if (dmg1 > 2.5 * dmg2) rank = 'B';
                else rank = 'C';
            } else {
                if (dmg1 > 3 * dmg2) rank = 'B';
                else rank = 'C';
            }
        }
    }
    results.rank = rank;

    results.redded = false;
    results.flagredded = (ships1[0].HP / ships1[0].maxHP <= .25);
    results.reddedIndiv = [false, false, false, false, false];
    results.flagsunk = (ships2[0].HP <= 0);
    results.undamaged = true;
    results.buckets = 0;
    for (var i = 0; i < ships1.length; i++) {
        if (ships1[i].HP / ships1[i].maxHP <= .25) {
            results.redded = true;
            results.reddedIndiv[i] = true;
            if (!ships1[i].isflagship) ships1[i].protection = false;
        }
        if (ships1[i].HP / ships1[i].maxHP <= .5) results.undamaged = false;
        if (ships1[i].HP / ships1[i].maxHP <= BUCKETPERCENT || getRepairTime(ships1[i]) > BUCKETTIME) results.buckets++;
    }
    results.MVP = F1.getMVP();
    if (didNB) results.didNB = true;

    //update morale
    if (MECHANICS.morale) {
        for (var i = 0; i < ships1.length; i++) {
            if (ships1[i].morale < 30) ships1[i].morale -= 6;
            switch (results.rank) {
                case 'S':
                    ships1[i].morale += 1;
                    break;
                case 'B':
                    ships1[i].morale -= 1;
                    break;
                case 'C':
                    ships1[i].morale -= 2;
                    break;
                case 'D':
                case 'E':
                    ships1[i].morale -= 3;
                    break;
            }
            if (NBonly) ships1[i].morale += 1;
            if (didNB) ships1[i].morale -= 2;
        }
        ships1[0].morale += 3;
        ships1[results.MVP].morale += 10;
        for (var i = 0; i < ships1.length; i++) {
            if (ships1[i].morale > 100) ships1[i].morale = 100;
            if (ships1[i].morale < 0) ships1[i].morale = 0;
            if (C) console.log(ships1[i].name + ' ' + ships1[i].morale);
        }
    }

    return results;
}


function simStats(numsims, doNB, NBonly, aironly, landbomb, forms) {
    // if (FLEET1.ships.length <= 0) return 1;
    // if (FLEET2.ships.length <= 0) return 2;
    var totalResult = {
        totalnum: numsims,
        totalFuelS: 0,
        totalAmmoS: 0,
        totalBauxS: 0,
        totalFuelR: 0,
        totalSteelR: 0,
        totalBuckets: 0,
        nodes: []
    };
    for (var i = 0; i < FLEETS2.length; i++) {
        totalResult.nodes.push({
            num: 0,
            didNB: 0, //used for rsammo calc
            redded: 0,
            redIndiv: [0, 0, 0, 0, 0, 0],
            undamaged: 0,
            MVPs: [0, 0, 0, 0, 0, 0],
            ranks: {S: 0, A: 0, B: 0, C: 0, D: 0, E: 0},
            flagsunk: 0
        });
    }

    //var BAPI = {data:{},yasen:{},mvp:[],rating:''};
    C = false;
    var formdef = FLEETS1[0].formation;
    for (var i = 0; i < numsims; i++) {
        var totalDidNB = 0;
        for (var j = 0; j < FLEETS2.length; j++) {
            FLEETS1[0].DMGTOTALS = [0, 0, 0, 0, 0, 0];
            if (forms[j] != '0') FLEETS1[0].formation = ALLFORMATIONS[forms[j]];
            else FLEETS1[0].formation = formdef;
            var res = sim(FLEETS1[0], FLEETS2[j], FLEETS1S[0], doNB[j], NBonly[j], aironly[j], landbomb[j]);//,BAPI);
            totalResult.nodes[j].num++;
            if (res.redded) totalResult.nodes[j].redded++;
            for (var k = 0; k < res.reddedIndiv.length; k++) if (res.reddedIndiv[k]) totalResult.nodes[j].redIndiv[k]++;
            if (res.undamaged) totalResult.nodes[j].undamaged++;
            if (res.flagsunk) totalResult.nodes[j].flagsunk++;
            totalResult.nodes[j].ranks[res.rank]++;
            totalResult.nodes[j].MVPs[res.MVP]++;
            if (res.didNB) totalDidNB++;
            if ((res.redded && DORETREAT) || res.flagredded) break;
        }
        // console.log(totalDidNB);
        for (var j = 0; j < FLEETS1[0].ships.length; j++) { //get refuel and repair costs
            var ship = FLEETS1[0].ships[j];
            var r = getRepairCost(ship);
            totalResult.totalFuelR += r[0];
            totalResult.totalSteelR += r[1];
            if (ship.HP / ship.maxHP <= BUCKETPERCENT || getRepairTime(ship) > BUCKETTIME) totalResult.totalBuckets++;
            totalResult.totalFuelS += Math.floor(ship.fuel * .2 * FLEETS2.length);
            totalResult.totalAmmoS += Math.floor(ship.ammo * (.2 * FLEETS2.length + .1 * totalDidNB));
            for (var k = 0; k < ship.PLANESLOTS.length; k++) totalResult.totalBauxS += 5 * (ship.PLANESLOTS[k] - ship.planecount[k]);

            //support
            if (FLEETS1S[0]) { //add boss support later (count x2 for now), add air type later
                var shipS = FLEETS1S[0].ships[j];
                totalResult.totalFuelS += 2 * Math.floor(shipS.fuel * .5);
                if (FLEETS1S[0].supportType == 1) totalResult.totalAmmoS += 2 * Math.floor(shipS.ammo * .4);
                else totalResult.totalAmmoS += 2 * Math.floor(shipS.ammo * .8);
                for (var k = 0; k < shipS.PLANESLOTS.length; k++) totalResult.totalBauxS += 5 * (shipS.PLANESLOTS[k] - shipS.planecount[k]);
                FLEETS1S[0].reset();
            }
        }

        for (var j = 0; j < FLEETS1.length; j++) FLEETS1[j].reset();
        for (var j = 0; j < FLEETS2.length; j++) FLEETS2[j].reset();
    }

    updateResults(totalResult);

    console.log(totalResult);


    return 0;
}

export {sim, loadFleet, ALLFORMATIONS};