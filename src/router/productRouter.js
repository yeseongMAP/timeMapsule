const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  throw new Error('errCase');
});

//확인 필요.
router.use((error, req, res, next) => {
  throw new Error(error.message);
});

module.exports = router;
