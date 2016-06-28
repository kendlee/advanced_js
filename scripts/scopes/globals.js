var myGlobalVar = 'hello';

(function () {
    var localVar = 'hello2';

    window.anotherGlobalVar = localVar;
})();