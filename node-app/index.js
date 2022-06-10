const { Pool, Client } = require("pg");

console.log("##### Hello World ########")

function logEvery2Seconds(i) {
  setTimeout(() => {
      // console.log('Infinite Loop Test n:', i);
      logEvery2Seconds(++i);
  }, 20000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
  //console.log('Infinite Loop Test interval n :', i++);
}, 20000)


const credentials = {
  user: "admin_user",
  host: "postgres",
  database: "movie_db",
  password: "admin_pass",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();
  return now;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Time with client: " + clientResult.rows[0]["now"]);
})();