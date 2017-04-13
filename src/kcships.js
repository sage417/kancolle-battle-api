
//-------
function Fleet(id,isescortfor) {
    this.id = id;
    this.ships = [];
    if (isescortfor) {
        this.isescort = true;
        this.combinedWith = isescortfor;
        isescortfor.combinedWith = this;
    }

    this.formation = false;
    this.AP = 0;  //air (fighter) power
    this.FLoS = 0;  //fleet line of sight
    this.FAA = 0;  //fleet anti air
    this.AS = 0;  //air superiority
    this.DMGTOTALS = [0,0,0,0,0,0];
}
Fleet.prototype.loadShips = function(ships) {
    this.AP = 0; this.FLoS = 0; this.FAA = 0; this.noRedT = false;
    for(var i=0; i<ships.length; i++) {
        this.ships.push(ships[i]);
        ships[i].id = i+10*this.id;
        ships[i].apiID = (i+1)+6*this.id;
        ships[i].fleet = this;
        this.FAA += ships[i].AA;
        for (var j=0; j<ships[i].equips.length; j++) {
            if (ships[i].equips[j].noRedT) { this.noRedT = true; break; }
        }
        if (this.isescort) ships[i].isescort = true;

        //get fLOS
        this.FLoS += ships[i].LOS;
        for (var j=0; j<ships[i].equips.length; j++) {
            var equip = ships[i].equips[j];
            if (equip.LOS) {
                this.FLoS -= equip.LOS;
                if (equip.btype == B_RECON) this.FLoS +=  equip.LOS*Math.floor(Math.sqrt(ships[i].planecount[j]));
            }
        }
    }
    this.ships[0].isflagship = true;
}
Fleet.prototype.fleetAirPower = function(jetonly) {  //get air power
    this.AP = 0;
    for (var i=0; i<this.ships.length; i++) {
        this.AP += this.ships[i].airPower(jetonly);
    }
    return this.AP;
}
Fleet.prototype.fleetAntiAir = function(alreadyCombined) {
    var FAA = 0;
    for (var i=0; i<this.ships.length; i++) {
        for (var j=0; j<this.ships[i].equips.length; j++) {
            var equip = this.ships[i].equips[j];
            var mod = 0;
            switch(equip.atype) {
                case A_HAGUN:
                case A_HAFD:
                case A_AAFD:
                    mod = .35; break;
                case A_AIRRADAR:
                    mod = .4; break;
                case A_TYPE3SHELL:
                    mod = .6; break;
                case A_XLGUN:
                    mod = .25; break;
                default:
                    mod = .2; break;
            }
            if (equip.AA) FAA += Math.floor(equip.AA * mod);
        }
        if (this.ships[i].AAfleetImprv) FAA += this.ships[i].AAfleetImprv;
    }
    FAA *= 2*this.formation.AAmod;
    if (this.side == 0) FAA /= 1.3; //player side fleetAA is lower?
    if (this.combinedWith) {
        FAA *= ((this.isescort)? .48 : .72);
        if (!alreadyCombined) FAA += this.combinedWith.fleetAntiAir(true);
    }
    // console.log('FLEET ANTI-AIR: '+FAA);
    return FAA;
}
Fleet.prototype.supportChance = function(isboss) {
    var c = (isboss)? .85 : .5;
    if (this.ships[0].morale > 49) c += .15;
    for (var i=1; i<this.ships.length; i++) if (this.ships[i].morale > 49) c += .05;
    return c;
}
Fleet.prototype.reset = function(notShips) {
    if (!notShips) { for (var i=0; i<this.ships.length; i++) this.ships[i].reset();}
    this.AS = 0;
    this.DMGTOTALS = [0,0,0,0,0,0];
}
Fleet.prototype.giveCredit = function(ship,damage) {
    this.DMGTOTALS[this.ships.indexOf(ship)] += damage;
}
Fleet.prototype.getMVP = function() {
    var m = this.DMGTOTALS[0], ship = this.ships[0];
    for(var i=1; i<this.DMGTOTALS.length; i++) {
        if(this.DMGTOTALS[i] > m) { m = this.DMGTOTALS[i]; ship = this.ships[i]; }
    }
    return ship.id;
}
//----------

