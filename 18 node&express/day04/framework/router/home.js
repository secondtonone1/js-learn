//引入express框架
const express = require('express')

//创建路由对象
const home = express.Router()

//在home路由下继续创建路由
home.get('/index', (req, res) => {
    res.send('欢迎来到博客展示页面')
})

module.exports = home