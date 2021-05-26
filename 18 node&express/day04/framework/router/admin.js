//引入express框架
const express = require('express')
    //创建路由对象
const admin = express.Router()
    //在home路由下继续创建路由
admin.get('/index', (req, res) => {
    res.send('欢迎来到博客首页页面')
})

module.exports = admin