function Ship(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    this.id = 0;
    this.mid = id;
    this.iscarrier = true;
    if (!(typeof SHIPDATA == 'undefined')) {
        for (var key in SHIPDATA[id]) {  //load extra data
            if (['image','type','EQUIPS','SLOTS'].indexOf(key) == -1) this[key] = SHIPDATA[id][key];
        }
    }
    this.side = side;
    this.LVL = LVL;
    this.HP = HP;
    this.FP = FP;
    this.TP = TP;
    this.AA = AA;
    this.AR = AR;
    this.EV = EV;
    this.ASW = ASW;
    this.LOS = LOS;
    this.LUK = LUK;
    this.RNG = RNG;
    this.ACC = 0;
    this.maxHP = HP;
    // this.equipstats = {FP:0,TP:0,AA:0,AR:0,ACC:0,EV:0,ASW:0,LOS:0,RNG:0,DIVEBOMB:0};
    this.equiptypes = {};
    this.equips = [];
    this.fleet = false;
    this.isflagship = false;
    if (!planeslots) planeslots = [0,0,0,0];
    this.PLANESLOTS = planeslots;
    this.planecount = planeslots.slice();
    this.AACItype = [];
    this.fuelleft = 10;
    this.fuelDefault = 10;
    this.ammoleft = 10;
    this.ammoDefault = 10;
    this.protection = (side==0)?true:false;
    this.LOSeq = 0;
    this.APtype = false;
    this.morale = 49;
    this.moraleDefault = 49;

    this._nbtype = false;
    this._astype = false;
    this._aswpower = false;

    if (this.installtype) {
        this.isInstall = true;
    }
}
Ship.prototype.loadEquips = function(equips,levels,profs,addstats) {
    if (!equips || this.equips.length > 0) return;  //don't load if already have equips, do removeEquips() first
    var atypes = {};
    var planeexp = 0, planecount = 0;
    var installeqs = {DH1:0,DH2:0,DH3:0,WG:0,AP:0,T3:0,SB:0,SF:0};
    var fitcounts = {};
    for (var i=0; i<equips.length; i++){
        if (!equips[i]) continue;
        var eq = new Equip(equips[i],levels[i],profs[i]);

        if (eq.RNG && eq.RNG > this.RNG) this.RNG = eq.RNG;
        if (eq.ACC) this.ACC += eq.ACC;
        if (eq.btype) {
            if (!this.equiptypes[eq.btype]) this.equiptypes[eq.btype]=1;
            else this.equiptypes[eq.btype]++;
        }
        if (eq.atype) {
            if (!atypes[eq.atype]) atypes[eq.atype]=1;
            else atypes[eq.atype]++;
            if (eq.atype == A_HAFD) {  //HAFD also counts as HAGUN
                atypes[A_HAGUN] = (!atypes[A_HAGUN])? 1 : atypes[A_HAGUN]+1;
            }
        }
        if (eq.type == TYPE3SHELL) this.hasT3Shell = true;
        if (eq.type == WG42) this.numWG = (this.numWG)? this.numWG+1 : 1;
        if (eq.type == MIDGETSUB) this.hasMidgetSub = true;
        if (eq.type == STARSHELL) this.hasStarShell = true;
        if (eq.type == SEARCHLIGHTS) this.hasSearchlight = 1;
        if (eq.type == SEARCHLIGHTL) this.hasSearchlight = 2;
        if (eq.isnightscout) this.hasNightScout = true;
        if (eq.type == PICKET) this.hasLookout = true;
        if (eq.type == DIVEBOMBER) this.hasDivebomber = true;
        if (eq.type == FCF) this.hasFCF = true;
        if (eq.type == REPAIR) {
            if (this.repairs) this.repairs.push(equips[i]);
            else this.repairs = [equips[i]];
        }
        if (eq.isjet) this.hasjet = true;

        if (eq.CANBbonus) {
            if (!this.ACCnbca || this.ACCnbca > eq.CANBbonus) this.ACCnbca = eq.CANBbonus; //10 overrides 15
        }

        if (this.fitclass && eq.fitclass) {
            if (!fitcounts[eq.fitclass]) fitcounts[eq.fitclass] = 1;
            else fitcounts[eq.fitclass]++;
        }

        //add improvement stats
        for (var key in eq) {
            if (key.indexOf('Imprv')==-1) continue;
            if (this[key]) this[key] += eq[key];
            else this[key] = eq[key];
        }

        //add plane proficiency
        if (eq.APbonus) {
            if (!this.APbonus) this.APbonus = 0;
            this.APbonus += eq.APbonus;
        }
        if (eq.isdivebomber||eq.istorpbomber) {
            if (eq.rank > 5) {
                if (!this.critratebonus) this.critratebonus = 0;
                if (!this.critdmgbonus) this.critdmgbonus = 1;
                var mod;
                if (eq.rank == 7) mod = 8;
                else if (eq.rank == 6) mod = 5.6;
                this.critratebonus += mod*.75; //x.75????
                this.critdmgbonus += (Math.sqrt(eq.exp*1.2) + mod)/((i==0)? 100:200); //seems browser version is actually +.1 on max? added 1.2
            }
            if (eq.exp) planeexp += eq.exp;
            planecount++;
        }

        //installation equips
        if (eq.btype == B_LC1) installeqs.DH1++;
        else if(eq.btype == B_LC2) { installeqs.DH2++; this.hasDH2 = true; }
        else if(eq.btype == B_LC3) { installeqs.DH3++; this.hasDH3 = true; }
        else if(eq.type == APSHELL) installeqs.AP++;
        else if(eq.type == TYPE3SHELL) installeqs.T3++;
        else if(eq.type == SEAPLANEBOMBER) installeqs.SB++;
        //seaplane fighter?

        if (eq.LOS) this.LOSeq += eq.LOS;

        this.equips.push(eq);
    }
    if (planecount) {
        var avgexp = planeexp/planecount;
        if (avgexp >= 10) this.ACCplane = Math.sqrt(avgexp*.1);
        if (avgexp >= 100) this.ACCplane += 9;
        else if (avgexp >= 80) this.ACCplane += 6;
        else if (avgexp >= 70) this.ACCplane += 4;
        else if (avgexp >= 55) this.ACCplane += 3;
        else if (avgexp >= 40) this.ACCplane += 2;
        else if (avgexp >= 25) this.ACCplane += 1;
    }
    this.AACItype = this.getAACItype(atypes);
    if (addstats) {
        for (var i=0; i<equips.length; i++){
            var eq = this.equips[i];
            if (eq.FP) this.FP += eq.FP;
            if (eq.TP) this.TP += eq.TP;
            if (eq.AA) this.AA += eq.AA;
            if (eq.AR) this.AR += eq.AR;
            if (eq.EV) this.EV += eq.EV;
            if (eq.ASW) this.ASW += eq.ASW;
            if (eq.LOS) this.LOS += eq.LOS;
            if (eq.LUK) this.LUK += eq.LUK;
        }
    }

    if (this.equiptypes[B_APSHELL]&&this.equiptypes[B_MAINGUN]) {
        if (this.equiptypes[B_RADAR]&&this.equiptypes[B_SECGUN]) this.APtype = 4;
        else if (this.equiptypes[B_SECGUN]) this.APtype = 3;
        else if (this.equiptypes[B_RADAR]) this.APtype = 2;
        else this.APtype = 1;
    }

    for (var eqfitclass in fitcounts) { //BB fit
        if (eqfitclass > 100) continue;
        if (!this.ACCfit) this.ACCfit = 0;
        this.ACCfit += FITDATA[this.fitclass][eqfitclass]*Math.sqrt(fitcounts[eqfitclass]);
        if (!this.ACCfitN) this.ACCfitN = 0;
        this.ACCfitN += FITDATAN[this.fitclass][eqfitclass]*Math.sqrt(fitcounts[eqfitclass]);
    }
    if (this.fitclass==100) { //CL fit
        this.ACCfit = -2; this.FPfit = 0;
        if (fitcounts[101]) { this.ACCfit += 4*Math.sqrt(fitcounts[101]); this.FPfit += Math.sqrt(fitcounts[101]); }
        if (fitcounts[102]) { this.ACCfit += 3*Math.sqrt(fitcounts[102]); this.FPfit += 2*Math.sqrt(fitcounts[102]); }
    }

    this.pillboxMult = (this.type=='DD'||this.type=='CL')? 1.4 : 1;
    if (this.numWG >= 2) this.pillboxMult*=2.72;
    else if (this.numWG == 1) this.pillboxMult*=1.6;
    if (installeqs.DH2 >= 2) this.pillboxMult*=3;
    else if (installeqs.DH2 == 1) this.pillboxMult*=2.15;
    else if (installeqs.DH1) this.pillboxMult*=1.8;
    if (installeqs.DH3) this.pillboxMult*=2.4;
    if (installeqs.AP) this.pillboxMult*=1.85;
    if (installeqs.SB) this.pillboxMult*=1.5;

    this.isoMult = 1;
    if (this.numWG >= 2) this.isoMult*=2.1;
    else if (this.numWG == 1) this.isoMult*=1.4;
    if (installeqs.DH2 >= 2) this.isoMult*=3;
    else if (installeqs.DH2 == 1) this.isoMult*=2.15;
    else if (installeqs.DH1) this.isoMult*=1.8;
    if (installeqs.DH3) this.isoMult*=2.4;
    if (installeqs.T3) this.isoMult*=1.75;

    this.supplyPostMult = 1;
    if (this.numWG >= 2) this.supplyPostMult*=1.625;
    else if (this.numWG == 1) this.supplyPostMult*=1.25;
    if (installeqs.DH2 >= 2) this.supplyPostMult*=2.08;
    else if (installeqs.DH2 == 1) this.supplyPostMult*=1.3;
    if (installeqs.DH3) this.supplyPostMult*=1.7;

    if (this.repairs) this.repairsOrig = this.repairs.slice();
}

