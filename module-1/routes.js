const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> First Page</title></head>");
    res.write(
      "<body> <form action='/message' method='POST'><input type = 'text' name='message'> <button type = 'submit'> Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("Error");
        } else {
          console.log("File Written");
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title> First Page</title></head>");
    res.write("<body> Response from Node js createServer</body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
