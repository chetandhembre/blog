var page = require('webpage').create();
var system = require('system');
var args = system.args;

page.onLoadFinished   = function(status) {
  if (status === 'success') {
    page.evaluate(function(s) {
      window.data=s
      window.chart1()
    }, system.args[1]);
  
    setTimeout(function () {
      console.log(page.renderBase64('PNG'))
      phantom.exit();
    }, 0)
  } else {
    phantom.exit();
  }
};

page.open(system.args[2], function () {
});

