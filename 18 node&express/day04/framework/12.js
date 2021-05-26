//引入express框架
const express = require('express')
    //获取body-parser
const bodyParser = require('body-parser')
    //引入fs
const fs = require('fs')
    //引入promisify
const promisify = require('util').promisify

//包装fsreader为promisify对象
const readFile = promisify(fs.readFile)
const ejs = require('ejs')
    //创建网站服务器
const app = express()
    //拦截所有请求
    //extended:false  方法内部使用querystring解析处理请求参数的格式
    //extended:true   方法内部使用qs模块解析处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', '.')
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

app.get('/', async(req, res, next) => {
    try {
        //接收get请求参数
        res.render('post')
    } catch (ex) {
        next(ex)
    }
})

//错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.post('/add', (req, res) => {
    //接收post请求参数
    res.send(req.body)
})

app.listen(3000)