Ship.prototype.canShell = function() { return (this.HP > 0); }
Ship.prototype.canStillShell = function() { return this.canShell(); }
Ship.prototype.canNB = function() { return (this.HP/this.maxHP > .25); }
Ship.prototype.canTorp = function() { return (this.HP/this.maxHP > .5); }
Ship.prototype.canOpTorp = function() { return this.hasMidgetSub; }
Ship.prototype.canASW = function() { return false; }
Ship.prototype.canAS = function() {
    if (this.HP/this.maxHP <= .25) return false;
    for (var i=0; i<this.equips.length; i++) {
        if(this.equips[i].btype == B_RECON && this.planecount[i]) return true;
    }
    return false;
}

Ship.prototype.NBtype = function() {
    if (this._nbtype) return this._nbtype;
    var mguns = (this.equiptypes[B_MAINGUN])? this.equiptypes[B_MAINGUN] : 0;
    var sguns = (this.equiptypes[B_SECGUN])? this.equiptypes[B_SECGUN] : 0;
    var torps = (this.equiptypes[B_TORPEDO])? this.equiptypes[B_TORPEDO] : 0;
    console.log(mguns);
    if (torps >= 2) this._nbtype = 6;  //torp cut-in
    else if (mguns >= 3) this._nbtype = 5; //triple gun cut-in
    else if (mguns >= 2 && sguns) this._nbtype = 4;  //gun cut-in
    else if (torps && mguns) this._nbtype = 3;  //mix cut-in
    else if (mguns+sguns >= 2) this._nbtype = 2;  //double attack
    else this._nbtype = 1;  //single
    return this._nbtype;
}

