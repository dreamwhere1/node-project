// 实验 bcrypt 模块的功能
const bcrypt = require('bcrypt');

// const pwd = '123';

// // bcrypt.hash(pwd, 10, (err, data) => {
// //   if (err) {
// //     console.log('加密失败');
// //   } else {
// //     console.log(data);
// //   }
// // })

// let data = bcrypt.hashSync(pwd, 10);
// console.log(data);

const str = '$2b$10$w6fRJg8a.cCQEwsSon141u2SsvQZLafRwaY5HHivRJX5NqDCmo1Aa';


bcrypt.compare('1234', str, function(err, isOk) {
  console.log(isOk);
  if (err) {
    console.log('校验出问题了');
  } else if (isOk) {
    console.log('匹配成功');
  } else {
    console.log('匹配失败');
  }
})

