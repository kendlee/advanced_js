(function () {
    var a = function b() {
        return b;
    };

    console.log(a()()());
    // console.log(b);
})();

/**
 * But scope of anonymous functions aren't visible
 */
