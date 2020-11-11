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
//查询id为1的值
// const sql = `select * from user where id=1`;
//查询id大于2的值
// const sql = `select * from user where id>2`;
//查询id不为2的值
// const sql = `select * from user where id<>2`;
//查询id大于3并且username等于aa的值
// const sql = `select * from user where id>3 and username='aa' `;
//查询id<3或者username为xxx的值，当前面的条件符合的话后面就不会执行
// const sql = `select * from user where id<3 or username='xxx' `;
const sql = `select * from user where id>7 or username='zs' `;



//4.执行sql语句
db.query(sql, (err, result) => {
    if (err)
        return console.log(err.message)
    console.log(result);
})