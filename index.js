const express = require('express');
const morganMiddleware = require('./src/middleware/morganMiddleware');

const app = express();
require('dotenv').config();

// app.use(morgan('dev')); //개발환경 로그
// app.use(morgan('short')); //응답시간 포함

app.use(morganMiddleware);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(process.env.mainPort, function () {
  console.log('서버열림');
});
