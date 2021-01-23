function db(sql, callback) {
    const mysql = require("mysql");
    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "sy123",
    });
    conn.connect();
    conn.query(sql, callback);
    conn.end();
}
//导出内容
module.exports = db;
