const mysql = require("mysql2");
const { drizzle } = require("drizzle-orm/mysql2");
const schema = require("./schema.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "demo",
  charset: "utf8",
});

module.exports = drizzle(connection, {
  schema,
  mode: "default",
});
