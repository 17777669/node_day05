//1.导入数据库模块
const mysql = require("mysql");
//2.创建db
const db = mysql.createPool({
    //端口号
    host: "127.0.0.1",
    //数据库用户名
    user: "root",
    // 密码
    password: "root",
    //数据库名称
    database: "test",
});
//3.创建执行语句
let sql = "insert into user(username,password) values(?,?)";
//创建数据
let data = {
    username: "aa",
    password: "123456"
}

//5.执行sql语句,如果执行的是插入语句，那么results返回的是一个对象，如果是查询语句，返回的是一个数组
db.query(sql, [data.username, data.password], (err, result) => {
    if (err)
        return console.log(res.message)

    //如果是执行插入语句，返回一个对象，可以使用该对象的affectedRows（受影响的行数）来判断是否成功
    if (result.affectedRows === 1) {
        console.log("数据插入成功")
    }
})