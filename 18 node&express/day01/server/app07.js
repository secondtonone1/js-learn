//1 引入系统模块http
//2 创建网站服务器
//3 为网站服务器对象添加请求事件
//4 实现路由功能
// 1 获取客户端的请求方式
// 2 获取客户端的请求地址

//localhost:3000/index?name=zhangsan&age=20

//引入系统模块
const http = require('http');
const url = require('url');
const queryString = require('querystring')
    //创建web服务器
const app = http.createServer();
//当客户端发送请求的时候
app.on('request', (req, res) => {
    //响应
    //console.log(req.method);
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8',
        'key': 'zack'
    })

    //获取请求方式
    const method = req.method.toLowerCase()

    // 获取请求地址
    let { pathname } = url.parse(req.url, true)

    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到首页')
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页')
        } else {
            res.end('您访问的 页面不存在')
        }
    } else if (method == 'post') {
        let postParams = ''
        req.on('data', params => {
            postParams += params
        })

        req.on('end', () => {
            let postParam = queryString.parse(postParams)
            let endStr = "你好，我是" + postParam.username
            res.end(endStr)
        })
    } else {
        res.end('您访问的方式不正确')
    }
})

//监听 3000端口

app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');