//1.导入模块
const mysql = require("mysql");
//2.创建db
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "test",
});
//3.设置sql语句
const sql = "UPDATE user SET username=?,password=? WHERE id=?";
//4.设置数据
const data = {
        id: 2,
        username: "XXX",
        password: "222"
    }
    //5.执行语句
db.query(sql, [data.username, data.password, data.id], (err, result) => {
    if (err)
        return console.log(err.message)
    if (result.affectedRows == 1) {
        console.log("数据修改成功")
    }
})