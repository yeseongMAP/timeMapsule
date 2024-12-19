const morgan = require('morgan');

morgan.token('status', function (req, res) {
  let color;

  if (res.statusCode < 300) color = '\x1B[32m'; //green
  else if (res.statusCode < 400) color = '\x1B[36m'; //cyan
  else if (res.statusCode < 500) color = '\x1B[33m'; //yellow
  else if (res.statusCode < 600) color = '\x1B[31m'; //red
  else color = '\x33[0m'; /*글자색 초기화*/

  return color + res.statusCode + '\x33[35m' /*보라색*/;
});

morgan.token('request', function (req, res) {
  return 'Request_' + JSON.stringify(req.body);
});

const morganMiddleware = morgan(
  "\x1b[42m:method\x1b[40m : | url_':url' | IP :remote-addr  | :request | Status-:status | 응답-:response-time ms (:res[content-length]줄)"
);

module.exports = morganMiddleware;
