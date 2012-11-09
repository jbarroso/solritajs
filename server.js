var _ = require('lodash');
var fs = require("fs");
var path = require("path");
var express = require("express");

// Options
var options = {
  favicon: "./favicon.ico",
  index: "./index.html",
  port: process.env.PORT || 8000,
  host: "0.0.0.0",
  folders: {
    "app": "dist/release",
    "assets/js/libs": "dist/release",
    "assets/css": "dist/release",
    "assets/vendor/bootstrap/img": "assets/vendor/bootstrap/img"
  },
  files: {
    "favicon.ico": "favicon.ico"
  }
}

var site = express.createServer();
site.use(express.compress());
console.log("Listening on http://" + options.host + ":" + options.port);

// Allow users to override the root.
var root = "/";

// Map static folders.
Object.keys(options.folders).sort().reverse().forEach(function (key) {
  site.get(root + key + "/*", function (req, res, next) {
    // Find filename.
    var filename = req.url.slice((root + key).length)
    // If there are query parameters, remove them.
    filename = filename.split("?")[0];

    res.sendfile(path.join(options.folders[key] + filename));
  });
});

// Map static files.
if (_.isObject(options.files)) {
  Object.keys(options.files).sort().reverse().forEach(function (key) {
    site.get(root + key, function (req, res) {
      return res.sendfile(options.files[key]);
    });
  });
}

// Serve favicon.ico.
site.use(express.favicon(options.favicon));

// Ensure all routes go home, client side app..
site.all("*", function (req, res) {
  fs.createReadStream(options.index).pipe(res);
});

// Actually listen
site.listen(options.port, options.host);
