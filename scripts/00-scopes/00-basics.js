(function () {
  var a = 1;
  {
    var b = 2;
  }
  (function () {
    var c = 3;
    console.log('exec');
  })();

  console.log(a, b);
  console.log(c);
})();

/**
 * variables are only valid within the function scope (unlike c/c++/java which uses block scope);
 */
