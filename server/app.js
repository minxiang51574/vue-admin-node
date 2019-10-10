/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:00:26
 * @LastEditTime: 2019-09-16 19:33:38
 * @LastEditors: Please set LastEditors
 */
const Koa = require("koa")
const app = new Koa()

const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')

app.use(cors());


// 解析请求体
app.use(bodyParser())

// 引入路由分发
const routers = require('./routers/index')
app.use(routers.routes()).use(routers.allowedMethods())

// 启动程序，监听端口
app.listen(3000,()=>{
    console.log("the server is start at port 3000")
})