const { int, varchar, mysqlTable } = require("drizzle-orm/mysql-core");

const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 100 }),
  password: varchar("password", { length: 100 }),
});

module.exports = {
  users,
};
