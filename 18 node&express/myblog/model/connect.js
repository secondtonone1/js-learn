//引入mongoose第三方模块
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

//连接数据库
mongoose.connect('mongodb://admin:123456@81.68.86.146:27017/blog?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))