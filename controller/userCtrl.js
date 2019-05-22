const bcrypt = require('bcrypt');
const UserModel = require('../model/user');

/*
 * 注册用户
 */
const reg = (req, res) => {
  let body = Object.assign({}, req.body, {
    password: bcrypt.hashSync(req.body.password, 10)
  })

  // req.body.password = bcrypt.hashSync(req.body.password);
  let user = new UserModel(body);
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
