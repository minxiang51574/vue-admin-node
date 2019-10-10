/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 11:39:48
 * @LastEditTime: 2019-09-25 17:28:08
 * @LastEditors: Please set LastEditors
 */
const dbUtils = require('./../utils/db-util')

const user = {
    /**
     * 查询message表所有数据
     */
  async getList(params){

    let _sql = `
    select * from message`
    let result = await dbUtils.query(_sql)
    return result
  },

  async addList(params){
    let _sql = `
    INSERT INTO message (name, sex, department,status,address,age) 
    VALUES 
    (${params.name},${params.sex},${params.department},${params.status},${params.address},${params.age});`
    let result = await dbUtils.query(_sql)
    return result
  },

  async removeList(params){
    let ID = params.id
    let _sql = `
    DELETE FROM message WHERE id = ${ID}
   `
    let result = await dbUtils.query(_sql)
    return result
  },

  async editList(params){
    let _sql = `
    UPDATE message SET name = ${params.name} ,sex = ${params.sex} ,department = ${params.department} ,status = ${params.status} ,address = ${params.address} ,
    age = ${params.age} WHERE id = ${params.id}
     `
    let result = await dbUtils.query(_sql)
    return result
  },

  async totalNum(params){
    let _sql = `
    select * from number`
    let result = await dbUtils.query(_sql)
    return result
  },
  
  async keepSesion(){
    let _sql = `
    select * from sision`
    let result = await dbUtils.query(_sql)
    return result
  }
}

module.exports = user