Ship.prototype.NBchance = function() {
    var NBchance = (this.isflagship)? 15 : 0;
    if (this.hasLookout) NBchance += 5;
    if (this.LUK >= 50) NBchance += Math.floor(65+Math.sqrt(this.LUK-50)+Math.sqrt(this.LVL)*.8);
    else NBchance += Math.floor(this.LUK+15+Math.sqrt(this.LVL)*.75);
    return NBchance;
}

Ship.prototype.AStype = function() {
    if (this._astype) return this._astype;
    var mguns = this.equiptypes[B_MAINGUN], sguns = this.equiptypes[B_SECGUN], radars = this.equiptypes[B_RADAR], apshells = this.equiptypes[B_APSHELL];
    var recons = (this.equiptypes[B_RECON])? this.equiptypes[B_RECON] : 0;
    this._astype = [];
    if (recons <= 0 || mguns <= 0) return this._astype;

    if (mguns >= 2 && apshells) this._astype.push(6);
    if (sguns && apshells) this._astype.push(5);
    if (sguns && radars) this._astype.push(4);
    if (sguns) this._astype.push(3);
    if (mguns >= 2) this._astype.push(2); //double attack

    return this._astype;
}

Ship.prototype.ASchance = function(ASstate) {
    if (ASstate < 1 || !this.canAS() || !this.AStype().length) return 0;
    var fleetLOS = Math.floor(Math.sqrt(this.fleet.FLoS)+this.fleet.FLoS*.1);
    var luckLOS = Math.floor(Math.sqrt(this.LUK)+10);
    var ASchance;
    if (ASstate == 2) ASchance = Math.floor(luckLOS + 10 + .7*(this.LOSeq*1.6 + fleetLOS));
    else ASchance = Math.floor(luckLOS + .6*(this.LOSeq*1.2 + fleetLOS));
    if (this.isflagship) ASchance += 15;
    ASchance *= .01;
    return ASchance;
}

