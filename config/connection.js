import mysql from 'mysql';

const myHost = process.env.DB_HOST;
const myUser = process.env.DB_USER;
const myPassword = process.env.DB_PASSWORD;
const myDatabase = process.env.DB_DATABASE;

const db = mysql.createConnection({
  host: myHost,
  user: myUser,
  password: myPassword,
  database: myDatabase,
});

export default db;
