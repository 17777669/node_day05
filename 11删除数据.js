//1.导入模块
const mysql = require("mysql");
//2.创建db
const db = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "test"
    })
    //3.创建sql语句
const sql = "delete from user where id=?"
    //4.执行sql语句
    //如果 SQL 语句中有多个占位符，则需要使用数组，只有一个则可以省略数组
db.query(sql, 7, (err, results) => {
    if (err)
        return console.log(err);
    if (results.affectedRows == 1) {
        console.log("删除数据成功")
    }
})