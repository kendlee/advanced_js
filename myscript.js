'use strict';
(function () {
    var el = new DisplayElement();
    el.showOutput('test!');
    el['showOutput']('another test! :)');

    function DisplayElement () {
        var obj = {};
        obj.showOutput = showOutput;
        obj.clearOutput = clearOutput;
        obj.getDisplayElement = getDisplayElement;
        return obj;

        function showOutput(text) {
            getDisplayElement().innerHTML += text + '<br/>';
        }

        function clearOutput() {
            getDisplayElement().innerHTML = '';
        }

        function getDisplayElement() {
            return document.querySelector("#js-data");
        }
    }
})();