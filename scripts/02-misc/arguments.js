'use strict';
(function () {
    argumentsDemo(1,2,3);

    function argumentsDemo(/*arguments*/) {
        console.log(arguments);
        console.log(Array.isArray(arguments));
        console.log(Array.isArray([]));

        // to convert arguments into an array
        var argumentsArray = Array.prototype.slice.call(arguments);
        console.log(argumentsArray);
        console.log(Array.isArray(argumentsArray));
    }
})();

/**
 * arguments is a special array-like variable to enable varargs-like syntax
 */