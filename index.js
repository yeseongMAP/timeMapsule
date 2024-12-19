const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.mainPort, function () {
  console.log('서버열림');
});
