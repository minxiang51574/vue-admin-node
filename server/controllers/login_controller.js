/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-21 15:42:43
 * @LastEditTime: 2019-09-23 15:31:34
 * @LastEditors: Please set LastEditors
 */
const login_service = require('../services/login_service')
const login = async(ctx) => {
    let params = ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let LoginInfo = await login_service.login(params)
     if(LoginInfo.length){
        result.data = LoginInfo[0]
        result.success = true
     }else{
        result.message = "请输入正确的账号密码"
     }
    
     ctx.body = result
}
module.exports  = {
    login
   
}