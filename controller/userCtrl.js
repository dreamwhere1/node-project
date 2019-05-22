const UserModel = require('../model/user');

/*
 * 注册用户
 */
const reg = (req, res) => {
  let user = new UserModel(req.body);
  user.save()
    .then(() => {
      res.send({
        code: 0,
        msg: 'ok'
      })
    })
    .catch(err => {
      console.log(err.message);
      res.send({
        code: -1,
        msg: 'err'
      })
    })
}

module.exports = {
  reg
}
