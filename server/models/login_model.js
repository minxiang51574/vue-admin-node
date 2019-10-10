/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:23:29
 * @LastEditTime: 2019-09-23 15:23:01
 * @LastEditors: Please set LastEditors
 */
const dbUtils = require('./../utils/db-util')

const user = {
    /**
     * 查询message表所有数据
     */
  async login(params){
    //1 查看该账户是否存在 A存在,验证密码 B 不存在 返回不存在
    let _sql1 = `
    select * from user WHERE account = '${params.account}' AND password = '${params.password}'`
    let mes1 = await dbUtils.query(_sql1)
    return mes1
  },
}

module.exports = user