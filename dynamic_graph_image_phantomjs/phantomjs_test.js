var phantomjs = require('phantomjs')
  , path = require('path')
  , childProcess = require('child_process')
  , base64 = require('base64-stream')

var binPath = phantomjs.path;


var createImage = function (data, url /*may be file path*/) {
  var childArgs = [
    path.join(__dirname, 'phantomjs1.js'),
    JSON.stringify(data),
    url
  ];

  
  var spawn = childProcess.spawn
  var f = spawn(binPath, childArgs)
  
  return f.stdout.pipe(base64.decode())
}
exports.createImage = createImage;

//phantomjs ./phantomjs.js data abc
