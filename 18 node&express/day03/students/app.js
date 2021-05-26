//引入http模块
const http = require('http')
const path = require('path')
require('./model/connect')
router = require('./router/index')

//引入静态资源访问模块
const serveStatic = require('serve-static')
    //引入处理日期的第三方模块
const dateformat = require('dateformat')





// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'))
    //引入模板引擎
const template = require('art-template')
    //配置模板的根目录
template.defaults.root = path.join(__dirname, 'views')
template.defaults.imports.dateformat = dateformat




//创建网站服务器
const app = http.createServer()
    // 当客户端访问服务器端的时候
app.on('request', (req, res) => {
    router(req, res, () => {})
    serve(req, res, () => {})
})
app.listen(8080)
console.log('服务器启动成功')