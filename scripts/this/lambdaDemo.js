'use strict';

function LambdaDemo () {
    this.container = [1,2,3];
    this.doStuff = doStuff;
    function doStuff (/*arguments*/) {
        var methods = [].slice.call(arguments);
        methods.forEach(method => {
            this.container.forEach(content => {
                this.container.push(method(content));
            });
        });
    }
}

function addTwo (a) {
    return a + 3;
}

function multiplyTwo (a) {
    return a * 2;
}

var obj = new LambdaDemo()
obj.doStuff(addTwo, multiplyTwo, function (a) {
    return a * a;
});
console.log(obj.container);