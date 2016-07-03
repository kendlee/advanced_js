function ThatDemo () {
    this.container = [1,2,3];
    this.doStuff = doStuff;
    function doStuff (/*arguments*/) {
        var that = this;
        [].slice.call(arguments).forEach(function (method) {
            that.container.forEach(function(content) {
                that.container.push(method(content));
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

var obj = new ThatDemo()
obj.doStuff(addTwo, multiplyTwo);
console.log(obj.container);