Ship.prototype.APmod = function(target) {
    if (!target.APweak) return 1;
    switch(this.APtype) {
        case 1: return 1.08;
        case 2: return 1.1;
        case 3: case 4: return 1.15;
        default: return 1;
    }
}

Ship.prototype.APacc = function(target) {
    if (!target.APweak) return 1;
    switch(this.APtype) {
        case 1: return 1.1;
        case 2: return 1.25;
        case 3: return 1.2
        case 4: return 1.3;
        default: return 1;
    }
}

function WGpower(num) {
    switch (num) {
        case 1: return 75;
        case 2: return 110;
        case 3: return 140;
        case 4: return 160;
        default: return 0;
    }
}

Ship.prototype.shellPower = function(target,base) {
    var bonus = (this.PshellImprv)? Math.floor(this.PshellImprv) : 0;
    //var shellbonus = (this.fleet && this.fleet.formation.shellbonus!==undefined)? this.fleet.formation.shellbonus : 5;
    var shellbonus = (base||5);
    if (target && target.isInstall) {
        switch (target.installtype) {
            case 2: //artillery imp
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.pillboxMult) return this.FP*this.pillboxMult + shellbonus + bonus;
                break;
            case 3: //supply depot
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.hasT3Shell) return this.FP*2.5 + shellbonus + bonus;
                break;
            case 4: //isolated island
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.isoMult) return this.FP*this.isoMult + shellbonus + bonus;
                break;
            default: //regular soft
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.hasT3Shell) return this.FP*2.5 + shellbonus + bonus;
                break;
        }
    }
    return this.FP + shellbonus + bonus;
}

Ship.prototype.NBPower = function(target) {
    var bonus = (this.PnbImprv)? Math.floor(this.PnbImprv) : 0;
    if (target && target.isInstall) {
        switch (target.installtype) {
            case 2:
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.pillboxMult) return this.FP*this.pillboxMult + bonus;
                break;
            case 3:
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.hasT3Shell) return this.FP*2.5 + bonus;
                break;
            case 4:
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.isoMult) return this.FP*this.isoMult + bonus;
                break;
            default:
                if (this.numWG) bonus += WGpower(this.numWG);
                if (this.hasT3Shell) return this.FP*2.5 + bonus;
                break;
        }
        return this.FP + bonus;
    }
    return this.FP + this.TP + bonus;
}

Ship.prototype.ASWPower = function() {
    if (this._aswpower) return this._aswpower;
    var equipASW = 0, hassonar = false, hasdc = false;
    for (var i=0; i<this.equips.length; i++) {
        if (this.equips[i].ASW) equipASW += this.equips[i].ASW;
        if (this.equips[i].btype == B_SONAR) hassonar = true;
        if (this.equips[i].btype == B_DEPTHCHARGE) hasdc = true;
    }
    var bonus = (this.PaswImprv)? Math.floor(this.PaswImprv) : 0;
    this._aswpower = (2*Math.sqrt(this.ASW-equipASW)+1.5*equipASW+((this.planeasw)? 8 : 13))* ((hassonar && hasdc)? 1.15 : 1) + bonus;
    return this._aswpower;
}

Ship.prototype.airPower = function(jetonly) { return 0; }

Ship.prototype.damageMod = function(isTorp) {
    if (isTorp) {
        if (this.HP/this.maxHP <= .25) return 0;
        if (this.HP/this.maxHP <= .5) return .8;
        return 1;
    }
    if (this.HP/this.maxHP <= .25) return .4;
    if (this.HP/this.maxHP <= .5) return .7;
    return 1;
}
Ship.prototype.weightedAntiAir = function() {
    var aa = this.AA;
    for (var i=0; i<this.equips.length; i++) if (this.equips[i].AA) aa -= this.equips[i].AA; //get base AA
    if (this.side==1) aa = 2*Math.sqrt(aa);
    for (var i=0; i<this.equips.length; i++) {
        var mod = 0;
        switch (this.equips[i].atype) {
            case A_HAGUN:
            case A_HAFD:
            case A_AAFD:
                mod = 4; break;
            case A_AAGUN:
                mod = 6; break;
            case A_AIRRADAR:
                mod = 3; break;
            default:
                continue;
        }
        aa += this.equips[i].AA * mod;
    }
    aa += (this.AAselfImprv)? 2*this.AAselfImprv : 0;
    if (this.fleet.combinedWith) {
        if (this.isescort) aa*=.48;
        else aa*=.72;
    }
    return aa;
}

