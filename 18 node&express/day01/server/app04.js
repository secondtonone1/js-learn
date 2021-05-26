//localhost:3000/index?name=zhangsan&age=20

//引入系统模块
const http = require('http');
const url = require('url');
//创建web服务器
const app = http.createServer();
//当客户端发送请求的时候
app.on('request', (req, res) => {
    //响应
    //console.log(req.method);
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8',
    })
    console.log(req.url);
    console.log(req.headers['accept'])
    console.log()
    if (req.url == '/index' || req.url == '/') {
        res.end('<h2>welcome to homepage 欢迎来到首页</h2>')
    } else if (req.url == '/list') {
        res.end('welcome to listpage')
    } else {
        res.end('not found')
    }
    /*
    // res.end('<h1>hi, user</h1>');
    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')
    }*/
})

//监听 3000端口

app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');