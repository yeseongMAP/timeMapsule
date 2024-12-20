const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ msg: '기본라우팅 설정' });
});

module.exports = router;
