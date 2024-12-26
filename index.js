const express = require('express');
const morganMiddleware = require('./src/middleware/morganMiddleware');
const mainRouter = require('./src/router/mainRouter');
const fs = require('fs');

const app = express();
require('dotenv').config();

// app.use(morgan('dev')); //개발환경 로그
// app.use(morgan('short')); //응답시간 포함

app.use(morganMiddleware);

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api', mainRouter);

app.listen(process.env.mainPort, function () {
  console.log('서버열림');
});

const text = fs.readFileSync('./test.log', 'utf8');

// 운영 환경일때만 적용
// if(process.env.NODE_ENV == "production"){
//   try {
//     const option = {
//       ca: fs.readFileSync('/etc/letsencrypt/live/{myurl}/fullchain.pem'),
//       key: fs.readFileSync('/etc/letsencrypt/live/{myurl}/privkey.pem'),
//       cert: fs.readFileSync('/etc/letsencrypt/live/{myurl}/cert.pem')
//     };

//     HTTPS.createServer(option, app).listen(process.env.mainPort, () => {
//       console.log('HTTPS 서버가 실행되었습니다. 포트 :: ' + process.env.mainPort);
//     });
//   } catch (error) {
//     console.log('HTTPS 서버가 실행되지 않습니다.');
//     console.log(error);
//   }
// }else{
//   app.listen(process.env.mainPort, () => {
//     console.log('HTTP 서버가 실행되었습니다. 포트 :: ' + process.env.mainPort);
//   });
// }
