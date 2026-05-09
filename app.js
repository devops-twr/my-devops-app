const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Amazon Linux EC2");
  res.end();
}).listen(3000);

console.log("Running on port 3000");