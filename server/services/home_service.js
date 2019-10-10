/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 11:38:09
 * @LastEditTime: 2019-09-17 10:28:57
 * @LastEditors: Please set LastEditors
 */
const home_model = require('./../models/home_model')

const user = {

   async getList(params){
    let listData = await home_model.getList(params) || {}
    return listData
   },

   async addList(params){
    let msg = await home_model.addList(params) || {}
    return msg
   },

   async removeList(params){
        let msg = await home_model.removeList(params) || {}
        return msg
   },

   async editList(params){
    let msg = await home_model.editList(params) || {}
    return msg
   },

   async totalNum(){
    let msg = await home_model.totalNum() || {}
    return msg
   },
   
   async keepSesion(){
    let msg = await home_model.keepSesion() || {}
    return msg
  }

}
 
module.exports = user
