export default {
  schema: "schema.js",
  out: "drizzle",
  driver: "mysql",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo",
  },
  verbose: true,
};
