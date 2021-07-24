'use strict';

const fs = require('fs');

module.exports = function (path, ext, callback) {
  fs.readdir(path, (error, fileList) => {
    if (error) return callback(error);
    const filteredFiles = fileList.filter((f) => f.endsWith(`.${ext}`));
    callback(null, filteredFiles);
  });
}
