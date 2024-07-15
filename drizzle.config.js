export default {
  schema: "schema.js",
  out: "drizzle",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "demo",
  },
  verbose: true,
};
