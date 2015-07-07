//---------------------------------------------------------------------
//
// Global Variable Monitor
//
// Copyright (c) 2015 Kazuhiko Arase
//
// URL: https://github.com/kazuhikoarase/global-var-mon
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
//---------------------------------------------------------------------

!function() {
  var timeout = 1000;
  var vars = {};
  var capture = function() {
    vars = {};
    for (var k in window) {
      vars[k] = true;
    }
    window.setTimeout(dumpAndCapture, timeout);
  };
  var dumpAndCapture = function() {
    for (var k in window) {
      if (!vars[k]) {
        console.log('Global variable is detected: ' + k +
            ' (' + typeof window[k] + ')');
      }
    }
    capture();
  };
  capture();
}();