Ship.prototype.getAACItype = function(atypes) {
    var types = [];
    if (this.side == 1) return types; //enemy can't do AACI?

    var concentrated = false;
    for (var i=0; i<this.equips.length; i++) {
        if (this.equips[i].isconcentrated) { concentrated = true; break; }
    }

    if (this.hasBuiltInFD) {  //Akizuki-class
        if (atypes[A_HAGUN] >= 2 && atypes[A_AIRRADAR]) types.push(1);
        if (atypes[A_HAGUN] && atypes[A_AIRRADAR]) types.push(2);
        if (atypes[A_HAGUN] >= 2) types.push(3);
    }
    if (this.mid == 428 && concentrated && (atypes[A_HAGUN]||atypes[A_HAFD])) {   //428 = Maya Kai Ni
        if (atypes[A_AIRRADAR]) types.push(10);
        types.push(11);
    }
    if (this.mid == 141 && atypes[A_HAGUN] && atypes[A_AAGUN]) { //Isuzu Kai Ni
        if (atypes[A_AIRRADAR]) types.push(14);
        types.push(15);
    }
    if (this.mid == 470 && atypes[A_HAGUN] && atypes[A_AAGUN]) { //Kasumi Kai 2 B
        if (atypes[A_AIRRADAR]) types.push(16);
        types.push(17);
    }
    if (this.mid == 418 && concentrated) types.push(18); //Satsuki Kai Ni
    if (this.mid == 487 && concentrated) { //Kinu Kai Ni
        if (atypes[A_HAGUN]) types.push(19);
        types.push(20);
    }

    var add6 = false;
    if (this.type=='BB'||this.type=='BBV'||this.type=='FBB') {  //is BB
        if (atypes[A_GUN] && atypes[A_TYPE3SHELL] && atypes[A_AAFD]) {
            if (atypes[A_AIRRADAR]) types.push(4);
            add6 = true;
        }
    }
    if (atypes[A_HAFD] >= 2 && atypes[A_AIRRADAR]) types.push(5);
    if (add6) types.push(6);
    if (atypes[A_HAGUN] && atypes[A_AAFD] && atypes[A_AIRRADAR]) types.push(7);
    if (atypes[A_HAFD] && atypes[A_AIRRADAR]) types.push(8);
    if (atypes[A_HAGUN] && atypes[A_AAFD]) types.push(9);
    if (concentrated && atypes[A_AAGUN] >= 2 && atypes[A_AIRRADAR]) types.push(12);
    // if (concentrated && atypes[A_HAFD] && atypes[A_AIRRADAR]) return 13;
    return types;
}

Ship.prototype.moraleMod = function(isTorp) {
    if (isTorp) {
        if (this.morale >= 53) return 1.3;
        if (this.morale >= 33) return 1;
        if (this.morale >= 23) return .7;
        return .35;
    }
    if (this.morale >= 53) return 1.2;
    if (this.morale >= 33) return 1;
    if (this.morale >= 23) return .8;
    return .5;
}

Ship.prototype.moraleModEv = function() {
    if (this.morale >= 53) return .7;
    if (this.morale >= 33) return 1;
    if (this.morale >= 23) return 1.2;
    return 1.4;
}

Ship.prototype.reset = function() {
    this.HP = this.maxHP;
    this.planecount = this.PLANESLOTS.slice();
    this.fuelleft = this.fuelDefault;
    this.ammoleft = this.ammoDefault;
    this.morale = this.moraleDefault;
    if (this.repairsOrig) this.repairs = this.repairsOrig.slice();
    if (this.side==0) this.protection = true;
}
//-----------------


/* any ship that can launch bombers */
function Carrier(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.iscarrier = true;
}
Carrier.prototype = Object.create(Ship.prototype);
Carrier.prototype.airPower = function(jetonly) {
    var ap = 0;
    for (var i=0; i<this.equips.length; i++) {
        if (this.equips[i].isfighter && (!jetonly||this.equips[i].isjet)) {
            ap += Math.floor(((this.equips[i].AA||0) + (this.equips[i].level||0)*.2) * Math.sqrt(this.planecount[i]) + (this.equips[i].APbonus||0));
        }
    }
    // if (this.APbonus) ap += Math.floor(this.APbonus);
    return Math.floor(ap);
}
Carrier.prototype.numBombers = function () {
    var planes = [];
    for (var i=0; i<this.equips.length; i++) {
        if (this.equips[i].isdivebomber || this.equips[i].istorpbomber || this.equips[i].isfighter) {
            if (this.equips[i].b_image) planes.push(this.equips[i].b_image);
            else planes.push((this.fleet.id==0)? 1 : 2);
        }
    }
    return planes;
}
Ship.prototype.airPower = Carrier.prototype.airPower;
Ship.prototype.numBombers = Carrier.prototype.numBombers;
//------------------

