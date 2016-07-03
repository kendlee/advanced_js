var myGlobalVar = 'hello';

(function () {
    var localVar = 'hello2';

    window.anotherGlobalVar = localVar;
})();

/**
 * Directly declaring variables outside functions sets a variable to be visible within the global scope
 */
