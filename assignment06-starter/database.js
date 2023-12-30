const { Pool } = require("pg");

const db = new Pool({
    user: "postgres",
    password: "postgres",
    database: "budgetapp",
    port: "5432",
    host: "localhost",
});

module.exports = db;
