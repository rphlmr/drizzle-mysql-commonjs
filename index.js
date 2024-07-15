const db = require("./config.js");
const { users } = require("./schema.js");

async function main() {
  await db.insert(users).values({
    username: "user1",
    password: "password1",
  });

  console.log(await db.query.users.findMany());
}

main().then(() => {
  process.exit(0);
});