function DD(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'DD';
}
DD.prototype = Object.create(Ship.prototype);
DD.prototype.canASW = function() { return true; }

function CL(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CL';
    this.fitclass = 100;
}
CL.prototype = Object.create(Ship.prototype);
CL.prototype.canASW = function() { return true; }

function CLT(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CL';
    this.fitclass = 100;
}
CLT.prototype = Object.create(Ship.prototype);
CLT.prototype.canASW = function() { return true; }
// CLT.prototype.canOpTorp = function() { return (this.HP > 0); }

function CA(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CA';
}
CA.prototype = Object.create(Ship.prototype);
CA.prototype.APweak = true;

function BB(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'BB';
}
BB.prototype = Object.create(Ship.prototype);
BB.prototype.canTorp = function() { return false; }
BB.prototype.APweak = true;

function FBB(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    BB.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'BB';
}
FBB.prototype = Object.create(BB.prototype);


function CAV(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Carrier.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CAV';
    this.planeasw = true;
}
CAV.prototype = Object.create(Carrier.prototype);
CAV.prototype.APweak = true;
CAV.prototype.canASW = function() {
    for (var i=0; i<this.equips.length; i++) { if (this.equips[i].isdivebomber || this.equips[i].istorpbomber) return true; }
    return false;
}

function BBV(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Carrier.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'BBV';
    this.planeasw = true;
}
BBV.prototype = Object.create(Carrier.prototype);
BBV.prototype.APweak = true;
BBV.prototype.canTorp = function() { return false; }
BBV.prototype.canASW = function() {
    for (var i=0; i<this.equips.length; i++) { if (this.equips[i].isdivebomber || this.equips[i].istorpbomber) return true; }
    return false;
}

function BBVT(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    BBV.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'BBV';
}
BBVT.prototype = Object.create(BBV.prototype);
BBVT.prototype.canTorp = function() { return (this.HP/this.maxHP > .5); }

function CV(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Carrier.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CV';

}
CV.prototype = Object.create(Carrier.prototype);
CV.prototype.canTorp = function() { return false; }
CV.prototype.canNB = function() { return (this.nightattack && this.HP/this.maxHP > .25); }
CV.prototype.canAS = function() { return false; }
CV.prototype.APweak = true;
CV.prototype.canShell = function() {
    if (this.HP <= 0) return false;
    for (var i=0; i<this.equips.length; i++) {
        var equip = this.equips[i];
        if ((equip.isdivebomber || equip.istorpbomber) && this.planecount[i] > 0) return true;
    }
    return false;
}
CV.prototype.canStillShell = function () {
    return (this.HP > this.maxHP*.5 && this.canShell());
}
CV.prototype.CVshelltype = true;
CV.prototype.shellPower = function(target) {
    var dp = 0;
    for (var i=0; i<this.equips.length; i++) {
        if(this.equips[i].DIVEBOMB) dp += this.equips[i].DIVEBOMB;
    }
    var bonus = (this.fleet && this.fleet.formation.shellbonus!==undefined)? this.fleet.formation.shellbonus : 5;
    if (target && target.isInstall) return 50 + bonus + 1.5*(this.FP + Math.floor(1.3*dp));
    return 50 + bonus + 1.5*(this.FP + this.TP + Math.floor(1.3*dp));
}

function CVL(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    CV.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CVL';
    this.planeasw = true;
}
CVL.prototype = Object.create(CV.prototype);
CVL.prototype.canASW = function() {
    if (this.HP/this.maxHP <= .5) return false;
    for (var i=0; i<this.equips.length; i++) { if (this.equips[i].isdivebomber || this.equips[i].istorpbomber) return true; }
    return false;
}
CVL.prototype.APweak = false;

function CVB(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    CV.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CV';
}
CVB.prototype = Object.create(CV.prototype);
CVB.prototype.canStillShell = function() {
    return (this.HP > this.maxHP*.25 && this.canShell());
}


function SS(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'SS';
}
SS.prototype = Object.create(Ship.prototype);
SS.prototype.canShell = function() { return false; }
SS.prototype.canOpTorp = function() { return (this.HP > 0 && (this.LVL >= 10 || this.hasMidgetSub)); }

