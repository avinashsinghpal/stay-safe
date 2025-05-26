require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host:  "containers-us-west-84.railway.app",
  database:"railway",
  password: "RIqVpHUHFpuNDVReUcexAMiywHaQQcAW",
  port:  5432
});

module.exports = pool;