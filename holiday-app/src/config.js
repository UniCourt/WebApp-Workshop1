const { Pool, Client } = require("pg");
const credentials = {
  host: process.env["POSTGRES_HOST"],
  port: parseInt(process.env["POSTGRES_PORT"]),
  database: process.env["POSTGRES_DB"],
  user: process.env["POSTGRES_USER"],
  password: process.env["POSTGRES_PASSWORD"]
};

const pool = new Pool(credentials);

const query = async (query) => {
    return pool.query(query);
};

module.exports = { query };