const express = require('express');
const UserModel = require('../model/user');
const router = express.Router();

/**
 * 获取我们的用户列表信息
 * http://localhost:3000/user/find
 *
 */
router.get('/find', (req, res) => {
  // 1. 链接数据库
  // 2. 需要操作那张表（集合），就需要去构建一个相应的 model 对象
  //    2.1 需要 schema 来定制这张表的结构，
  // 3. 直接 使用 model 对象去做操作
  UserModel
    .find()
    .then(data => {
      console.log(data);
      res.send({
        code: 0,
        msg: '获取成功',
        data: {
          list: data
        }
      })
    })
    .catch(err => {
      console.log(err.message);
      res.send({
        code: -1,
        msg: '获取失败'
      })
    })
})

module.exports = router;
