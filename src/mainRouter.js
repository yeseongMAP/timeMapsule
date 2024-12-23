const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: '기본라우팅 설정' });
});

//err middleware
router.use((err, req, res, next) => {
  if (err.message === 'typeError') {
    res.status(400).json({ message: 'something is wrong' });
  }
  return;
});

module.exports = router;
