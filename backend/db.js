const { Pool } = require("pg");

const pool = new Pool({
  user: "your_username", // Replace with your PostgreSQL username
  host: "localhost",
  database: "your_database_name", // Replace with your PostgreSQL database name
  password: "your_password", // Replace with your PostgreSQL password
  port: 5432,
});

module.exports = pool;
