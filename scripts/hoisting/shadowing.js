'use strict';
(function () {
    var a = 'hi';
    function greet () {
        console.log(a, "// in greet" );
        var a;
    }
    console.log(a, "// out of greet");
    greet();
})();
