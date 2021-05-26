//导入模板引擎模块

const template = require('art-template')
const path = require('path')
    //template 是用来拼接字符串得
    //1 模板路径  绝对路径
    //2 要在模板中显示数据， 对象类型
    //返回拼接好得字符串
const views = path.join(__dirname, 'views', '03.art')

const html = template(views, {
    users: [{
            name: '张三',
            age: 20,
            sex: '男'
        },
        {
            name: '李四',
            age: 30,
            sex: '男'
        },
        {
            name: '玛丽',
            age: 15,
            sex: '女'
        }
    ]
})

console.log(html)