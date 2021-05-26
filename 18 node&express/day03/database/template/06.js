//导入模板引擎模块

const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')
    //template 是用来拼接字符串得
    //1 模板路径  绝对路径
    //2 要在模板中显示数据， 对象类型
    //返回拼接好得字符串
    //const views = path.join(__dirname, 'views', '06.art')
    //设置模板根目录
template.defaults.root = path.join(__dirname, 'views')
    //配置模板的默认后缀
template.defaults.extname = '.html'

//导入模板变量
template.defaults.imports.dateFormat = dateFormat;

const html = template('06.art', {
    time: new Date()
})

console.log(html)

const html2 = template('07', {
    time: new Date()
})

console.log(html2)