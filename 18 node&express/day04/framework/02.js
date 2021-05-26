//引入 express 框架
const express = require('express')
    //创建网站服务器
const app = express()
    //监听端口

app.get('/request', (req, res, next) => {
    req.name = '张三'
    next()
})

app.get('/request', (req, res) => {
        7
        res.send(req.name)
    })
    //监听端口
app.listen(3000)
console.log('网站服务器启动成功')