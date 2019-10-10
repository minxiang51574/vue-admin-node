/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-21 15:34:54
 * @LastEditTime: 2019-09-21 15:34:54
 * @LastEditors: your name
 */
const router = require("koa-router")()
const login_controller = require('../controllers/login_controller')

const routers = router
 .post("/login",login_controller.login)

 module.exports = routers