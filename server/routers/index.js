/*
 * @Description: 路由集合
 * @Author: your name
 * @Date: 2019-08-29 17:10:24
 * @LastEditTime: 2019-09-23 14:25:25
 * @LastEditors: Please set LastEditors
 */
const router = require('koa-router')()

const home = require('./home')
const login = require('./login')

router.use('/home', home.routes(), home.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())


module.exports = router