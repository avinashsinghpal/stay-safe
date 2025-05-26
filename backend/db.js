require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host:  "localhost",
  database:"your_database_name",
  password: "your_password_here", // Replace with your actual password
  port:  5432
});

module.exports = pool;
// deployed backend was not working, so using local backend