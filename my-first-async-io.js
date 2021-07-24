// ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

// Create a file named my-first-async-io.js.

// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.

const { readFileSync, readFile } = require("fs");
readFile(process.argv[2], { encoding: "utf-8" }, (err, file) =>
  console.log(file.split("\n").length - 1)
);
