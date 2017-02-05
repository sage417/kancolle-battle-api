/**
 * Created by J.K.SAGE on 2017/1/29.
 */
import Sequelize from 'sequelize';
import {sequelize} from '../mysql/mysql.js';

export let FleetModel = sequelize.define('fleet', {
    mid: {
        type: Sequelize.BIGINT,
        field: 'member_id'
    },
    counter: {
        type: Sequelize.INTEGER,
        field: 'ID'
    },
    SHIP: {
        type: Sequelize.INTEGER,
        field: 'SHIP'
    }
}, {
    tableName: 'v_member_deckport',
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    version: false
});