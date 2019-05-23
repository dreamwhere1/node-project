const express = require('express');
const path = require('path');
const app = express();

// 引入所有抽离出去的路由文件
const userRouter = require('./routes/user');
const studentRouter = require('./routes/student');

// 设置模板引擎与模板页面的路径
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// req.body 以前是一个叫 body-parser 的模块提供
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 静态资源托管
app.use(express.static(path.resolve(__dirname, './public')));

// 设置所有的请求都加上一个响应头，来让他允许跨域
app.use((req, res, next) => {
  // 响应头设置
  res.set('Access-Control-Allow-Origin', '*');

  next();
})


app.use('/api', [userRouter, studentRouter]);

app.listen(3000);
