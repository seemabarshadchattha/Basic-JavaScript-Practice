if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        containsNumber: function (str) {
            return /\d/g.test(str);
        },

        containsRepeatingLetter: function (str) {
            return /([a-zA-Z])\1{1,}/g.test(str)
        },

        endsWithVowel: function (str) {
            return /[aeiou]$/gi.test(str)
        },

        captureThreeNumbers: function (str) {
            var regex = /(\d{3})/;
            var m = regex.exec(str);

            if (m) {
                return m[0];
            }
            else {
                return false;
            }

        },

        matchesPattern: function (str) {
            return /^\d{3}-\d{3}-\d{4}$/s.test(str)
        },
        isUSD: function (str) {
            return /^\$([0-9]{1,3},([0-9]{3},)[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/s.test(str)

        }
    };
});
