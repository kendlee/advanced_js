'use strict';
(function () {
    var functions = [];
    for (var a = 1; a<10; a++) {
        functions.push(factory(a));
    }
    functions.forEach(function (f) {
      f();
    });

    function factory(a) {
      return function () {
        console.log(a, 'processing');
      };
    }

})();