function SSV(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    SS.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'SS';
    this.iscarrier = true;
}
SSV.prototype = Object.create(SS.prototype);
SSV.prototype.airPower = Carrier.prototype.airPower;
SSV.prototype.numBombers = Carrier.prototype.numBombers;

function AV(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Carrier.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'AV';
};
AV.prototype = Object.create(Carrier.prototype);
AV.prototype.canASW = function() {
    for (var i=0; i<this.equips.length; i++) { if (this.equips[i].isdivebomber || this.equips[i].istorpbomber) return true; }
    return false;
}

function AO(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'AO';
};
AO.prototype = Object.create(Ship.prototype);
AO.prototype.canTorp = function() { return false; }
AO.prototype.loadEquips = function(equips,levels,profs,addstats) {
    Ship.prototype.loadEquips.call(this,equips,levels,profs,addstats);
    for (var i=0; i<equips.length; i++) {
        if (equips[i] && (EQDATA[equips[i]].istorpbomber||EQDATA[equips[i]].isdivebomber)) {
            this.iscarrier = true;
            this.planeasw = true;
            this.CVshelltype = true;
            this.shellPower = CV.prototype.shellPower;
            this.canShell = CV.prototype.canShell;
            this.canStillShell = CV.prototype.canStillShell;
            this.numBombers = CV.prototype.numBombers;
            break;
        }
    }
}

function Installation(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    this.isInstall = true;
    BBV.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
};
Installation.prototype = Object.create(BBV.prototype);
//want CVshelltype=true? impossible to know ingame
Installation.prototype.shellPower = CV.prototype.shellPower;
Installation.prototype.canShell = CV.prototype.canShell;
Installation.prototype.canStillShell = CV.prototype.canStillShell;

function AS(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'AS';
};
AS.prototype = Object.create(Ship.prototype);
AS.prototype.canTorp = function() { return false; }

function AR(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'AR';
};
AR.prototype = Object.create(Ship.prototype);
AR.prototype.canTorp = function() { return false; }

function CT(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Ship.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'CT';
    this.fitclass = 100;
};
CT.prototype = Object.create(Ship.prototype);
CT.prototype.canASW = function() { return true; }

function LHA(id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots) {
    Carrier.call(this,id,name,side,LVL,HP,FP,TP,AA,AR,EV,ASW,LOS,LUK,RNG,planeslots);
    this.type = 'LHA';
};
LHA.prototype = Object.create(Carrier.prototype);
LHA.prototype.canTorp = function() { return false; }

var PLANEDEFAULT = new Ship(0,'PLANEDEFAULT',0, 1,1, 0,0,0,0, 0, 0,0,3, 1);
PLANEDEFAULT.CVshelltype = true;

function Equip(equipid,level,rank) {
    for(var key in EQDATA[equipid]) this[key] = EQDATA[equipid][key];
    this.mid = equipid;
    if (level) this.setImprovement(level);
    if (rank) this.setProficiency(rank);

    var eq = EQDATA[equipid];
    if (EQTDATA[eq.type].isfighter && eq.AA) this.isfighter = true;
    if (EQTDATA[eq.type].isdivebomber) this.isdivebomber = true;
    if (EQTDATA[eq.type].istorpbomber) this.istorpbomber = true;
}
Equip.prototype.setImprovement = function(level) {
    this.level = level;
    var improve = (this.improve)? this.improve : EQTDATA[this.type].improve;
    if (!improve) return;
    for (var key in improve) {
        this[key+'Imprv'] = improve[key]*Math.sqrt(level);
    }
}
Equip.prototype.setProficiency = function(rank) {
    if (!EQTDATA[this.type].isPlane) return;
    this.rank = rank;
    this.exp = [0,10,25,40,55,70,80,120][rank];
    this.APbonus = Math.sqrt(this.exp*.1);
    switch (this.type) {
        case FIGHTER:
        case SEAPLANEFIGHTER:
        case INTERCEPTOR:
            this.APbonus += [0,0,2,5,9,14,14,22][rank]; break;
        case SEAPLANEBOMBER:
            this.APbonus += [0,0,1,1,1,3,3,6][rank]; break;
        case TORPBOMBER:
        case DIVEBOMBER:
        case JETBOMBER:
            break;
        default:
            this.APbonus = 0;
            break;
    }
    if (this.APbonus) this.isfighter = true;
}

export {Fleet, Ship, Equip};