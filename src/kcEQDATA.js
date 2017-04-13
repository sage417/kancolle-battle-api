//equip type (can equip)
const MAINGUNS = 1;
const MAINGUNSAA = 101;
const MAINGUNM = 2;
const MAINGUNL = 3;
const SECGUN = 4;
const SECGUNAA = 104;
const TORPEDO = 5;
const FIGHTER = 6;
const DIVEBOMBER = 7;
const TORPBOMBER = 8;
const CARRIERSCOUT = 9;
const SEAPLANE = 10;
const SEAPLANEBOMBER = 11;
const RADARS = 12;
const RADARL = 13;
const SONARS = 14;
const DEPTHCHARGE = 15;
const ENGINE = 17;
const TYPE3SHELL = 18;
const APSHELL = 19;
const AAGUN = 21;
const MIDGETSUB = 22;
const REPAIR = 23;
const LANDINGCRAFT = 24;
const AUTOGYRO = 25;
const ASWPLANE = 26;
const BULGEM = 27;
const BULGEL = 28;
const SEARCHLIGHTS = 29;
const DRUM = 30;
const SRF = 31;
const TORPEDOSS = 32;
const STARSHELL = 33;
const FCF = 34;
const SCAMP = 35;
const AAFD = 36;
const WG42 = 37;
const MAINGUNXL = 38;
const PICKET = 39;
const SONARL = 40;
const FLYINGBOAT = 41;
const SEARCHLIGHTL = 42;
const RATION = 43;
const OILDRUM = 44;
const SEAPLANEFIGHTER = 45;
const LANDINGTANK = 46;
const LANDBOMBER = 47;
const INTERCEPTOR = 48;
const TRANSPORTITEM = 50;
const SUBRADAR = 51;
const JETBOMBER = 57;
const JETSCOUT = 59;
const RADARXL = 93;
const CARRIERSCOUT2 = 94;
const OTHER = 99;

var EQTDATA = {};
EQTDATA[MAINGUNS] = {
    name: 'Main Gun (S)',
    image: 1,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['DD','CL','CT','CLT','AS','AV','AO','AR','LHA'],
};
EQTDATA[MAINGUNSAA] = {
    name: 'Main Gun (S)',
    image: 16,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3,AAfleet:2,AAself:1},
    canequip: ['DD','CL','CT','CLT','AS','AV','AO','AR','LHA'],
};
EQTDATA[MAINGUNM] = {
    name: 'Main Gun (M)',
    image: 2,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['CL','CT','CLT','CA','CAV','BB','BBV'],
};
EQTDATA[MAINGUNL] = {
    name: 'Main Gun (L)',
    image: 3,
    improve: {Pshell:1.5,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['FBB','BB','BBV'],
};
EQTDATA[MAINGUNXL] = {
    name: 'Main Gun (L)',
    image: 3,
    improve: {Pshell:1.5,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: [],
    canequipS: [131,136,143,148,275,276],
};
EQTDATA[SECGUN] = {
    name: 'Secondary Gun',
    image: 4,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','AR','LHA'],
};
EQTDATA[SECGUNAA] = {
    name: 'Secondary Gun',
    image: 16,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3,AAfleet:2,AAself:1},
    canequip: ['CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','AR','LHA'],
};
EQTDATA[APSHELL] = {
    name: 'AP Shell',
    image: 13,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['FBB','BB','BBV'],
};
EQTDATA[TORPEDO] = {
    name: 'Torpedo',
    image: 5,
    improve: {Ptorp:1.2,Pnb:1,ACCtorp:2,ACCnb:1.3},
    canequip: ['DD','CL','CT','CLT','CA','CAV','SS','SSV'],
    canequipS: [178],
};
EQTDATA[TORPEDOSS] = {
    name: 'Torpedo',
    image: 5,
    canequip: ['SS','SSV'],
};
EQTDATA[MIDGETSUB] = {
    name: 'Midget Sub',
    image: 5,
    canequip: ['CLT','SS','SSV','AV'],
    canequipS: [200],
};
EQTDATA[AAGUN] = {
    name: 'Anti-Air Gun',
    image: 15,
    improve: {Pshell:1,Ptorp:1.2,ACCtorp:2,AAself:1},
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','AO','AR','LHA'],
};
EQTDATA[AAFD] = {
    name: 'Fire Director',
    image: 30,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3,AAfleet:2,AAself:1},
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','AO','AR','LHA'],
};
EQTDATA[SONARS] = {
    name: 'Sonar',
    image: 18,
    improve: {Pshell:.75,Pasw:1,ACCshell:1,ACCasw:1.3,EVtorp:1.5},
    canequip: ['DD','CL','CT','CLT','SS','SSV'],
    canequipS: [352,450],
};
EQTDATA[SONARL] = {
    name: 'Sonar',
    image: 18,
    canequip: ['CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','LHA'],
};
EQTDATA[DEPTHCHARGE] = {
    name: 'Depth Charge',
    image: 17,
    improve: {Pshell:.75,Pasw:1,ACCasw:1.3},
    canequip: ['DD','CL','CT','CLT','AV'],
};
EQTDATA[FIGHTER] = {
    name: 'Fighter',
    image: 6,
    canequip: ['CVL','CV','CVB','LHA'],
    isPlane: true,
    isfighter: true,
};
EQTDATA[TORPBOMBER] = {
    name: 'Torpedo Bomber',
    image: 8,
    canequip: ['CVL','CV','CVB'],
    canequipS: [352],
    isPlane: true,
    canContact: true,
    isfighter: true,
    istorpbomber: true,
};
EQTDATA[DIVEBOMBER] = {
    name: 'Dive Bomber',
    image: 7,
    canequip: ['CVL','CV','CVB'],
    isPlane: true,
    isfighter: true,
    isdivebomber: true,
};
EQTDATA[SEAPLANE] = {
    name: 'Recon Seaplane',
    image: 10,
    canequip: ['CL','CT','CA','CAV','FBB','BB','BBV','SSV','AS','AV','AO'],
    isPlane: true,
    canContact: true,
};
EQTDATA[SEAPLANEBOMBER] = {
    name: 'Seaplane Bomber',
    image: 10,
    canequip: ['CAV','BBV','SSV','AV','AO'],
    canequipS: [358,361,446,447],
    isPlane: true,
    isfighter: true,
    isdivebomber: true,
};
EQTDATA[CARRIERSCOUT] = {
    name: 'Scout Plane',
    image: 9,
    canequip: ['CVL','CV','CVB'],
    isPlane: true,
    canContact: true,
};
EQTDATA[CARRIERSCOUT2] = {
    name: 'Scout Plane',
    image: 9,
    canequip: ['CVB'],
    isPlane: true,
    canContact: true,
};
EQTDATA[AUTOGYRO] = {
    name: 'Anti-Sub Plane',
    image: 21,
    canequip: ['CAV','BBV','CVL','AS','AO','AR','LHA'],
    isPlane: true,
};
EQTDATA[ASWPLANE] = {
    name: 'Anti-Sub Plane',
    image: 22,
    canequip: ['CVL','LHA'],
    isPlane: true,
};
EQTDATA[RADARS] = {
    name: 'Radar (S)',
    image: 11,
    improve: {ACCshell:1.7,ACCnb:1.3,AAfleet:1.5},
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','AO','AR','LHA'],
};
EQTDATA[RADARL] = {
    name: 'Radar (L)',
    image: 11,
    improve: {ACCshell:1.7,ACCnb:1.6,AAfleet:1.5},
    canequip: ['CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AV'],
    canequipS: [352,470],
};
EQTDATA[RADARXL] = {
    name: 'Radar (L)',
    image: 11,
    canequip: ['FBB','BB','BBV'],
};
EQTDATA[ENGINE] = {
    name: 'Engine',
    image: 19,
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','SS','SSV','AS','AV','AO','AR','LHA'],
};
EQTDATA[TYPE3SHELL] = {
    name: 'Anti-Air Shell',
    image: 12,
    canequip: ['CA','CAV','FBB','BB','BBV'],
};
EQTDATA[BULGEM] = {
    name: 'Torpedo Bulge',
    image: 23,
    canequip: ['CT','CA','CAV','CVL','AS','AV','AR'],
    canequipS: [147],
};
EQTDATA[BULGEL] = {
    name: 'Torpedo Bulge',
    image: 23,
    canequip: ['FBB','BB','BBV','CV','CVB'],
};
EQTDATA[LANDINGCRAFT] = {
    name: 'Misc',
    image: 20,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['AV','LHA'],
    canequipS: [352,200,147,464,470,418,199,434,435,469,468,487],
};
EQTDATA[SEARCHLIGHTS] = {
    name: 'Night Equip',
    image: 24,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['DD','CL','CA','CAV','FBB','BB','BBV','AV'],
    canequipS: [343,356],
};
EQTDATA[SEARCHLIGHTL] = {
    name: 'Night Equip',
    image: 24,
    improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3},
    canequip: ['FBB','BB','BBV'],
};
EQTDATA[STARSHELL] = {
    name: 'Night Equip',
    image: 27,
    canequip: ['DD','CL','CLT','CA','CAV','FBB','BB','BBV','AS','AV','AR'],
};
EQTDATA[PICKET] = {
    name: 'Night Equip',
    image: 32,
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','AS','AV'],
};
EQTDATA[WG42] = {
    name: 'Misc',
    image: 31,
    canequip: ['DD','CL','CAV','BBV','SS','SSV','AS','AV','LHA'],
};
EQTDATA[SRF] = {
    name: 'Misc',
    image: 26,
    canequip: ['AR'],
};
EQTDATA[FCF] = {
    name: 'Misc',
    image: 28,
    canequip: ['CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','AS','AV','LHA'],
    canequipS: [464],
};
EQTDATA[DRUM] = {
    name: 'Misc',
    image: 25,
    canequip: ['DD','CL','CAV','AV','AO','LHA'],
};
EQTDATA[SCAMP] = {
    name: 'Misc',
    image: 29,
    canequip: ['CAV','BBV','CVL','CV','CVB','AO'],
    canequipS: [450],
};
EQTDATA[FLYINGBOAT] = {
    name: 'Recon Seaplane',
    image: 33,
    canequip: [],
    canequipS: [445,450],
    isPlane: true,
    canContact: true,
};
EQTDATA[REPAIR] = {
    name: 'Misc',
    image: 14,
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','SS','SSV','AS','AV','AO','AR','LHA'],
};
EQTDATA[RATION] = {
    name: 'Misc',
    image: 34,
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','SS','SSV','AS','AV','AO','AR','LHA'],
};
EQTDATA[SEAPLANEFIGHTER] = {
    name: 'Seaplane Fighter',
    image: 43,
    canequip: ['CAV','BBV','SSV','AS','AV','AO'],
    canequipS: [358,361,446,447,136,148,275,276],
    isPlane: true,
    isfighter: true,
};
EQTDATA[LANDINGTANK] = {
    name: 'Misc',
    image: 36,
    improve: {FPD:1,FPN:1},
    canequip: ['SS','SSV','AV','LHA'],
    canequipS: [352,200,147,464,470,418,199,468,487],
};
EQTDATA[OILDRUM] = {
    name: 'Misc',
    image: 35,
    canequip: ['AO'],
};
EQTDATA[LANDBOMBER] = {
    name: 'Misc',
    image: 37,
    canequip: [],
    isPlane: true,
    isfighter: true,
    isdivebomber: true,
    istorpbomber: true,
};
EQTDATA[INTERCEPTOR] = {
    name: 'Misc',
    image: 38,
    canequip: [],
    isPlane: true,
    isfighter: true,
};
EQTDATA[TRANSPORTITEM] = {
    name: 'Transportation Material',
    image: 41,
    canequip: ['CAV','BBV','CVL','CV','CVB','SSV','AV','AR','LHA'],
};
EQTDATA[SUBRADAR] = {
    name: 'Submarine Equipment',
    image: 42,
    canequip: ['SS','SSV'],
};
EQTDATA[JETBOMBER] = {
    name: 'Jet Fighter-Bomber',
    image: 39,
    canequip: ['CVB'],
    isPlane: true,
    isfighter: true,
    isdivebomber: true,
};
EQTDATA[OTHER] = {
    name: 'Misc',
    image: 14,
    canequip: ['DD','CL','CT','CLT','CA','CAV','FBB','BB','BBV','CVL','CV','CVB','SS','SSV','AS','AV','AO','AR','LHA'],
};

