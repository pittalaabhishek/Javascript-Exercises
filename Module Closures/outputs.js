var a = 12;
(function () {
  console.log(a);
})();//12

var a = 5;
(function () {
  var a = 12;
  console.log(a);
})();//12

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();//12

var a = 10;
var x = (function () {
  var y = function () {
    var a = 12;
  };
  return function () {
    console.log(a);
  };
})();
x();//10


var a = 10;
var x = (function () {
  (function () {
    a = 12;
  })();
  return function () {
    console.log(a);
  };
})();
x();//12


var a = 10;
(function () {
  var a = 15;
  window.x = function () {
    console.log(a);
  };
})();
x();//15