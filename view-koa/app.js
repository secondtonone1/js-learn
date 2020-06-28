const app = new Koa();

async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
}

async (ctx, next) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === 'admin@example.com' && password === '123456') {
        // 登录成功:
        ctx.render('signin-ok.html', {
            title: 'Sign In OK',
            name: 'Mr Node'
        });
    } else {
        // 登录失败:
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed'
        });
    }
}

let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));
const isProduction = process.env.NODE_ENV === 'production';

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}