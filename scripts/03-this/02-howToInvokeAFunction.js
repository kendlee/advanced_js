function methodA (a, b, c) {
    console.log(this);
    console.log('hi ' + this.myName);
    console.log(a, b, c);
}

var context = {
    myName: 'object'
};

methodA();

methodA.call(context, 1, 2);

methodA.apply(context, [3]);

var boundMethod = methodA.bind(context);

boundMethod();

/**
 * Different ways of invoking funtions
 */
