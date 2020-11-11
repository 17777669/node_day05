//1.导入模块
const mysql = require("mysql");
//2.创建db
const db = mysql.createPool({
    host: '127.0.0.1',
    user: "root",
    password: "root",
    database: "test"
});
//3.创建sql语句
//order by是表示根据什么来排序，asc是默认的升序，desc是表示默认的降序
// const sql = `select * from user order by id asc`;
//根据id进行升序，如果id相同的话就根据username来进行降序
const sql = `select * from user order by password asc,username desc`;
//4.执行sql语句
db.query(sql, (err, results) => {
    //如果错误存在的话就返回一个错误信息
    if (err) {
        return console.log(err.message)
    }
    console.log(results);
})