//FITDATA[shipclass][eqclass]
var FITDATA = {
    // 35.6/38, 381,  41,    46P,   46,     16,    51,
    1: { 1: 7, 2: -2, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Kongou
    2: { 1: 4, 2:  1, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Bismarck
    3: { 1: 4, 2:  1, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Littorio
    4: { 1: 4, 2: -2, 3: -5, 4: -7, 5: -10, 6:  0, 7: 0 }, //Iowa
    5: { 1: 4, 2:  2, 3:  2, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Warspite
    6: { 1: 4, 2:  2, 3:  0, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Ise/Fusou
    7: { 1: 4, 2:  2, 3:  2, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Fusou Kai 2
    8: { 1: 2, 2:  2, 3:  2, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Nagato
    9: { 1: 0, 2:  0, 3:  0, 4:  0, 5:   0, 6:  0, 7: 0 }, //Yamato
}
//night
var FITDATAN = {
    // 35.6/38, 381,  41,    46P,   46,     16,    51,
    1: { 1: 7, 2:  0, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Kongou
    2: { 1: 4, 2:  0, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Bismarck
    3: { 1: 4, 2:  0, 3: -5, 4: -7, 5: -10, 6: -5, 7: 0 }, //Littorio
    4: { 1: 4, 2:  0, 3: -5, 4: -7, 5: -10, 6:  0, 7: 0 }, //Iowa
    5: { 1: 4, 2:  0, 3:  2, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Warspite
    6: { 1: 4, 2:  0, 3:  0, 4: -5, 5:  -8, 6:  2, 7: 0 }, //Ise/Fusou
    7: { 1: 4, 2:  0, 3:  2, 4: -5, 5:  -8, 6:  2, 7: 0 }, //Fusou Kai 2
    8: { 1: 2, 2:  0, 3:  2, 4: -3, 5:  -7, 6:  2, 7: 0 }, //Nagato
    9: { 1: 0, 2:  0, 3:  0, 4:  0, 5:   0, 6:  0, 7: 0 }, //Yamato
}

//artillery spot/night battle/other combat type
const B_MAINGUN = 1;
const B_SECGUN = 2;
const B_RECON = 3;
const B_RADAR = 4;
const B_APSHELL = 5;
const B_SONAR = 6;
const B_DEPTHCHARGE = 7;
const B_TORPEDO = 8;
const B_TYPE3SHELL = 9;
const B_LC1 = 10;
const B_LC2 = 11;
const B_LC3 = 12;
const B_OTHER = 0;

//anti-air type
const A_HAGUN = 1;
const A_AAFD = 2;
const A_HAFD = 3;
const A_MAINGUNL = 4;
const A_TYPE3SHELL = 5;
const A_AIRRADAR = 6;
const A_AAGUN = 7;
const A_GUN = 8;
const A_XLGUN = 9;

var EQDATA = {
    0: {
        name: ''
    },
    1: {
        name: '12cm Single Cannon',
        nameJP: '12cm単装砲',
        added: '2013-04-17',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 1,
        AA: 1,
        RNG: 1
    },
    2: {
        name: '12.7cm Twin Cannon',
        nameJP: '12.7cm連装砲',
        added: '2013-04-17',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 2,
        AA: 2,
        RNG: 1
    },
    3: {
        name: '10cm Twin High-Angle Cannon',
        nameJP: '10cm連装高角砲',
        added: '2013-04-17',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAGUN,
        FP: 2,
        AA: 7,
        RNG: 1
    },
    4: {
        name: '14cm Single Cannon',
        nameJP: '14cm単装砲',
        added: '2013-04-17',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 101,
        FP: 2,
        RNG: 2,
        ACC: 1
    },
    5: {
        name: '15.5cm Triple Cannon',
        nameJP: '15.5cm三連装砲',
        added: '2013-04-17',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 7,
        AA: 4,
        RNG: 2,
        ACC: 1
    },
    6: {
        name: '20.3cm Twin Cannon',
        nameJP: '20.3cm連装砲',
        added: '2013-04-17',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 8,
        AA: 3,
        RNG: 2,
        CANBbonus: 10,
    },
    7: {
        name: '35.6cm Twin Cannon',
        nameJP: '35.6cm連装砲',
        added: '2013-04-17',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 15,
        AA: 4,
        RNG: 3
    },
    8: {
        name: '41cm Twin Cannon',
        nameJP: '41cm連装砲',
        added: '2013-04-17',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 3,
        FP: 20,
        AA: 4,
        RNG: 3
    },
    9: {
        name: '46cm Triple Cannon',
        nameJP: '46cm三連装砲',
        added: '2013-04-17',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_XLGUN,
        improveType: 1,
        fitclass: 5,
        FP: 26,
        AA: 5,
        RNG: 4
    },
    10: {
        name: '12.7cm Twin High-Angle Cannon',
        nameJP: '12.7cm連装高角砲',
        added: '2013-04-17',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAGUN,
        FP: 2,
        AA: 4,
        RNG: 1,
        ACC: 1
    },
    11: {
        name: '15.2cm Single Cannon',
        nameJP: '15.2cm単装砲',
        added: '2013-04-17',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 101,
        FP: 2,
        RNG: 2,
        ACC: 1
    },
    12: {
        name: '15.5cm Triple Secondary Cannon',
        nameJP: '15.5cm三連装副砲',
        added: '2013-04-17',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        FP: 7,
        AA: 3,
        RNG: 2,
        ACC: 2
    },
    13: {
        name: '61cm Triple Torpedo',
        nameJP: '61cm三連装魚雷',
        added: '2013-04-17',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 5,
        RNG: 1
    },
    14: {
        name: '61cm Quad Torpedo',
        nameJP: '61cm四連装魚雷',
        added: '2013-04-17',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 7,
        RNG: 1
    },
    15: {
        name: '61cm Quad (Oxygen) Torpedo',
        nameJP: '61cm四連装(酸素)魚雷',
        added: '2013-04-17',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 10,
        RNG: 1
    },
    16: {
        name: 'Type 97 Torpedo Bomber',
        nameJP: '九七式艦攻',
        added: '2013-04-17',
        type: TORPBOMBER,
        improveType: 2,
        TP: 5,
        ASW: 4,
        LOS: 1
    },
    17: {
        name: 'Tenzan',
        nameJP: '天山',
        added: '2013-04-17',
        type: TORPBOMBER,
        improveType: 2,
        TP: 7,
        ASW: 3,
        LOS: 1
    },
    18: {
        name: 'Ryuusei',
        nameJP: '流星',
        added: '2013-04-17',
        type: TORPBOMBER,
        improveType: 2,
        TP: 10,
        ASW: 4,
        LOS: 1
    },
    19: {
        name: 'Type 96 Fighter',
        nameJP: '九六式艦戦',
        added: '2013-04-17',
        type: FIGHTER,
        improveType: 2,
        AA: 2
    },
    20: {
        name: 'Type 21 Zero Fighter',
        nameJP: '零式艦戦21型',
        added: '2013-04-17',
        type: FIGHTER,
        improveType: 2,
        AA: 5
    },
    21: {
        name: 'Type 52 Zero Fighter',
        nameJP: '零式艦戦52型',
        added: '2013-04-17',
        type: FIGHTER,
        improveType: 2,
        AA: 6
    },
    22: {
        name: 'Reppuu',
        nameJP: '烈風',
        added: '2013-04-17',
        type: FIGHTER,
        improveType: 2,
        AA: 10
    },
    23: {
        name: 'Type 99 Bomber',
        nameJP: '九九式艦爆',
        added: '2013-04-17',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 3,
        DIVEBOMB: 5
    },
    24: {
        name: 'Suisei',
        nameJP: '彗星',
        added: '2013-04-17',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 3,
        DIVEBOMB: 8
    },
    25: {
        name: 'Type 0 Recon Seaplane',
        nameJP: '零式水上偵察機',
        added: '2013-04-17',
        type: SEAPLANE,
        btype: B_RECON,
        improveType: 2,
        AA: 1,
        ASW: 2,
        LOS: 5,
        DIVEBOMB: 1,
        ACC: 1
    },
    26: {
        name: 'Zuiun',
        nameJP: '瑞雲',
        added: '2013-04-17',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        AA: 2,
        ASW: 4,
        LOS: 6,
        DIVEBOMB: 4,
        ACC: 1
    },
    27: {
        name: 'Type 13 Air RADAR',
        nameJP: '13号対空電探',
        added: '2013-04-17',
        type: RADARS,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        improveType: 1,
        AA: 2,
        LOS: 3,
        ACC: 1
    },
    28: {
        name: 'Type 22 Surface RADAR',
        nameJP: '22号対水上電探',
        added: '2013-04-17',
        type: RADARS,
        btype: B_RADAR,
        improveType: 1,
        improve: {ACCshell:1.7,ACCnb:1.6},
        LOS: 5,
        ACC: 3
    },
    29: {
        name: 'Type 33 Surface RADAR',
        nameJP: '33号対水上電探',
        added: '2013-04-17',
        type: RADARS,
        btype: B_RADAR,
        LOS: 7,
        ACC: 5
    },
    30: {
        name: 'Type 21 Air RADAR',
        nameJP: '21号対空電探',
        added: '2013-04-17',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        improveType: 1,
        AA: 4,
        LOS: 4,
        ACC: 2
    },
    31: {
        name: 'Type 32 Surface RADAR',
        nameJP: '32号対水上電探',
        added: '2013-04-17',
        type: RADARL,
        btype: B_RADAR,
        improveType: 1,
        LOS: 10,
        ACC: 8
    },
    32: {
        name: 'Type 14 Air RADAR',
        nameJP: '14号対空電探',
        added: '2013-04-17',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 6,
        LOS: 5,
        ACC: 4
    },
    33: {
        name: 'Improved Steam Turbine',
        nameJP: '改良型艦本式タービン',
        added: '2013-04-17',
        type: ENGINE,
        EV: 6
    },
    34: {
        name: 'Enhanced Steam Turbine',
        nameJP: '強化型艦本式缶',
        added: '2013-04-17',
        type: ENGINE,
        EV: 10
    },
    35: {
        name: 'Type 3 Shell',
        nameJP: '三式弾',
        added: '2013-04-17',
        type: TYPE3SHELL,
        btype: B_TYPE3SHELL,
        atype: A_TYPE3SHELL,
        AA: 5
    },
    36: {
        name: 'Type 91 AP Shell',
        nameJP: '九一式徹甲弾',
        added: '2013-04-17',
        type: APSHELL,
        btype: B_APSHELL,
        improveType: 1,
        FP: 8,
        ACC: 1
    },
    37: {
        name: '7.7mm Gun',
        nameJP: '7.7mm機銃',
        added: '2013-04-17',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 2,
        EV: 1
    },
    38: {
        name: '12.7mm Gun',
        nameJP: '12.7mm単装機銃',
        added: '2013-04-17',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 3,
        EV: 1
    },
    39: {
        name: '25mm Dual Gun',
        nameJP: '25mm連装機銃',
        added: '2013-04-17',
        type: AAGUN,
        atype: A_AAGUN,
        improveType: 1,
        AA: 5,
        EV: 1
    },
    40: {
        name: '25mm Triple Gun',
        nameJP: '25mm三連装機銃',
        added: '2013-04-17',
        type: AAGUN,
        atype: A_AAGUN,
        improveType: 1,
        AA: 6,
        EV: 1
    },
    41: {
        name: 'Type A Ko-hyoteki',
        nameJP: '甲標的',
        added: '2013-04-17',
        type: MIDGETSUB,
        TP: 12
    },
    42: {
        name: 'Repair Team',
        nameJP: '応急修理要員',
        added: '2013-04-17',
        type: REPAIR
    },
    43: {
        name: 'Repair Goddess',
        nameJP: '応急修理女神',
        added: '2013-04-17',
        type: REPAIR
    },
    44: {
        name: 'Type 94 Depth Charge',
        nameJP: '九四式爆雷投射機',
        added: '2013-04-17',
        type: DEPTHCHARGE,
        btype: B_DEPTHCHARGE,
        improveType: 1,
        ASW: 5
    },
    45: {
        name: 'Type 3 Depth Charge',
        nameJP: '三式爆雷投射機',
        added: '2013-04-17',
        type: DEPTHCHARGE,
        btype: B_DEPTHCHARGE,
        improveType: 1,
        ASW: 8
    },
    46: {
        name: 'Type 93 SONAR',
        nameJP: '九三式水中聴音機',
        added: '2013-04-17',
        type: SONARS,
        btype: B_SONAR,
        improveType: 1,
        ASW: 6,
        ACC: 1
    },
    47: {
        name: 'Type 3 SONAR',
        nameJP: '三式水中探信儀',
        added: '2013-04-17',
        type: SONARS,
        btype: B_SONAR,
        improveType: 1,
        ASW: 10,
        ACC: 2
    },
    48: {
        name: '12.7 cm Single High-Angle Cannon',
        nameJP: '12.7cm単装高角砲',
        added: '2013-06-05',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAGUN,
        FP: 1,
        AA: 3,
        RNG: 1
    },
    49: {
        name: '25mm Single Gun',
        nameJP: '25mm単装機銃',
        added: '2016-03-11',
        type: AAGUN,
        atype: A_AAGUN,
        improveType: 1,
        AA: 4,
        EV: 1
    },
    50: {
        name: '20.3cm(no.3) Dual Cannon',
        nameJP: '20.3cm(3号)連装砲',
        added: '2013-05-02',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 10,
        AA: 4,
        RNG: 2,
        CANBbonus: 15,
    },
    51: {
        name: '12cm 30-tube Rocket Launcher',
        nameJP: '12cm30連装噴進砲',
        added: '2013-05-17',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 8
    },
    52: {
        name: 'Ryuusei Kai',
        nameJP: '流星改',
        added: '2013-05-17',
        type: TORPBOMBER,
        improveType: 2,
        TP: 13,
        ASW: 3,
        LOS: 2
    },
    53: {
        name: 'Reppuu Kai',
        nameJP: '烈風改',
        added: '2013-05-17',
        type: FIGHTER,
        improveType: 2,
        AA: 12
    },
    54: {
        name: 'Saiun',
        nameJP: '彩雲',
        added: '2013-05-17',
        type: CARRIERSCOUT,
        improveType: 2,
        noRedT: true,
        LOS: 9,
        ACC: 2
    },
    55: {
        name: 'Shiden Kai 2',
        nameJP: '紫電改二',
        added: '2013-05-17',
        type: FIGHTER,
        improveType: 2,
        AA: 9,
        EV: 3
    },
    56: {
        name: 'Shinden Kai',
        nameJP: '震電改',
        added: '2013-05-17',
        type: FIGHTER,
        improveType: 2,
        AA: 15
    },
    57: {
        name: 'Suisei Model 12A',
        nameJP: '彗星一二型甲',
        added: '2013-05-17',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 3,
        LOS: 1,
        DIVEBOMB: 10
    },
    58: {
        name: '61cm Quintuple (Oxygen) Torpedo',
        nameJP: '61cm五連装(酸素)魚雷',
        added: '2013-06-01',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 12,
        RNG: 1,
        ACC: 1
    },
    59: {
        name: 'Type 0 Observation Seaplane',
        nameJP: '零式水上観測機',
        added: '2013-07-03',
        type: SEAPLANE,
        btype: B_RECON,
        improveType: 2,
        AA: 2,
        ASW: 4,
        LOS: 6,
        DIVEBOMB: 1,
        ACC: 2
    },
    60: {
        name: 'Type 62 Zero Fighter-Bomber',
        nameJP: '零式艦戦62型(爆戦)',
        added: '2013-08-14',
        type: DIVEBOMBER,
        improveType: 2,
        AA: 4,
        ASW: 3,
        DIVEBOMB: 4
    },
    61: {
        name: 'Type 2 Recon Plane',
        nameJP: '二式艦上偵察機',
        added: '2013-09-16',
        type: CARRIERSCOUT,
        improveType: 2,
        AA: 1,
        LOS: 7,
        ACC: 3
    },
    62: {
        name: 'Prototype Seiran',
        nameJP: '試製晴嵐',
        added: '2013-09-16',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        ASW: 6,
        LOS: 6,
        DIVEBOMB: 11,
        ACC: 1
    },
    63: {
        name: '12.7cm Twin Cannon B',
        nameJP: '12.7cm連装砲B型改二',
        added: '2013-10-04',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 3,
        AA: 2,
        RNG: 1
    },
    64: {
        name: 'Ju 87C Kai',
        nameJP: 'Ju87C改',
        added: '2013-11-13',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 5,
        DIVEBOMB: 9,
        ACC: 1
    },
    65: {
        name: '15.2cm Twin Cannon',
        nameJP: '15.2cm連装砲',
        added: '2013-11-01',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 102,
        FP: 4,
        AA: 3,
        RNG: 2,
        ACC: 3
    },
    66: {
        name: '8cm High-Angle Cannon',
        nameJP: '8cm高角砲',
        added: '2013-11-01',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAGUN,
        FP: 1,
        AA: 6,
        RNG: 1,
        ACC: 2
    },
    67: {
        name: '53cm Hull-mount (Oxygen) Torpedo',
        nameJP: '53cm艦首(酸素)魚雷',
        added: '2013-11-01',
        type: TORPEDO,
        btype: B_TORPEDO,
        TP: 15,
        RNG: 1,
        ACC: 2
    },
    68: {
        name: 'Daihatsu-Class Landing Craft',
        nameJP: '大発動艇',
        added: '2013-12-24',
        type: LANDINGCRAFT,
        btype: B_LC1,
        improveType: 1,
    },
    69: {
        name: 'Type Ka Liaison Aircraft',
        nameJP: 'カ号観測機',
        added: '2013-12-24',
        type: AUTOGYRO,
        ASW: 9,
        ACC: 1
    },
    70: {
        name: 'Type 3 Liaison Aircraft',
        nameJP: '三式指揮連絡機(対潜)',
        added: '2013-12-24',
        type: ASWPLANE,
        ASW: 7,
        LOS: 1,
        ACC: 2
    },
    71: {
        name: '10cm Twin High-Angle Cannon(Late Model)',
        nameJP: '10cm連装高角砲(砲架)',
        added: '2013-12-24',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAGUN,
        FP: 1,
        AA: 7,
        RNG: 1,
        ACC: 1
    },
    72: {
        name: 'Anti-Torpedo Bulge (M)',
        nameJP: '増設バルジ(中型艦)',
        added: '2014-01-15',
        type: BULGEM,
        AR: 7,
        EV: -2
    },
    73: {
        name: 'Anti-Torpedo Bulge (L)',
        nameJP: '増設バルジ(大型艦)',
        added: '2014-01-15',
        type: BULGEL,
        AR: 9,
        EV: -3
    },
    74: {
        name: 'Searchlight',
        nameJP: '探照灯',
        added: '2014-02-26',
        type: SEARCHLIGHTS,
        improveType: 1,
        LOS: 2
    },
    75: {
        name: 'Drum (Transport)',
        nameJP: 'ドラム缶(輸送用)',
        added: '2014-02-26',
        type: DRUM
    },
    76: {
        name: '38cm Twin Gun Mount',
        nameJP: '38cm連装砲',
        added: '2014-03-14',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 16,
        AA: 1,
        RNG: 3,
        ACC: 1
    },
    77: {
        name: '15cm Twin Gun Mount',
        nameJP: '15cm連装副砲',
        added: '2014-03-14',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        FP: 4,
        AA: 2,
        RNG: 2,
        ACC: 2
    },
    78: {
        name: '12.7cm Naval Gun',
        nameJP: '12.7cm単装砲',
        added: '2014-03-14',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 2,
        RNG: 1,
        ACC: 1
    },
    79: {
        name: 'Zuiun(634)',
        nameJP: '瑞雲(六三四空)',
        added: '2014-04-23',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        AA: 2,
        ASW: 5,
        LOS: 6,
        DIVEBOMB: 6,
        ACC: 1
    },
    80: {
        name: 'Zuiun Model 12',
        nameJP: '瑞雲12型',
        added: '2014-03-15',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        AA: 3,
        ASW: 5,
        LOS: 6,
        DIVEBOMB: 7,
        ACC: 1
    },
    81: {
        name: 'Zuiun Model 12(634)',
        nameJP: '瑞雲12型(六三四空)',
        added: '2014-04-21',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        AA: 3,
        ASW: 6,
        LOS: 7,
        DIVEBOMB: 9,
        ACC: 1
    },
    82: {
        name: 'Type 97 Torpedo Bomber(931)',
        nameJP: '九七式艦攻(九三一空)',
        added: '2014-03-15',
        type: TORPBOMBER,
        improveType: 2,
        TP: 6,
        ASW: 7,
        LOS: 2
    },
    83: {
        name: 'Tenzan(931)',
        nameJP: '天山(九三一空)',
        added: '2014-03-15',
        type: TORPBOMBER,
        improveType: 2,
        TP: 9,
        ASW: 8,
        LOS: 2
    },
    84: {
        name: '2cm Flakvierling 38',
        nameJP: '2cm 四連装FlaK 38',
        added: '2014-03-14',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 7,
        ACC: 1
    },
    85: {
        name: '3.7cm FlaK M42',
        nameJP: '3.7cm FlaK M42',
        added: '2014-03-14',
        type: AAGUN,
        atype: A_AAGUN,
        FP: 1,
        AA: 8,
        ACC: 1
    },
    86: {
        name: 'Ship Repair Facility',
        nameJP: '艦艇修理施設',
        added: '2014-04-23',
        type: SRF
    },
    87: {
        name: 'New High Pressure-Temperature Steam Boiler',
        nameJP: '新型高温高圧缶',
        added: '2014-04-23',
        type: ENGINE,
        EV: 13
    },
    88: {
        name: 'Type 22 Surface RADAR Kai 4',
        nameJP: '22号対水上電探改四',
        added: '2014-05-14',
        type: RADARS,
        btype: B_RADAR,
        improveType: 1,
        improve: {ACCshell:1.7,ACCnb:1.6},
        ASW: 2,
        LOS: 5,
        ACC: 8
    },
    89: {
        name: 'Type 21 Air RADAR Kai',
        nameJP: '21号対空電探改',
        added: '2014-05-14',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        improveType: 1,
        AA: 5,
        LOS: 6,
        EV: 1,
        ACC: 3
    },
    90: {
        name: '20.3cm(no.2) Twin Gun Mount',
        nameJP: '20.3cm(2号)連装砲',
        added: '2014-05-23',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 9,
        AA: 3,
        RNG: 2,
        ACC: 1
    },
    91: {
        name: '12.7cm Twin High-Angle Mount (Late Model)',
        nameJP: '12.7cm連装高角砲(後期型)',
        added: '2014-05-23',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAGUN,
        FP: 2,
        AA: 5,
        ASW: 1,
        EV: 1,
        RNG: 1,
        ACC: 1
    },
    92: {
        name: 'HI-type 40mm Twin Machine Gun',
        nameJP: '毘式40mm連装機銃',
        added: '2014-06-06',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 6,
        EV: 1
    },
    93: {
        name: 'Type 97 Torpedo Bomber(Tomonaga)',
        nameJP: '九七式艦攻(友永隊)',
        added: '2014-06-06',
        type: TORPBOMBER,
        improveType: 2,
        TP: 11,
        AA: 1,
        ASW: 5,
        LOS: 4,
        ACC: 3
    },
    94: {
        name: 'Tenzan Model 12(Tomonaga)',
        nameJP: '天山一二型(友永隊)',
        added: '2014-06-06',
        type: TORPBOMBER,
        improveType: 2,
        TP: 14,
        AA: 1,
        ASW: 6,
        LOS: 5,
        ACC: 3
    },
    95: {
        name: '53cm Submarine Bow Torpedo Mount (8 tubes)',
        nameJP: '潜水艦53cm艦首魚雷(8門)',
        added: '2014-06-06',
        type: TORPEDOSS,
        btype: B_TORPEDO,
        TP: 16,
        RNG: 1,
        ACC: 3
    },
    96: {
        name: 'Type 21 Zero Fighter (Skilled)',
        nameJP: '零式艦戦21型(熟練)',
        added: '2014-06-06',
        type: FIGHTER,
        improveType: 2,
        AA: 8,
        LOS: 1,
        EV: 2,
        ACC: 2
    },
    97: {
        name: 'Type 99 Bomber(Skilled)',
        nameJP: '九九式艦爆(熟練)',
        added: '2014-06-06',
        type: DIVEBOMBER,
        improveType: 2,
        AA: 1,
        ASW: 4,
        LOS: 2,
        DIVEBOMB: 7,
        ACC: 2
    },
    98: {
        name: 'Type 97 Torpedo Bomber(Skilled)',
        nameJP: '九七式艦攻(熟練)',
        added: '2014-07-18',
        type: TORPBOMBER,
        improveType: 2,
        TP: 8,
        ASW: 5,
        LOS: 2,
        ACC: 2
    },
    99: {
        name: 'Type 99 Bomber(Egusa)',
        nameJP: '九九式艦爆(江草隊)',
        added: '2014-07-18',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 5,
        LOS: 3,
        DIVEBOMB: 10,
        ACC: 4
    },
    100: {
        name: 'Suisei(Egusa)',
        nameJP: '彗星(江草隊)',
        added: '2014-07-18',
        type: DIVEBOMBER,
        improveType: 2,
        AA: 1,
        ASW: 5,
        LOS: 4,
        DIVEBOMB: 13,
        ACC: 4
    },
    101: {
        name: 'Star Shell',
        nameJP: '照明弾',
        added: '2014-06-06',
        type: STARSHELL
    },
    102: {
        name: 'Type 98 Recon Seaplane (Night Scout)',
        nameJP: '九八式水上偵察機(夜偵)',
        added: '2014-06-06',
        type: SEAPLANE,
        btype: B_RECON,
        isnightscout: true,
        improveType: 2,
        ASW: 1,
        LOS: 3,
        ACC: 1
    },
    103: {
        name: 'Prototype 35.6cm Triple Gun Mount',
        nameJP: '試製35.6cm三連装砲',
        added: '2014-07-19',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 18,
        AA: 5,
        RNG: 3,
        ACC: 2
    },
    104: {
        name: '35.6cm Twin Gun Mount (Dazzle Camouflage)',
        nameJP: '35.6cm連装砲(ダズル迷彩)',
        added: '2014-07-28',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 15,
        AA: 5,
        EV: 1,
        RNG: 3,
        ACC: 1
    },
    105: {
        name: 'Prototype 41cm Triple Cannon',
        nameJP: '試製41cm三連装砲',
        added: '2014-08-08',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 3,
        FP: 22,
        AA: 5,
        RNG: 3,
        ACC: 2
    },
    106: {
        name: 'Type 13 Air RADAR Kai',
        nameJP: '13号対空電探改',
        added: '2014-08-08',
        type: RADARS,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        improveType: 1,
        AA: 4,
        LOS: 4,
        EV: 1,
        ACC: 2
    },
    107: {
        name: 'Fleet Command Facility',
        nameJP: '艦隊司令部施設',
        added: '2014-08-08',
        type: FCF,
        AA: 1,
        LOS: 1,
        EV: 1,
        ACC: 1
    },
    108: {
        name: 'Skilled Carrier-based Aircraft Maintenance Personnel',
        nameJP: '熟練艦載機整備員',
        added: '2014-08-08',
        type: SCAMP,
        FP: 10,
        AA: 1,
        LOS: 1,
        RNG: 3,
        ACC: 1
    },
    109: {
        name: 'Zero Fighter Type 52 Type C (601 Air Group)',
        nameJP: '零戦52型丙(六〇一空)',
        added: '2014-08-08',
        type: FIGHTER,
        improveType: 2,
        AA: 9,
        EV: 1,
        ACC: 1
    },
    110: {
        name: 'Reppuu(601)',
        nameJP: '烈風(六〇一空)',
        added: '2014-08-08',
        type: FIGHTER,
        improveType: 2,
        AA: 11,
        EV: 2,
        ACC: 1
    },
    111: {
        name: 'Suisei (601 Air Group)',
        nameJP: '彗星(六〇一空)',
        added: '2014-08-08',
        type: DIVEBOMBER,
        improveType: 2,
        ASW: 4,
        LOS: 1,
        DIVEBOMB: 11,
        ACC: 1
    },
    112: {
        name: 'Tenzan(601)',
        nameJP: '天山(六〇一空)',
        added: '2014-08-08',
        type: TORPBOMBER,
        improveType: 2,
        TP: 10,
        ASW: 4,
        LOS: 2,
        ACC: 1
    },
    113: {
        name: 'Ryuusei(601)',
        nameJP: '流星(六〇一空)',
        added: '2014-08-08',
        type: TORPBOMBER,
        improveType: 2,
        TP: 13,
        ASW: 5,
        LOS: 3,
        ACC: 1
    },
    114: {
        name: '38cm Twin Gun Mount Kai',
        nameJP: '38cm連装砲改',
        added: '2014-09-26',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 17,
        AA: 2,
        RNG: 3,
        ACC: 3
    },
    115: {
        name: 'Ar196 Kai',
        nameJP: 'Ar196改',
        added: '2014-09-26',
        type: SEAPLANE,
        btype: B_RECON,
        improveType: 2,
        AA: 1,
        ASW: 5,
        LOS: 5,
        DIVEBOMB: 1,
        ACC: 2
    },
    116: {
        name: 'Type 1 AP Shell',
        nameJP: '一式徹甲弾',
        added: '2014-10-10',
        type: APSHELL,
        btype: B_APSHELL,
        improveType: 1,
        FP: 9,
        ACC: 2
    },
    117: {
        name: 'Prototype 46cm Twin Gun Mount',
        nameJP: '試製46cm連装砲',
        added: '2014-10-13',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 4,
        FP: 23,
        AA: 4,
        RNG: 4,
        ACC: 1
    },
    118: {
        name: 'Shiun',
        nameJP: '紫雲',
        added: '2014-10-13',
        type: SEAPLANE,
        btype: B_RECON,
        improveType: 2,
        ASW: 2,
        LOS: 8,
        DIVEBOMB: 1,
        ACC: 1
    },
    119: {
        name: '14cm Twin Gun Mount',
        nameJP: '14cm連装砲',
        added: '2014-10-24',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 102,
        FP: 3,
        RNG: 2,
        ACC: 2
    },
    120: {
        name: 'Type 91 Anti-Aircraft Fire Director',
        nameJP: '91式高射装置',
        added: '2014-11-14',
        type: AAFD,
        atype: A_AAFD,
        improveType: 1,
        AA: 2,
        EV: 1
    },
    121: {
        name: 'Type 94 Anti-Aircraft Fire Director',
        nameJP: '94式高射装置',
        added: '2014-11-14',
        type: AAFD,
        atype: A_AAFD,
        improveType: 1,
        AA: 3,
        EV: 1
    },
    122: {
        name: '10cm Twin High-Angle Cannon+FD',
        nameJP: '10cm連装高角砲+高射装置',
        added: '2014-11-14',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAFD,
        improveType: 1,
        improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3,AAfleet:3,AAself:1.5},
        FP: 3,
        AA: 10,
        EV: 1,
        RNG: 1,
        ACC: 1
    },
    123: {
        name: 'SKC34 20.3cm Twin Cannon',
        nameJP: 'SKC34 20.3cm連装砲',
        added: '2014-11-14',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 10,
        AA: 2,
        RNG: 2,
        ACC: 3
    },
    124: {
        name: 'FuMO25 Radar',
        nameJP: 'FuMO25 レーダー',
        added: '2014-11-14',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        FP: 3,
        AA: 7,
        LOS: 9,
        ACC: 10
    },
    125: {
        name: '61cm Triple (Oxygen) Torpedo Mount',
        nameJP: '61cm三連装(酸素)魚雷',
        added: '2015-01-09',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 8,
        AR: 1,
        EV: 1,
        RNG: 1
    },
    126: {
        name: 'WG42 (Wurfgerat 42)',
        nameJP: 'WG42 (Wurfgerät 42)',
        added: '2015-02-06',
        type: WG42,
        FP: 1,
        AR: -1,
        RNG: 1
    },
    127: {
        name: 'Prototype FaT Type 95 Oxygen Torpedo Kai',
        nameJP: '試製FaT仕様九五式酸素魚雷改',
        added: '2015-02-06',
        type: TORPEDOSS,
        btype: B_TORPEDO,
        TP: 14,
        EV: 2,
        RNG: 1,
        ACC: 7
    },
    128: {
        name: 'Prototype 51cm Twin Cannon',
        nameJP: '試製51cm連装砲',
        added: '2015-02-06',
        type: MAINGUNXL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 7,
        FP: 30,
        AA: 5,
        EV: -1,
        RNG: 4,
        ACC: 1
    },
    129: {
        name: 'Skilled Lookouts',
        nameJP: '熟練見張員',
        added: '2015-02-17',
        type: PICKET,
        AA: 1,
        LOS: 2,
        EV: 3,
        ACC: 2,
        // LUK: 20
    },
    130: {
        name: '12.7cm Twin High-angle Mount + Type 94 Anti-Aircraft Fire Director',
        nameJP: '12.7cm高角砲+高射装置',
        added: '2015-03-13',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAFD,
        FP: 1,
        AA: 8,
        EV: 1,
        RNG: 1,
        ACC: 1
    },
    131: {
        name: '25mm Triple Autocannon Mount (Concentrated Deployment)',
        nameJP: '25mm三連装機銃 集中配備',
        added: '2015-03-13',
        type: AAGUN,
        atype: A_AAGUN,
        isconcentrated: true,
        AA: 9,
        EV: 1
    },
    132: {
        name: 'Type 0 Passive Sonar',
        nameJP: '零式水中聴音機',
        added: '2015-03-15',
        type: SONARL,
        btype: B_SONAR,
        ASW: 11,
        LOS: 1,
        EV: 1,
        ACC: 1
    },
    133: {
        name: '381mm / 50 Triple Gun Mount',
        nameJP: '381mm/50 三連装砲',
        added: '2015-04-28',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 2,
        FP: 20,
        AA: 2,
        EV: -1,
        RNG: 4,
        ACC: -3
    },
    134: {
        name: 'OTO 152mm Triple Rapid Fire Gun Mount',
        nameJP: 'OTO 152mm三連装速射砲',
        added: '2015-04-28',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        improveType: 1,
        FP: 8,
        AA: 2,
        AR: 1,
        RNG: 2,
        ACC: 1
    },
    135: {
        name: '90mm Single High-angle Gun Mount',
        nameJP: '90mm単装高角砲',
        added: '2015-04-28',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAFD,
        improveType: 1,
        improve: {Pshell:1,Pnb:1,ACCshell:1,ACCnb:1.3,AAfleet:3,AAself:1.5},
        FP: 1,
        AA: 8,
        RNG: 1,
        ACC: 1
    },
    136: {
        name: 'Pugliese Underwater Protection Bulkhead',
        nameJP: 'プリエーゼ式水中防御隔壁',
        added: '2015-04-28',
        type: BULGEL,
        AR: 7,
        EV: -1
    },
    137: {
        name: '381mm/50 Triple Gun Mount Kai',
        nameJP: '381mm/50 三連装砲改',
        added: '2015-04-28',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 2,
        FP: 21,
        AA: 4,
        EV: -1,
        RNG: 4,
        ACC: -1
    },
    138: {
        name: 'Type 2 Large-sized Flying Boat',
        nameJP: '二式大艇',
        added: '2015-04-28',
        type: FLYINGBOAT,
        btype: B_RECON,
        improveType: 2,
        ASW: 1,
        LOS: 12,
        ACC: 1
    },
    139: {
        name: '15.2cm Twin Cannon Kai',
        nameJP: '15.2cm連装砲改',
        added: '2015-05-19',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 102,
        FP: 5,
        AA: 3,
        RNG: 2,
        ACC: 4
    },
    140: {
        name: 'Type 96 150cm Searchlight',
        nameJP: '96式150cm探照灯',
        added: '2015-05-29',
        type: SEARCHLIGHTL,
        improveType: 1,
        AA: 1,
        LOS: 3
    },
    141: {
        name: 'Type 32 Surface RADAR Kai',
        nameJP: '32号対水上電探改',
        added: '2015-06-19',
        type: RADARL,
        btype: B_RADAR,
        improveType: 1,
        LOS: 11,
        ACC: 9
    },
    142: {
        name: '15m Duplex Rangefinder + Type 21 Air Radar Kai2',
        nameJP: '15m二重測距儀+21号電探改二',
        added: '2015-07-21',
        type: RADARXL,
        btype: B_RADAR,
        FP: 1,
        AA: 8,
        AR: 1,
        LOS: 7,
        EV: 1,
        ACC: 9
    },
    143: {
        name: 'Type 97 Torpedo Bomber(Murata)',
        nameJP: '九七式艦攻(村田隊)',
        added: '2015-08-10',
        type: TORPBOMBER,
        improveType: 2,
        TP: 12,
        AA: 1,
        ASW: 5,
        LOS: 4,
        ACC: 2
    },
    144: {
        name: 'Tenzan Model 12(Murata)',
        nameJP: '天山一二型(村田隊)',
        added: '2015-08-10',
        type: TORPBOMBER,
        improveType: 2,
        TP: 15,
        AA: 1,
        ASW: 6,
        LOS: 4,
        ACC: 2
    },
    145: {
        name: 'Combat Provisions',
        nameJP: '戦闘糧食',
        added: '2015-08-10',
        type: RATION
    },
    146: {
        name: 'Underway Replenishment',
        nameJP: '洋上補給',
        added: '2015-08-10',
        type: OILDRUM,
        AR: -2
    },
    147: {
        name: '120mm Twin Gun Mount',
        nameJP: '120mm連装砲',
        added: '2015-08-10',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 3,
        AA: 2,
        RNG: 1,
        ACC: 1
    },
    148: {
        name: 'Prototype Nanzan',
        nameJP: '試製南山',
        added: '2015-08-21',
        type: DIVEBOMBER,
        improveType: 2,
        AA: 1,
        ASW: 4,
        LOS: 2,
        DIVEBOMB: 11
    },
    149: {
        name: 'Type 4 Passive Sonar',
        nameJP: '四式水中聴音機',
        added: '2015-08-22',
        type: SONARS,
        btype: B_SONAR,
        improveType: 1,
        ASW: 12,
        ACC: 1
    },
    150: {
        name: 'Canned Saury',
        nameJP: '秋刀魚の缶詰',
        added: '2015-10-09',
        type: RATION
    },
    151: {
        name: 'Prototype Keiun',
        nameJP: '試製景雲(艦偵型)',
        added: '2015-10-21',
        type: CARRIERSCOUT2,
        FP: 2,
        ACC: 2,
        LOS: 11
    },
    152: {
        name: 'Type 52 Zero Fighter (Skilled)',
        nameJP: '零式艦戦52型(熟練)',
        added: '2015-10-30',
        type: FIGHTER,
        improveType: 2,
        AA: 9,
        ACC: 1,
        EV: 2,
        LOS: 1
    },
    153: {
        name: 'Type 52 Model C (Iwai Squadron)',
        nameJP: '零戦52型丙(付岩井小隊)',
        added: '2015-10-30',
        type: FIGHTER,
        improveType: 2,
        AA: 10,
        ACC: 1,
        EV: 2,
        LOS: 1
    },
    154: {
        name: 'Type 62 Zero Fighter-Bomber (Iwai Corps)',
        nameJP: '零戦62型(爆戦/岩井隊)',
        added: '2015-10-30',
        type: DIVEBOMBER,
        improveType: 2,
        DIVEBOMB: 4,
        AA: 7,
        ACC: 1,
        EV: 2,
        LOS: 1
    },
    155: {
        name: 'Type 21 Zero Fighter (Iwamoto Squadron)',
        nameJP: '零戦21型(付岩本小隊)',
        added: '2015-10-30',
        type: FIGHTER,
        improveType: 2,
        AA: 9,
        ACC: 1,
        EV: 3,
        LOS: 1
    },
    156: {
        name: 'Type 52 Model A (Iwamoto Squadron)',
        nameJP: '零戦52型甲(付岩本小隊)',
        added: '2015-10-30',
        type: FIGHTER,
        improveType: 2,
        AA: 11,
        ACC: 1,
        EV: 3,
        LOS: 1
    },
    157: {
        name: 'Type 53 Zero Fighter (Iwamoto Corps)',
        nameJP: '零式艦戦53型(岩本隊)',
        added: '2015-10-30',
        type: FIGHTER,
        improveType: 2,
        AA: 12,
        ACC: 2,
        EV: 4,
        LOS: 3
    },
    158: {
        name: 'Bf 109T Kai',
        nameJP: 'Bf109T改',
        added: '2015-11-18',
        type: FIGHTER,
        improveType: 2,
        AA: 8,
        FP: 1,
        EV: 4
    },
    159: {
        name: 'Fw 190T Kai',
        nameJP: 'Fw190T改',
        added: '2015-11-18',
        type: FIGHTER,
        improveType: 2,
        AA: 10,
        FP: 2,
        EV: 2
    },
    160: {
        name: '10.5cm Twin Gun Mount',
        nameJP: '10.5cm連装砲',
        added: '2015-11-18',
        type: SECGUN,
        atype: A_HAGUN,
        FP: 3,
        AA: 6,
        ACC: 2,
        EV: 1,
        RNG: 1
    },
    161: {
        name: '16inch Triple Gun Mount Mk.7',
        nameJP: '16inch三連装砲 Mk.7',
        added: '2016-01-22',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 6,
        FP: 24,
        AA: 3,
        AR: 1,
        ACC: 4,
        RNG: 3
    },
    162: {
        name: '203mm/53 Twin Gun Mount',
        nameJP: '203mm/53 連装砲',
        added: '2016-02-10',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 9,
        AA: 1,
        ACC: -2,
        RNG: 3
    },
    163: {
        name: 'Ro.43 Recon Seaplane',
        nameJP: 'Ro.43水偵',
        added: '2016-02-10',
        type: SEAPLANE,
        btype: B_RECON,
        FP: 1,
        AA: 1,
        ASW: 2,
        ACC: 2,
        EV: 1,
        LOS: 4
    },
    164: {
        name: 'Ro.44 Seaplane Fighter',
        nameJP: 'Ro.44水上戦闘機',
        added: '2016-02-10',
        b_image: 12,
        type: SEAPLANEFIGHTER,
        improveType: 2,
        DIVEBOMB: 1,
        AA: 2,
        ASW: 1,
        ACC: 1,
        EV: 2,
        LOS: 2
    },
    165: {
        name: 'Type 2 Seaplane Fighter Kai',
        nameJP: '二式水戦改',
        added: '2016-03-11',
        b_image: 12,
        type: SEAPLANEFIGHTER,
        improveType: 2,
        AA: 3,
        ASW: 1,
        ACC: 1,
        EV: 2,
        LOS: 1
    },
    166: {
        name: 'Daihatsu Landing Craft (Type 89 Medium Tank & Landing Force)',
        nameJP: '大発動艇(八九式中戦車&陸戦隊)',
        added: '2016-03-19',
        type: LANDINGCRAFT,
        btype: B_LC2,
        improveType: 1,
    },
    167: {
        name: 'Special Type 2 Amphibious Landing Craft',
        nameJP: '特二式内火艇',
        added: '2016-03-19',
        type: LANDINGTANK,
        btype: B_LC3,
        improveType: 1,
    },
    168: {
        name: 'Type 96 Land-based Attack Aircraft',
        nameJP: '九六式陸攻',
        added: '2016-04-25',
        b_image: 13,
        type: LANDBOMBER,
        DIVEBOMB: 10,
        TP: 8,
        AA: 1,
        ASW: 2,
        LOS: 2
    },
    169: {
        name: 'Type 1 Land-based Attack Aircraft',
        nameJP: '一式陸攻',
        added: '2016-04-25',
        b_image: 13,
        type: LANDBOMBER,
        DIVEBOMB: 12,
        TP: 10,
        AA: 2,
        ASW: 2,
        LOS: 3
    },
    170: {
        name: 'Type 1 Land-based Attack Aircraft (Nonaka Squadron)',
        nameJP: '一式陸攻(野中隊)',
        added: '2016-05-02',
        b_image: 13,
        type: LANDBOMBER,
        DIVEBOMB: 13,
        TP: 12,
        AA: 3,
        ASW: 2,
        ACC: 1,
        LOS: 4
    },
    171: {
        name: 'OS2U',
        nameJP: 'OS2U',
        added: '2016-05-02',
        type: SEAPLANE,
        btype: B_RECON,
        DIVEBOMB: 1,
        AA: 1,
        ASW: 1,
        ACC: 2,
        EV: 1,
        LOS: 6
    },
    172: {
        name: '5inch Twin Gun Mount Mk.28 mod.2',
        nameJP: '5inch連装砲 Mk.28 mod.2',
        added: '2016-05-02',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAFD,
        FP: 4,
        AA: 9,
        AR: 1,
        ACC: 2,
        EV: 1,
        RNG: 1,
    },
    173: {
        name: 'Bofors 40mm Quadruple Autocannon Mount',
        nameJP: 'Bofors 40mm四連装機関砲',
        added: '2016-04-25',
        type: AAGUN,
        atype: A_AAGUN,
        isconcentrated: true,
        FP: 1,
        AA: 10,
        AR: 1,
        ACC: 1,
        EV: 2
    },
    174: {
        name: '53cm Twin Torpedo Mount',
        nameJP: '53cm連装魚雷',
        added: '2016-05-02',
        type: TORPEDO,
        TP: 3,
        EV: 2,
        RNG: 1
    },
    175: {
        name: 'Raiden',
        nameJP: '雷電',
        added: '2016-05-02',
        b_image: 13,
        type: INTERCEPTOR,
        AA: 6,
        ACC: 5,
        EV: 2
    },
    176: {
        name: 'Type 3 Fighter Hien',
        nameJP: '三式戦 飛燕',
        added: '2016-05-02',
        b_image: 13,
        type: INTERCEPTOR,
        AA: 8,
        ACC: 1,
        EV: 3
    },
    177: {
        name: 'Type 3 Fighter Hien (244th Air Combat Group)',
        nameJP: '三式戦 飛燕(飛行第244戦隊)',
        added: '2016-05-02',
        b_image: 13,
        type: INTERCEPTOR,
        AA: 9,
        ACC: 3,
        EV: 4
    },
    178: {
        name: 'PBY-5A Catalina',
        nameJP: 'PBY-5A Catalina',
        added: '2016-05-02',
        type: FLYINGBOAT,
        btype: B_RECON,
        ASW: 2,
        ACC: 2,
        LOS: 9
    },
    179: {
        name: 'Prototype 61cm Sextuple (Oxygen) Torpedo Mount',
        nameJP: '試製61cm六連装(酸素)魚雷',
        added: '2016-05-27',
        type: TORPEDO,
        btype: B_TORPEDO,
        improveType: 1,
        TP: 14,
        ACC: 2,
        RNG: 1,
    },
    180: {
        name: 'Type 1 Land-based Attack Aircraft Model 22A',
        nameJP: '一式陸攻 二二型甲',
        added: '2016-05-05',
        b_image: 13,
        type: LANDBOMBER,
        TP: 11,
        DIVEBOMB: 12,
        AA: 3,
        ASW: 2,
        LOS: 4,
    },
    181: {
        name: 'Type 0 Fighter Model 32',
        nameJP: '零式艦戦32型',
        added: '2016-06-30',
        type: FIGHTER,
        AA: 5,
        EV: 2,
    },
    182: {
        name: 'Type 0 Fighter Model 32 (Skilled)',
        nameJP: '零式艦戦32型(熟練)',
        added: '2016-06-30',
        type: FIGHTER,
        AA: 8,
        ACC: 1,
        EV: 4,
    },
    183: {
        name: '16inch Triple Gun Mount Mk.7 + GFCS',
        nameJP: '16inch三連装砲 Mk.7+GFCS',
        added: '2016-06-30',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 6,
        FP: 24,
        AA: 3,
        AR: 1,
        ACC: 7,
        EV: 1,
        RNG: 3
    },
    184: {
        name: 'Re.2001 OR Kai',
        nameJP: 'Re.2001 OR改',
        added: '2016-07-27',
        type: FIGHTER,
        improveType: 2,
        FP: 3,
        AA: 6,
        EV: 2,
    },
    185: {
        name: 'Type 3 Fighter Hien Model 1D',
        nameJP: '三式戦 飛燕１型丁',
        added: '2016-08-12',
        type: INTERCEPTOR,
        AA: 9,
        ACC: 2,
        EV: 3,
    },
    186: {
        name: 'Type 1 Land-based Attack Aircraft Model 34',
        nameJP: '一式陸攻 三四型',
        added: '2016-08-12',
        b_image: 13,
        type: LANDBOMBER,
        DIVEBOMB: 12,
        TP: 11,
        AA: 4,
        ASW: 2,
        ACC: 1,
        LOS: 4,
    },
    187: {
        name: 'Ginga',
        nameJP: '銀河',
        added: '2016-08-12',
        b_image: 13,
        type: LANDBOMBER,
        DIVEBOMB: 14,
        TP: 14,
        AA: 3,
        ASW: 3,
        ACC: 1,
        LOS: 3,
    },
    188: {
        name: 'Re.2001 G Kai',
        nameJP: 'Re.2001 G改',
        added: '2016-08-12',
        type: TORPBOMBER,
        FP: 3,
        TP: 4,
        AA: 4,
        EV: 2,
    },
    189: {
        name: 'Re.2005 Kai',
        nameJP: 'Re.2005 改',
        added: '2016-08-12',
        type: FIGHTER,
        FP: 1,
        AA: 11,
        EV: 3,
    },
    190: {
        name: '38.1cm Mk.I Twin Gun Mount',
        nameJP: '38.1cm Mk.I連装砲',
        added: '2016-08-12',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 18,
        AA: 1,
        ACC: 1,
        RNG: 3,
    },
    191: {
        name: 'QF 2-pounder Octuple Pom-pom Gun Mount',
        nameJP: 'QF 2ポンド8連装ポンポン砲',
        added: '2016-08-12',
        type: AAGUN,
        atype: A_AAGUN,
        isconcentrated: true,
        FP: 1,
        AA: 10,
    },
    192: {
        name: '38.1cm Mk.I/N Twin Gun Mount Kai',
        nameJP: '38.1cm Mk.I/N連装砲改',
        added: '2016-09-27',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        improveType: 1,
        fitclass: 1,
        FP: 19,
        AA: 3,
        ACC: 2,
        RNG: 3,
    },
    193: {
        name: 'Toku Daihatsu Landing Craft',
        nameJP: '特大発動艇',
        added: '2016-10-26',
        type: LANDINGCRAFT,
        btype: B_LC1,
    },
    194: {
        name: 'Laté 298B',
        nameJP: 'Laté 298B',
        added: '2016-11-18',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        FP: 2,
        DIVEBOMB: 5,
        TP: 4,
        AA: 1,
        ASW: 2,
        EV: 1,
        LOS: 4,
    },
    195: {
        name: 'SBD',
        nameJP: 'SBD',
        added: '2016-11-18',
        type: DIVEBOMBER,
        FP: 1,
        DIVEBOMB: 6,
        AA: 2,
        ASW: 3,
        ACC: 1,
        EV: 2,
        LOS: 2,
    },
    196: {
        name: 'TBD',
        nameJP: 'TBD',
        added: '2016-11-18',
        type: TORPBOMBER,
        FP: 1,
        TP: 5,
        ASW: 4,
        LOS: 2,
    },
    197: {
        name: 'F4F-3',
        nameJP: 'F4F-3',
        added: '2016-11-18',
        type: FIGHTER,
        FP: 1,
        AA: 4,
        EV: 2,
    },
    198: {
        name: 'F4F-4',
        nameJP: 'F4F-4',
        added: '2016-11-18',
        type: FIGHTER,
        FP: 1,
        AA: 5,
        ACC: 1,
        EV: 2,
        LOS: 1,
    },
    999: { //was 199
        name: 'SB2U',
        nameJP: 'SB2U',
        added: '2016-11-18',
        type: DIVEBOMBER,
    },
    199: {
        name: 'Jet Keiun Kai',
        nameJP: '噴式景雲改',
        added: '2016-12-09',
        b_image: 14,
        type: JETBOMBER,
        isjet: true,
        DIVEBOMB: 15,
        AA: 6,
        ACC: 1,
        LOS: 3,
        RNG: 3,
    },
    200: {
        name: 'Kikka Kai',
        nameJP: '橘花改',
        added: '2016-12-09',
        b_image: 14,
        type: JETBOMBER,
        isjet: true,
        DIVEBOMB: 11,
        AA: 12,
        EV: 1,
        RNG: 3,
    },
    204: {
        name: 'New Kanhon Design Anti-Torpedo Bulge (L)',
        nameJP: '艦本新設計 増設バルジ(大型艦)',
        added: '2016-12-22',
        type: BULGEL,
        AR: 10,
        EV: -2,
    },
    205: {
        name: 'F6F-3',
        nameJP: 'F6F-3',
        added: '2016-12-28',
        type: FIGHTER,
        FP: 1,
        AA: 8,
        ACC: 1,
        EV: 2,
        LOS: 1,
    },
    207: {
        name: 'Zuiun (631 Air Group)',
        nameJP: '瑞雲(六三一空)',
        added: '2017-01-27',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        improveType: 2,
        DIVEBOMB: 7,
        AA: 1,
        ASW: 2,
        ACC: 2,
        LOS: 4,
    },
    208: {
        name: 'Seiran (631 Air Group)',
        nameJP: '晴嵐(六三一空)',
        added: '2017-01-27',
        b_image: 11,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        DIVEBOMB: 12,
        ASW: 3,
        ACC: 2,
        LOS: 6,
    },
    209: {
        name: 'Saiun (Disassembled for Transport)',
        nameJP: '彩雲(輸送用分解済)',
        added: '2017-02-12',
        type: TRANSPORTITEM,
    },
    210: {
        name: 'Submarine Radar & Waterproof Telescope',
        nameJP: '潜水艦搭載電探&水防式望遠鏡',
        added: '2017-02-11',
        type: SUBRADAR,
        FP: 1,
        AA: 1,
        ACC: 2,
        EV: 8,
        LOS: 4,
    },
    211: {
        name: 'Submarine Radar & Passive Radiolocator (E27)',
        nameJP: '潜水艦搭載電探&逆探(E27)',
        added: '2017-02-12',
        type: SUBRADAR,
        FP: 1,
        AA: 1,
        ACC: 3,
        EV: 11,
        LOS: 5,
    },
    212: {
        name: 'Saiun (Eastern Caroline Air Group)',
        nameJP: '彩雲(東カロリン空)',
        added: '2017-02-12',
        type: CARRIERSCOUT,
        FP: 1,
        ACC: 2,
        LOS: 10,
    },
    213: {
        name: 'Late Model Bow Torpedo Mount (6 tubes)',
        nameJP: '後期型艦首魚雷(6門)',
        added: '2017-02-25',
        type: TORPEDOSS,
        btype: B_TORPEDO,
        TP: 15,
        ACC: 3,
        EV: 1,
        RNG: 1,
    },
    214: {
        name: 'Skilled Sonar Personnel + Late Model Bow Torpedo Mount (6 tubes)',
        nameJP: '熟練聴音員+後期型艦首魚雷(6門)',
        added: '2017-02-25',
        type: TORPEDOSS,
        btype: B_TORPEDO,
        TP: 15,
        ACC: 5,
        EV: 4,
        LOS: 1,
        RNG: 1,
    },
    215: {
        name: 'Ro.44 Seaplane Fighter bis',
        nameJP: 'Ro.44水上戦闘機bis',
        added: '2017-03-17',
        type: SEAPLANEFIGHTER,
        AA: 3,
        ASW: 1,
        ACC: 2,
        EV: 2,
        LOS: 3,
    },
    216: {
        name: 'Type 2 Seaplane Fighter Kai (Skilled)',
        nameJP: '二式水戦改(熟練)',
        added: '2017-03-17',
        type: SEAPLANEFIGHTER,
        AA: 5,
        ASW: 1,
        ACC: 1,
        EV: 2,
        LOS: 1,
    },
    217: {
        name: 'Kyoufuu Kai',
        nameJP: '強風改',
        added: '2017-03-27',
        type: SEAPLANEFIGHTER,
        AA: 5,
        EV: 3,
        LOS: 1,
    },
    219: {
        name: 'Type 0 Fighter Model 63 (Fighter-bomber)',
        nameJP: '零式艦戦63型(爆戦)',
        added: '2017-03-27',
        type: DIVEBOMBER,
        DIVEBOMB: 5,
        AA: 5,
        ASW: 2,
    },
    220: {
        name: '8cm High-angle Gun Kai + Extra Machine Guns',
        nameJP: '8cm高角砲改+増設機銃',
        added: '2017-04-05',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAGUN,
        FP: 1,
        AA: 7,
        ACC: 2,
        EV: 1,
        RNG: 1,
    },
    501: {
        name: '5inch Single Cannon',
        nameJP: '5inch単装砲',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 1,
        RNG: 1,
    },
    502: {
        name: '5inch Twin Cannon',
        nameJP: '5inch連装砲',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 2,
        RNG: 1,
    },
    503: {
        name: '3inch Single High-Angle Mount',
        nameJP: '3inch単装高角砲',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_GUN, //regular gun in AA calculation?
        FP: 1,
        AA: 1,
        RNG: 1,
    },
    504: {
        name: '5inch Single AA Cannon',
        nameJP: '5inch単装高射砲',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 2,
        AA: 2,
        RNG: 2,
    },
    505: {
        name: '8inch Triple Cannon',
        nameJP: '8inch三連装砲',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 8,
        AA: 2,
        RNG: 2,
    },
    506: {
        name: '6inch Twin Rapid-fire Cannon',
        nameJP: '6inch連装速射砲',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 3,
        AA: 3,
        RNG: 2,
    },
    507: {
        name: '14inch Twin Cannon',
        nameJP: '14inch連装砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        FP: 10,
        AA: 4,
        RNG: 3,
    },
    508: {
        name: '16inch Twin Cannon',
        nameJP: '16inch連装砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 15,
        AA: 4,
        RNG: 3,
    },
    509: {
        name: '16inch Triple Cannon',
        nameJP: '16inch三連装砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 20,
        AA: 5,
        RNG: 3,
    },
    510: {
        name: '5inch High-Angle Mount (Secondary)',
        nameJP: '5inch単装高射砲',
        type: SECGUNAA,
        btype: B_SECGUN,
        atype: A_HAGUN,
        FP: 1,
        AA: 2,
        RNG: 1,
    },
    511: {
        name: '6inch Single Cannon',
        nameJP: '6inch単装砲',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        FP: 1,
        RNG: 2,
    },
    512: {
        name: '12.5inch Twin Secondary Cannon',
        nameJP: '12.5inch連装副砲',
        type: SECGUN,
        btype: B_SECGUN,
        atype: A_GUN,
        FP: 7,
        AA: 3,
        RNG: 2,
    },
    513: {
        name: '21inch Torpedo Mk.I',
        nameJP: '21inch魚雷前期型',
        type: TORPEDO,
        btype: B_TORPEDO,
        TP: 2,
        RNG: 1,
    },
    514: {
        name: '21inch Torpedo Mk.II',
        nameJP: '21inch魚雷後期型',
        type: TORPEDO,
        btype: B_TORPEDO,
        TP: 5,
        RNG: 1,
    },
    515: {
        name: 'High-speed Abyssal Torpedo',
        nameJP: '高速深海魚雷',
        type: TORPEDO,
        btype: B_TORPEDO,
        TP: 10,
        RNG: 1,
    },
    516: {
        name: 'Abyssal Torpedo Bomber Mk.I',
        nameJP: '深海棲艦攻',
        b_image: 3,
        type: TORPBOMBER,
        TP: 4,
        ASW: 2,
        LOS: 5,
    },
    517: {
        name: 'Abyssal Torpedo Bomber Mk.II',
        nameJP: '深海棲艦攻 Mark.II',
        b_image: 4,
        type: TORPBOMBER,
        TP: 6,
        ASW: 4,
        LOS: 5,
    },
    518: {
        name: 'Abyssal Torpedo Bomber Mk.III',
        nameJP: '深海棲艦攻 Mark.III',
        b_image: 5,
        type: TORPBOMBER,
        TP: 11,
        AA: 4,
        ASW: 7,
        LOS: 5,
    },
    519: {
        name: 'Abyssal Fighter',
        nameJP: '深海棲艦戦',
        b_image: 3,
        type: FIGHTER,
        AA: 2,
    },
    520: {
        name: 'Abyssal Fighter Mk.II',
        nameJP: '深海棲艦戦 Mark.II',
        b_image: 4,
        type: FIGHTER,
        AA: 5,
    },
    521: {
        name: 'Abyssal Fighter Mk.III',
        nameJP: '深海棲艦戦 Mark.III',
        b_image: 5,
        type: FIGHTER,
        AA: 9,
    },
    522: {
        name: 'Flying-fish Fighter',
        nameJP: '飛び魚艦戦',
        b_image: 5,
        type: FIGHTER,
        AA: 13,
    },
    523: {
        name: 'Abyssal Dive Bomber Mk.I',
        nameJP: '深海棲艦爆',
        b_image: 3,
        type: DIVEBOMBER,
        DIVEBOMB: 3,
        ASW: 1,
    },
    524: {
        name: 'Abyssal Dive Bomber Mk.II',
        nameJP: '深海棲艦爆 Mark.II',
        b_image: 4,
        type: DIVEBOMBER,
        DIVEBOMB: 6,
        ASW: 2,
    },
    525: {
        name: 'Abyssal Recon Plane',
        nameJP: '深海棲艦偵察機',
        type: SEAPLANE,
        btype: B_RECON,
        AA: 1,
        ASW: 1,
        LOS: 5,
    },
    526: {
        name: 'Flying-fish Recon Plane',
        nameJP: '飛び魚偵察機',
        type: SEAPLANE,
        btype: B_RECON,
        AA: 2,
        ASW: 2,
        LOS: 10,
    },
    527: {
        name: 'Air Radar Mark.I',
        nameJP: '対空レーダ― Mark.I',
        type: RADARS,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 5,
        LOS: 5,
        ACC: 5,
    },
    528: {
        name: 'Surface Radar Mark.I',
        nameJP: '水上レーダ― Mark.I',
        type: RADARS,
        btype: B_RADAR,
        LOS: 5,
        ACC: 10,
    },
    529: {
        name: 'Surface Radar Mark.II',
        nameJP: '水上レーダ― Mark.II',
        type: RADARS,
        btype: B_RADAR,
        LOS: 10,
        ACC: 15,
    },
    530: {
        name: 'Air Radar Mark.II',
        nameJP: '対空レーダ― Mark.II',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 10,
        LOS: 10,
        ACC: 5,
    },
    531: {
        name: 'Abyssal Surface Radar',
        nameJP: '深海水上レーダー',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 5,
        EV: 3,
        ASW: 5,
        LOS: 16,
        ACC: 24,
    },
    532: {
        name: 'Abyssal Air Radar',
        nameJP: '深海対空レーダ―',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 18,
        EV: 2,
        ASW: 5,
        LOS: 12,
        ACC: 16,
    },
    533: {
        name: 'Improved Abyssal Turbine',
        nameJP: '改良型深海タービン',
        type: ENGINE,
        EV: 10,
    },
    534: {
        name: 'Enhanced Abyssal Engine',
        nameJP: '強化型深海缶',
        type: ENGINE,
        EV: 15,
    },
    535: {
        name: 'Abyssal AA Dispersal Shell',
        nameJP: '対空散弾',
        type: TYPE3SHELL,
        AA: 10,
    },
    536: {
        name: 'Depleted AP Shell',
        nameJP: '劣化徹甲弾',
        type: APSHELL,
        btype: B_APSHELL,
        FP: 15,
        ACC: 5,
    },
    537: {
        name: '12.7mm Abyssal Gun',
        nameJP: '12.7mm機銃',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 2,
    },
    538: {
        name: '20mm Abyssal Gun',
        nameJP: '20mm機銃',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 4,
    },
    539: {
        name: '40mm Abyssal Twin Autocannon',
        nameJP: '40mm二連装機関砲',
        type: AAGUN,
        atype: A_AAGUN,
        AA: 8,
    },
    540: {
        name: '40mm Abyssal Quad Autocannon',
        nameJP: '40mm四連装機関砲',
        type: AAGUN,
        atype: A_AAGUN,
        isconcentrated: true,
        AA: 12,
    },
    541: {
        name: 'Abyssal Cuttlefish Torpedo',
        nameJP: '深海烏賊魚雷',
        type: MIDGETSUB,
        TP: 18,
        ACC: 5,
    },
    542: {
        name: 'Abyssal Depth Charge',
        nameJP: '深海爆雷投射機',
        type: DEPTHCHARGE,
        btype: B_DEPTHCHARGE,
        ASW: 7,
    },
    543: {
        name: 'Abyssal Sonar',
        nameJP: '深海ソナー',
        type: SONARS,
        btype: B_SONAR,
        ASW: 9,
    },
    544: {
        name: 'Abyssal Depth Charge Mk.II',
        nameJP: '深海爆雷投射機 Mk.II',
        type: DEPTHCHARGE,
        btype: B_DEPTHCHARGE,
        ASW: 13,
    },
    545: {
        name: 'Abyssal Sonar Mk.II',
        nameJP: '深海ソナー Mk.II',
        type: SONARS,
        btype: B_SONAR,
        ASW: 16,
    },
    546: {
        name: 'Flying-fish Dive Bomber',
        nameJP: '飛び魚艦爆',
        b_image: 5,
        type: DIVEBOMBER,
        DIVEBOMB: 10,
        AA: 8,
        ASW: 7,
    },
    547: {
        name: 'Abyssal Cat Fighter',
        nameJP: '深海猫艦戦',
        b_image: 6,
        type: FIGHTER,
        AA: 10,
        ACC: 1,
    },
    548: {
        name: 'Abyssal Hell Diver',
        nameJP: '深海地獄艦爆',
        b_image: 7,
        type: DIVEBOMBER,
        DIVEBOMB: 11,
        ASW: 4,
        LOS: 3,
        ACC: 3,
    },
    549: {
        name: 'Avenger Torpedo Bomber',
        nameJP: '深海復讐艦攻',
        b_image: 8,
        type: TORPBOMBER,
        TP: 13,
        AA: 4,
        ASW: 5,
        LOS: 5,
        ACC: 2,
    },
    550: {
        name: '5inch Twin Dual-Purpose Cannon',
        nameJP: '5inch連装両用莢砲',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAFD,
        FP: 2,
        AA: 9,
        RNG: 2,
        ACC: 3,
    },
    551: {
        name: '20inch Twin Cannon',
        nameJP: '20inch連装砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 27,
        AA: 4,
        RNG: 3,
        ACC: 3,
    },
    552: {
        name: '15inch Fortress Gun',
        nameJP: '15inch要塞砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 13,
        AR: 3,
        RNG: 3,
        ACC: 4,
    },
    553: {
        name: '4inch Dual-Purpose+CIC',
        nameJP: '4inch連装両用砲+CIC',
        type: MAINGUNSAA,
        btype: B_MAINGUN,
        atype: A_HAFD,
        FP: 5,
        AA: 15,
        RNG: 2,
        ACC: 5,
    },
    554: {
        name: 'Abyssal Attack Seaplane',
        nameJP: '深海水上攻撃機',
        b_image: 7,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        DIVEBOMB: 8,
        AA: 4,
        ASW: 8,
        LOS: 6,
        ACC: 1,
    },
    555: {
        name: 'Abyssal Attack Seaplane Kai',
        nameJP: '深海水上攻撃機改',
        b_image: 7,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        DIVEBOMB: 13,
        AA: 9,
        ASW: 10,
        LOS: 7,
        ACC: 3,
    },
    556: {
        name: 'Abyssal Cat Fighter Kai',
        nameJP: '深海猫艦戦改',
        b_image: 6,
        type: FIGHTER,
        AA: 12,
        EV: 2,
        ACC: 2,
    },
    557: {
        name: 'Abyssal Hell Diver Kai',
        nameJP: '深海地獄艦爆改',
        b_image: 7,
        type: DIVEBOMBER,
        DIVEBOMB: 15,
        ASW: 8,
        LOS: 5,
        ACC: 4,
    },
    558: {
        name: 'Avenger Torpedo Bomber Kai',
        nameJP: '深海復讐艦攻改',
        b_image: 8,
        type: TORPBOMBER,
        TP: 16,
        AA: 5,
        ASW: 9,
        LOS: 6,
        ACC: 3,
    },
    559: {
        name: 'Abyssal FCS + CIC',
        nameJP: '深海FCS+CIC',
        type: SONARS,
        btype: B_SONAR,
        atype: A_GUN, //.2 mult
        AA: 6,
        ASW: 20,
        EV: 3,
        LOS: 3,
        ACC: 5
    },
    560: {
        name: 'Abyssal Searchlight',
        nameJP: '深海探照灯',
        type: SEARCHLIGHTS,
        FP: 2,
        LOS: 2
    },
    561: {
        name: 'Abyssal Liberation Land-based Dive Bomber',
        nameJP: '深海解放陸爆',
        b_image: 9,
        type: DIVEBOMBER,
        DIVEBOMB: 11,
        AA: 3,
        ASW: 5,
        ACC: 1,
        LOS: 3
    },
    562: {
        name: 'Abyssal Liberation Land-based Dive Bomber Ace',
        nameJP: '深海解放陸爆Ace',
        b_image: 10,
        type: DIVEBOMBER,
        DIVEBOMB: 16,
        AA: 5,
        ASW: 7,
        ACC: 2,
        LOS: 4
    },
    563: {
        name: '8inch Long Range Twin Gun Mount',
        nameJP: '8inch長射程連装砲',
        type: MAINGUNM,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 8,
        AA: 1,
        ACC: -1,
        RNG: 3
    },
    564: {
        name: 'Abyssal Reconnaissance Observation Seaplane',
        nameJP: '深海水上偵察観測機',
        type: SEAPLANE,
        btype: B_RECON,
        AA: 2,
        ASW: 2,
        ACC: 5,
        LOS: 5
    },
    565: {
        name: '5inch Coastal Gun',
        nameJP: '5inch沿岸設置砲',
        type: MAINGUNS,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 3,
        AR: 2,
        EV: 3,
        RNG: 2
    },
    566: {
        name: 'Abyssal Cat Fighter (Bombing)',
        nameJP: '深海猫艦戦(爆装)',
        b_image: 6,
        type: DIVEBOMBER,
        DIVEBOMB: 8,
        AA: 7,
        ASW: 2,
        ACC: 2
    },
    567: {
        name: 'Coastal Radar',
        nameJP: '沿岸設置レーダー',
        type: RADARL,
        btype: B_RADAR,
        atype: A_AIRRADAR,
        AA: 4,
        ACC: 16,
        LOS: 8
    },
    568: {
        name: '16inch Triple Gun Mount (Abyssal)',
        nameJP: '16inch三連装砲',
        type: MAINGUNL,
        btype: B_MAINGUN,
        atype: A_GUN,
        FP: 24,
        AA: 3,
        AR: 1,
        ACC: 4,
        RNG: 3
    },
    569: {
        name: 'Abyssal Reconnaissance Flying Boat',
        nameJP: '深海偵察飛行艇',
        type: SEAPLANE,
        btype: B_RECON,
        FP: 3,
        AA: 1,
        ASW: 2,
        ACC: 8,
        LOS: 9
    },
    570: {
        name: 'High-speed Abyssal Torpedo mod. 2',
        nameJP: '高速深海魚雷 mod.2',
        type: MIDGETSUB,
        TP: 13,
        ACC: 3,
        RNG: 1,
    },
    571: {
        name: 'Abyssal Seaplane Tender Imp Aircraft',
        nameJP: '深海水母小鬼機',
        b_image: 7,
        type: SEAPLANEBOMBER,
        btype: B_RECON,
        FP: 4,
        DIVEBOMB: 15,
        AA: 11,
        AR: 4,
        ASW: 15,
        ACC: 8,
        LOS: 8,
        RNG: 4,
    },
    572: {
        name: 'Abyssal Bearcat Fighter',
        nameJP: '深海熊猫艦戦',
        b_image: 7,
        type: FIGHTER,
        FP: 8,
        AA: 18,
        AR: 8,
        ACC: 8,
        EV: 8,
    },
    573: {
        name: 'Abyssal Submarine Floatplane',
        nameJP: '深海潜水下駄履き',
        b_image: 7,
        type: SEAPLANEBOMBER,
        FP: 6,
        DIVEBOMB: 18,
        AA: 6,
        AR: 3,
        ASW: 9,
        ACC: 12,
        EV: 6,
        LOS: 3,
        RNG: 5,
    },
};

export {
    MAINGUNS, MAINGUNSAA, MAINGUNM, MAINGUNL,
    SECGUN, SECGUNAA, TORPEDO, FIGHTER,
    DIVEBOMBER, TORPBOMBER, CARRIERSCOUT, SEAPLANE,
    SEAPLANEBOMBER, RADARS, RADARL, SONARS,
    DEPTHCHARGE, ENGINE, TYPE3SHELL, APSHELL,
    AAGUN, MIDGETSUB, REPAIR, LANDINGCRAFT,
    AUTOGYRO, ASWPLANE, BULGEM, BULGEL,
    SEARCHLIGHTS, DRUM, SRF, TORPEDOSS,
    STARSHELL, FCF, SCAMP, AAFD,
    WG42, MAINGUNXL, PICKET, SONARL,
    FLYINGBOAT, SEARCHLIGHTL, RATION, OILDRUM,
    SEAPLANEFIGHTER, LANDINGTANK, LANDBOMBER, INTERCEPTOR,
    TRANSPORTITEM, SUBRADAR, JETBOMBER, JETSCOUT,
    RADARXL, CARRIERSCOUT2, OTHER
};

export {EQTDATA};