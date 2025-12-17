const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    fs.readFile("home.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error",err);
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
  
  else if (req.url === "/contact") {
    fs.readFile("contact.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error",err);
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
  
  else if (req.url === "/help") {
    res.statusCode = 200;
    res.end("help page");
  }
  else if (req.url === "/description") {
    res.statusCode = 200;
    res.end("description page");
  }
  else {
    res.statusCode = 404;
    res.end("page not found");
  }
});

server.listen(3000, () => {
  console.log("server start at @3000");
});
