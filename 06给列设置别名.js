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
//使用as可以给指定的列设置别名
const sql = `select username as '用户名',password as '密码' from user`;
//4.执行sql语句
db.query(sql, (err, results) => {
    //如果错误存在的话就返回一个错误信息
    if (err) {
        return console.log(err.message)
    }
    console.log(results);
})