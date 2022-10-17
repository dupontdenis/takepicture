const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();


module.exports = {
    database
}