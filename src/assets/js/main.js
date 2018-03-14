ready(function () {

});

/**
 * $(document).ready(function(){}); for JS
 * @param fn - function(){our functions}
 */
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function applyAll(func) {
    if (arguments.length === 1) {
        return func();
    }

    var argArr = [].slice.call(arguments);
    argArr.shift();

    return func.apply(this, argArr);
}



