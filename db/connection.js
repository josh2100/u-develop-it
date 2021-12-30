const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1", // others use 'localhost'
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "mysql00",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
