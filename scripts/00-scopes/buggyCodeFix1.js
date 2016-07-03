'use strict';
(function () {
    var functions = [];
    for (var a = 1; a<10; a++) {
        functions.push((function (a) {
          return function () {console.log(a, 'processing')};
        })(a));
    }
    functions.forEach(function (f) {
      f();
    });
})();
