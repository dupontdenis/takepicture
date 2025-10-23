const Datastore = require("@seald-io/nedb");

const database = new Datastore("database.db");
database.loadDatabase();

module.exports = {
  database,
};
