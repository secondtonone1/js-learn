//引入express框架
const express = require('express')
    //创建网站服务器
const app = express()
    //localhost:3000/index?name=zhangsan&age=20&sex=男
app.get('/index', (req, res) => {
    //获取请求参数
    res.send(req.query)
})

app.listen(3000)