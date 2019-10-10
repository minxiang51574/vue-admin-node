/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 17:31:01
 * @LastEditTime: 2019-09-25 17:28:57
 * @LastEditors: Please set LastEditors
 */
const home_service = require('../services/home_service')
const getList = async(ctx) => {
    let params = ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let ListInfo = await home_service.getList(params)
     if( ListInfo ){
        result.data = ListInfo
        result.success = true
     }
     ctx.body = result
}
const addList = async(ctx) => {
    let params =  ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let ListInfo = await home_service.addList(params)
     if( ListInfo.affectedRows > 0){
        result.data = {
            msg:"添加成功"
        }
        result.success = true
     }
     ctx.body = result
}
const removeList = async(ctx) =>{
    const params = ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let ListInfo = await home_service.removeList(params)
     if( ListInfo.affectedRows > 0){
        result.data = {
            msg:"删除成功"
        }
        result.success = true
     }
     ctx.body = result
}

const editList = async(ctx) =>{
    let params =  ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let ListInfo = await home_service.editList(params)
     if( ListInfo.affectedRows > 0){
        result.data = {
            msg:"编辑成功"
        }
        result.success = true
     }
     ctx.body = result
}
const totalNum = async(ctx) => {
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let ListInfo = await home_service.totalNum()
     if( ListInfo){
        result.success = true
        result.data = ListInfo[0]
     }
     ctx.body = result
}
const keepSesion = async(ctx) =>{
    let result = {
        success: false,
        message: '',
        data: null,
      }
     let sesion = await home_service.keepSesion()
     console.log(sesion)
     if(sesion){
        result.success = true
        result.data = sesion[0]
     }
     ctx.body = result
}
module.exports  = {
    getList,
    addList,
    removeList,
    editList,
    totalNum,
    keepSesion
}