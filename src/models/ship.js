/**
 * Created by J.K.SAGE on 2017/1/29.
 */
import Sequelize from 'sequelize';
import {sequelize} from '../mysql/mysql.js';

export let MemberShipModel = sequelize.define('memberShip', {
    id: {
        type: Sequelize.BIGINT,
        field: 'IDX',
        primaryKey: true
    },
    mid: {
        type: Sequelize.BIGINT,
        field: 'member_id'
    },
    counter: {
        type: Sequelize.INTEGER,
        field: 'ID'
    },
    SHIP_ID: {
        type: Sequelize.INTEGER,
        field: 'SHIP_ID'
    },
    LVL: {
        type: Sequelize.INTEGER,
        field: 'LV'
    },
    HP: {
        type: Sequelize.INTEGER,
        field: 'NOWHP'
    },
    FP: {
        type: Sequelize.INTEGER,
        field: 'RAISOU'
    },
    AA: {
        type: Sequelize.INTEGER,
        field: 'TAIKU'
    },
    AR: {
        type: Sequelize.INTEGER,
        field: 'SOUKOU'
    },
    EV: {
        type: Sequelize.INTEGER,
        field: 'KAIHI'
    },
    ASW: {
        type: Sequelize.INTEGER,
        field: 'TAISEN'
    },
    LOS: {
        type: Sequelize.INTEGER,
        field: 'SAKUTEKI'
    },
    LUK: {
        type: Sequelize.INTEGER,
        field: 'LUCKY'
    },
    RNG: {
        type: Sequelize.INTEGER,
        field: 'LENG'
    },
    maxHP: {
        type: Sequelize.INTEGER,
        field: 'MAXHP'
    },
    fuelleft: {
        type: Sequelize.INTEGER,
        field: 'FUEL'
    },
    ammoleft: {
        type: Sequelize.INTEGER,
        field: 'BULL'
    },
    morale: {
        type: Sequelize.INTEGER,
        field: 'COND'
    }
}, {
    tableName: 'v2_member_ship',
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    version: false
});