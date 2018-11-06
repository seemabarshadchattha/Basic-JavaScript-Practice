if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    var timeouts = [];
    return {
        count: function (start, end) {
            var num = 1;
            for (var i = start; i <= end; i++) {
                var t = 100 * i;
                var temp = setTimeout(function () {
                    console.log(num)
                    num++;
                }, t);
                timeouts.push(temp);
            }
            return {
                cancel: function () {
                    for (var i = 0; i < timeouts.length; i++) {
                        clearTimeout(timeouts[i]);
                    }
                }
            }
        },

    };
});