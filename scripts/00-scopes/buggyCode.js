'use strict';
(function () {
    var functions = [];
    for (var a = 1; a<10; a++) {
        //console.log(a);
        functions.push(function () {
          console.log(a, 'processing');
        });
    }
    functions.forEach(function (f) {
      f();
    });

})();
