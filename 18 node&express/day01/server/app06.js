//localhost:3000/index?name=zhangsan&age=20

//引入系统模块
const http = require('http');
const url = require('url');
const querystring = require('querystring')
    //创建web服务器
const app = http.createServer();
//当客户端发送请求的时候
app.on('request', (req, res) => {
    //post参数是通过事件的方式接受的
    //data  当请求参数传递的时候触发data事件
    //end 当参数传递完成的时候触发end事件

    let { pathname } = url.parse(req.url, true)

    if (req.method !== 'POST') {
        console.log('req method is not POST')
        return
    }


    if (pathname != '/' && pathname != '/index') {
        console.log('url is %s, skip deal', pathname)
            // console.log(url.parse(req.url, true))
        res.end("ok!")
        return
    }


    let postParams = ''
    req.on('data', params => {
        postParams += params
    })

    req.on('end', () => {
        console.log(querystring.parse(postParams))
        console.log(postParams)
    })

    res.end("ok!")
})

//监听 3000端口

app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');