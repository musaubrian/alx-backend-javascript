const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`listening on port [${port}]`);
});

module.exports = app
