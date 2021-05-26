const home = require("./router/home")
const admin = require("./router/admin")
const express = require("express")

//创建网站服务器
const app = express()

//将路由和请求路径匹配
app.use('/home', home)
app.use('/admin', admin)

//app监听端口
app.listen(3000)
    //网站服务器启动成功
console.log('网站服务器启动成功')