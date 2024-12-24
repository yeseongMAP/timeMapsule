const express = require('express');
const router = express.Router();
const productRotuer = require('./productRouter');

router.get('/', (req, res) => {
  res.status(200).json({ msg: '기본라우팅 설정' });
});

router.use('/test', productRotuer);

//err middleware
router.use((err, req, res, next) => {
  console.log('MAIN_ROUTER_ERROR_MIDDLEWARE 입장');

  //각 에러케이스 추가하여 응답처리
  switch (err.message) {
    case 'typeError':
      res.status(400).json({ message: 'something is wrong' });
      break;

    case 'errCase':
      res.status(200).json({ message: 'this is errorMessage' });
      break;
  }

  return;
});

module.exports = router;
