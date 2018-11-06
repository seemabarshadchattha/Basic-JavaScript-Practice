if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        valueAtBit: function (num, bit) {
            var str = num.toString(2);
            var l = str.length;
            for(var i = 0; i< 8-l;i++){
                str = '0'+str;
            }
            return Number(str.charAt(8 - bit))
        },

        base10: function (str) {
            return parseInt(str, 2);
        },

        convertToBinary: function (num) {
            var b = num.toString(2);
            var l = b.length;
            for(var i = 0; i< 8-l;i++){
                b = '0'+b;
            }
            return b;
        },

        multiply: function (a, b) {
            var aDec = (a + "").split(".");
            var bDec = (b + "").split(".");

            var p = 0;

            if (aDec[1] && bDec[1]) {
                p = bDec[1].length;
                if (aDec[1].length > bDec[1]) {
                    p = aDec[1].length;
                }
            }
            else if (aDec[1] && !bDec[1]) {
                p = aDec[1].length;
            }
            else if (!aDec[1] && bDec[1]) {
                p = bDec[1].length;
            }

            var product = a * b;
            return Number(product.toPrecision(p));
        }
    };
});

