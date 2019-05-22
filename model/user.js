// 引入 db
const db = require('../config/db');

// 设计 schema
const schema = new db.Schema({
  // 用户名
  username: String,
  // 密码
  password: String,
  // 昵称
  nickname: String,
  // 用户头像
  avatar: {
    type: String,
    default: 'http://localhost:3000/img/avatar.jpg'
  }
})

// 基于 schema 创建出 model
module.exports = db.model('user', schema);

// db.model 第一个参数是 model 的名字，并且他的复数形式是数据库表的名字
// 如果你想确定表的名字就叫 user ，而不是 users . 可以在创建 schema 的时候传递第二个参数
