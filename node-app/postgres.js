const { Pool, Client } = require("pg");
const credentials = {
  user: "admin_user",
  host: "postgres",
  database: "movie_db",
  password: "admin_pass",
  port: 5432,
};

const pool = new Pool(credentials);

const query = async (query) => {
    return pool.query(query);
};

module.exports = { query };