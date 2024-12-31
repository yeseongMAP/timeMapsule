const express = require('express');
const router = express.Router();

// ~/router/api/
router.get('/', (req, res) => {
  res.send({ msg: 'API router' });
});

router.use((err, req, res, next) => {
  //각 에러케이스 추가하여 응답처리
  switch (err.message) {
    case 'bodyErr':
      res.status(400).json({ message: '입력된 BODY값을 확인해주세요.' });
      break;

    case 'workingErr':
      res.status(400).json({ message: '관리자에게 문의 바랍니다.' });
      break;

    case '--':
      res.status(400).json({ message: '' });
      break;

    default:
      throw new Error('apiRouter');
  }

  return;
});

module.exports = router;
