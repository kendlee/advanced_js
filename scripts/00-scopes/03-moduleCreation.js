(function () {
  window.myModule = window.myModule || {};

  window.myModule.someVariable = 'xyz';
  function someUtil () {
    console.log('utilA');
  }

  window.myModule.someUtil = someUtil;
})();

/**
 * Common practice to lessen conflicts with globals is creating your own "namespace" or "package".
 */
