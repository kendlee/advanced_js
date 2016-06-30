(function () {
    var a = function b() {
        return a;
    }
    console.log(a()()());
    // console.log(b);
})();