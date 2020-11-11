//1.导入模块
const mysql = require("mysql");
//2.创建db
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "test"
});
//3.创建sql语句:
//3.1查询数据吧username，password显示出来
const sql = "select username,password from user";
//4.执行sql语句
db.query(sql, (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
})