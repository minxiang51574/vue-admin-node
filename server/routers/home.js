/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 18:55:44
 * @LastEditTime: 2019-09-25 17:16:03
 * @LastEditors: Please set LastEditors
 */
const router = require('koa-router')()
const home_controller = require('../controllers/home_controller')

const routers = router
  .get("/getList",home_controller.getList)
  .post("/addList",home_controller.addList)
  .delete("/removeList",home_controller.removeList)
  .put("/editList",home_controller.editList)
  .get("/totalNum",home_controller.totalNum)
  .get("/keepSesion",home_controller.keepSesion)
 
 

module.exports = routers

