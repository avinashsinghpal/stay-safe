const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "stay-safe",
  password: "Gnidlew3#3",
  port: 5432,
});

module.exports = pool;
