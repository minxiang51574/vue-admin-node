/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:22:07
 * @LastEditTime: 2019-09-23 14:23:24
 * @LastEditors: Please set LastEditors
 */
const login_model = require('./../models/login_model')

const user = {
    async login(params){
     let loginData = await login_model.login(params) || {}
     return loginData
    },

 
 }
  
 module.exports = user