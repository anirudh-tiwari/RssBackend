const mysql = require("mysql");
const util = require("util");

function getConnection() {
    const conn = mysql.createConnection({
        host: "localhost",
        user: "ani",
        password: "suman1979",
        database: "rss",
        // port: '8000'
    });

    return util.promisify(conn.query).bind(conn)
}

module.exports = {
    getConnection
}