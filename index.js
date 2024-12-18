const express = require('express');
const app = express();
require('dotenv').config();

console.log(process.env.mainPort);

app.listen(9999, function () {
  console.log('서버열림');
});
