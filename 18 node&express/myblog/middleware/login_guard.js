const guard = (req, res, next) => {
    //判断用户访问的是否为登录界面
    //判断用户的登录状态
    //如果用户是登录的，将请求放行
    //如果用户不是登录的， 将请求重定向到登录页面

    //是登录界面，则将请求路由下去
    if (req.url == '/login') {
        next()
        return
    }
    //会话存在,说明登陆了
    //用户是登录状态，将请求放行
    if (req.session.username) {
        next()
        return
    }

    res.redirect('/admin/login')
}

module.exports = guard