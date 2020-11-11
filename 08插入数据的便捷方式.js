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
const sql = "INSERT INTO user SET ?"
    //4.创建数据
const data = {
        username: "cccd",
        password: "3498"
    }
    //5.执行sql语句
db.query(sql, data, (err, result) => {
    if (err)
        return console.log(err.message);
    //如果是插入数据，返回的result是一个对象，d该对象中有一个属性，affectedRows代表着受影响的行数
    // console.log(result);
    //可以根据affectedRows来判断是否正确插入数据
    if (result.affectedRows === 1) {
        console.log("数据插入成功")
    }
})