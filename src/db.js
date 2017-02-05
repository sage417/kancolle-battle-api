let mongo = require('mongoskin');
let Server = mongo.Server;
let Db = mongo.Db;
let ReplSet = mongo.ReplSet;

let replSet = new ReplSet([
    new Server('192.168.1.100', 40000),
    new Server('192.168.1.100', 40001),
    new Server('192.168.1.100', 40002),
]);

export let db = new Db('kancolle', replSet, {w: 0, native_parser: (process.env['TEST_NATIVE'] != null)});
