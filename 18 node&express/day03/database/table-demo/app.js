//搭建网站服务器，实现客户端与服务器的通信
//连接数据库，创建用户集合，向集合中插入文档
//当用户访问/list时，将所有用户信息查询出来

//实现路由功能
//呈现用户列表页面

//将用户信息和表格HTML进行拼接并将结果返回响应客户端
//当用户访问/add时，呈现表单页面，并实现添加用户信息功能 
//当用户访问/modify时，呈现修改页面,并实现修改用户信息的功能
//当用户访问/delete时,实现用户删除功能

const http = require('http')
const mongoose = require('mongoose')
const url = require('url')
const querystring = require('querystring')

require('./model/index')
const User = require('./model/user.js')

//创建服务器
const app = http.createServer()

//为服务器对象添加请求事件
app.on('request', async(req, res) => {
        //请求方式
        const method = req.method
        const { pathname, query } = url.parse(req.url, true)
        if (method == 'GET') {
            // 呈现用户列表页面
            if (pathname == '/list') {
                //查询用户信息
                let users = await User.find()
                    // html 字符串
                    // html字符串
                let list = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
            `;

                //对数据进行循环操作
                users.forEach(item => {
                        list += `
                        <tr>
						<td>${item.name}</td>
						<td>${item.age}</td>
						<td>
                    `

                        item.hobbies.forEach(item => {
                            list += `<span>${item}</span>`
                        })

                        list += `</td>
                    <td>${item.email}</td>
                    <td>
                        <a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                        <a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
                    </td>
                </tr>`;
                    }

                )
                list += `
                    </table>
                </div>
            </body>
        </html>
        `;
                // console.log(users)
                res.end(list)
                return
            }

            if (pathname == '/add') {

                let add = `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>用户列表</title>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
				</head>
				<body>
					<div class="container">
						<h3>添加用户</h3>
						<form method="post" action="/add">
						  <div class="form-group">
						    <label>用户名</label>
						    <input name="name" type="text" class="form-control" placeholder="请填写用户名">
						  </div>
						  <div class="form-group">
						    <label>密码</label>
						    <input name="password" type="password" class="form-control" placeholder="请输入密码">
						  </div>
						  <div class="form-group">
						    <label>年龄</label>
						    <input name="age" type="text" class="form-control" placeholder="请填写年龄">
						  </div>
						  <div class="form-group">
						    <label>邮箱</label>
						    <input name="email" type="email" class="form-control" placeholder="请填写邮箱">
						  </div>
						  <div class="form-group">
						    <label>请选择爱好</label>
						    <div>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="足球" name="hobbies"> 足球
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="篮球" name="hobbies"> 篮球
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
						    	</label>
						    	<label class="checkbox-inline">
						    	  <input type="checkbox" value="烫头" name="hobbies"> 烫头
						    	</label>
						    </div>
						  </div>
						  <button type="submit" class="btn btn-primary">添加用户</button>
						</form>
					</div>
				</body>
				</html>
			`;
                res.end(add)
                return
            }

            if (pathname == '/modify') {
                //console.log("query.id is ", query.id)
                let user = await User.findOne({ _id: query.id })
                let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆']
                    // console.log(user)
                let modify = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>用户列表</title>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                    </head>
                    <body>
                        <div class="container">
                            <h3>修改用户</h3>
                            <form method="post" action="/modify?id=${user._id}">
                              <div class="form-group">
                                <label>用户名</label>
                                <input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                              </div>
                              <div class="form-group">
                                <label>密码</label>
                                <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                              </div>
                              <div class="form-group">
                                <label>年龄</label>
                                <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写年龄">
                              </div>
                              <div class="form-group">
                                <label>邮箱</label>
                                <input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
                              </div>
                              <div class="form-group">
                                <label>请选择爱好</label>
                                <div>
                `;

                hobbies.forEach(item => {
                    //判断当前循环项是否在用户数组中
                    let isHobby = user.hobbies.includes(item)
                    if (isHobby) {
                        modify += `
                        <label class="">
                            <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                        </label>
                        `
                    } else {
                        modify += `
                        <label class="">
                            <input type="checkbox" value="${item}" name="hobbies" > ${item}
                        </label>
                        `
                    }

                })
                modify += `</div>
                </div>
                <button type="submit" class="btn btn-primary">修改用户</button>
              </form>
          </div>
      </body>
      </html>`
                res.end(modify)
                return
            }

            if (pathname == '/remove') {
                //res.end(query.id)
                await User.findOneAndDelete({ _id: query.id })
                res.writeHead(301, {
                    Location: '/list'
                })

                res.end()
                return
            }

            return
        }
        if (method == 'POST') {
            //用户添加功能
            if (pathname == '/add') {
                //接受用户提交的信息
                let formData = ''
                    //接受post参数
                req.on('data', (param) => {
                        formData += param
                    })
                    //post参数接受完毕
                req.on('end', async() => {
                    let user = querystring.parse(formData)
                        // console.log(user)
                        // 将用户提交的信息添加到数据库中
                    await User.create(user)
                        //301 代表重定向
                        //Location 就是要跳转的地址
                    res.writeHead(301, {
                        Location: '/list'
                    })
                    res.end()
                })

                return
            }

            //用户修改功能
            if (pathname == '/modify') {
                //接受用户修改信息
                let formData = ''
                    //接受post参数
                req.on('data', param => {
                    formData += param
                })

                //post参数接受完毕
                req.on('end', async() => {
                    let user = querystring.parse(formData)
                    console.log(user)
                        //将用户提交得信息添加到数据库中
                    await User.updateOne({ _id: query.id }, user)
                        //301代表重定向
                        //location代表跳转地址
                    res.writeHead(301, {
                        Location: '/list'
                    });

                    res.end()
                })
                return
            }
        }

    })
    //监听端口
app.listen(3000)