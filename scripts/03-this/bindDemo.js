function BindDemo () {
    this.container = [1,2,3];
    this.doStuff = doStuff;
    function doStuff (/*arguments*/) {
        [].slice.call(arguments).forEach((function (method) {
            console.log(this);
            console.log(method);
            this.container.forEach((function(content) {
                this.container.push(method(content));
            }).bind(this));
        }).bind(this));
    }
}

function addTwo (a) {
    return a + 3;
}

function multiplyTwo (a) {
    return a * 2;
}

var obj = new BindDemo()
obj.doStuff(addTwo, multiplyTwo);
console.log(obj.container);