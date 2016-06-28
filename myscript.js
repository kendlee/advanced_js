'use strict';
(function () {
    console.log(fxn);
    var fxn = "i'm a fake function";

    console.log(fxn);

    function fxn() {
        console.log("hi");
    }
})();

/**
 * Variable declarations are hoisted on top
 */
