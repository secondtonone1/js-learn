//引入express框架
const express = require('express')
    //创建express对象
const app = express()

app.use(fn({ a: 1 }))

function fn(obj) {
    return function(req, res, next) {
        if (obj.a == 1) {
            console.log(req.url)
        } else {
            console.log(req.method)
        }
        next()
    }
}

app.get('/', async(req, res, next) => {
    try {
        //接收get请求参数
        res.send('ok')
    } catch (ex) {
        next(ex)
    }
})

//错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})


app.listen(3000)