'use strict';
(function () {
    var a = 'hi';
    function greet () {
        console.log(a, "// in greet 1" );
        var a = 'yay';
        console.log(a, "// in greet 2" );
    }
    console.log(a, "// out of greet 1");
    greet();
    console.log(a, "// out of greet 2");
})();

/**
 * Variable declarations are hoisted on top
 */
