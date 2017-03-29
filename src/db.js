let mongo = require('mongodb');
let Server = mongo.Server;
let Db = mongo.Db;
let ReplSet = mongo.ReplSet;
let MongoClient = mongo.MongoClient;

let replSet;

if (process.env['NODE_ENV'] === 'production') {
    replSet = new ReplSet([
        new Server('mongodb')
    ]);
} else {
    replSet = new ReplSet([
        new Server('192.168.1.100', 40000),
        new Server('192.168.1.100', 40001),
        new Server('192.168.1.100', 40002),
    ]);
}

// Connection URL
var url = 'mongodb://192.168.1.100:40000,192.168.1.100:40001/kancolle?replicaSet=kancolle';

// Use connect method to connect to the Server
