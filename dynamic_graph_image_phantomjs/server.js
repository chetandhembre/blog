var http = require('http');
var phTest = require('./phantomjs_test')
var url = require('url')
http.createServer(function (req, res) {
  if (req.url.indexOf('/favicon.ico') < 0) {
    var urlDetails = require('url').parse(req.url, true)
    var query = urlDetails['query']
    var scale = parseInt(query['scale']) || 1
    var seriesData = [12, 3, 19, 20, 4, 24, 10].map(function (element) {
      return element * Math.sin(scale)
    })
    var data = {
                  caption : "test",
                  labels : ["1", "2", "3", "4", "5", "6", "7"],
                  series : {
                    id : "test",
                    name : "test1212",
                    seriesData : seriesData
                  },
                  yaxis: {
                    label : 'count',
                    numberPrefix : ''
                  }
            }
    phTest.createImage(data, './index.html').pipe(res)
  } else {
    res.end("hello!!")
  }
  
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');