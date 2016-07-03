(function () {
    var object = {
        myName: 'objectname :)',
        greet: function () {
            console.log('hi '+this.myName);
        }
    };

    object.greet(); // 1

    var extractedGreet = object.greet;

    extractedGreet(); // 2

    var borrower = {
        myName: 'borrower',
        greet: object.greet
    };

    borrower.greet(); // 3
})();

/**
 * the "this" variable gets resolved depending on the invoker.
 *
 * (general rule: look at the object on the left of the '.' notation)
 */