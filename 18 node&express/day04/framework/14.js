//引入express框架
const express = require('express')
const bodyParser = require('body-parser')
    //创建express对象
const app = express()

app.get('/index/:id/:name/:age', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(3000)