function methodA () {
    console.log('hi ' + this.myName);
}

var object = {
    myName: 'object'
};

methodA();

methodA.call(object);

methodA.apply(object);

var boundMethod = methodA.bind(object);

boundMethod();

/**
 * Using call explicitly tells the resolved 'this' variable.
 */