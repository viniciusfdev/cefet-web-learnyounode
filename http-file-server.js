//  ## HTTP FILE SERVER (Exercise 11 of 13)

//   Create a file named http-file-server.js.

//   Write an HTTP server that serves the same text file for each request it
//   receives.

//   Your server should listen on the port provided by the first argument to
//   your program.

//   You will be provided with the location of the file to serve as the second
//   command-line argument. You must use the fs.createReadStream() method to
//   stream the file contents to the response.

const { readFile } = require("fs");
const http = require("http");

const [, , PORT, FILE] = process.argv;

const server = http.createServer((req, res) => [
  readFile(FILE, { encoding: "utf-8" }, (err, data) => {
    if (err) return res.end(err);
    else res.end(data);
  }),
]);

server.listen(PORT);
