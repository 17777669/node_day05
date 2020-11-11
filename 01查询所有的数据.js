//引入刚刚安装的mysql模块
const mysql = require("mysql");
//链接数据库
const db = mysql.createPool({
    // host: '192.168.85.138',
    host: '127.0.0.1',
    user: 'root',
    // password: 'admin123',
    password: 'root',
    // database: "my_db_01",
    database: 'test',
});

//创建sql语句
const sql = "select username,password from user";
// const sql = "insert into users (username,password) values('赵六','123456')";
//执行查询语句
db.query(sql, (err, rules) => {
    if (err)
        return console.log(err.message);
    console.log(rules);
})