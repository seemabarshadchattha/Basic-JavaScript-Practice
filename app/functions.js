if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        argsAsArray: function (fn, arr) {
            return fn(arr[0], arr[1], arr[2]);
        },

        speak: function (fn, obj) {
            greeting = obj.greeting;
            name = obj.name;
            return fn();
        },

        functionFunction: function (str) {

            function innerFunc(str1) {
                return str + ', ' + str1;
            }

            return innerFunc;
        },

        makeClosures: function (arr, fn) {
            var arrOfFunc = [];

            function temp(num) {
                return function () {
                    return fn(num)
                };
            };

            for (var i = 0; i < arr.length; i++) {
                arrOfFunc.push(temp(arr[i]));
            }

            return arrOfFunc;

        },

        partial: function (fn, str1, str2) {
            function temp(str) {
                return fn(str1, str2, str);
            }

            return temp;
        },

        useArguments: function () {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        },

        callIt: function (fn) {
            if (arguments.length == 3) {
                fn(arguments[1], arguments[2]);
            }
            else if (arguments.length == 4) {
                fn(arguments[1], arguments[2], arguments[3]);
            }
        },

        partialUsingArguments: function (fn) {
            var args = arguments;

            function temp() {
                if (args.length == 1) {
                    return fn(arguments[0], arguments[1], arguments[2]);
                }
                else if (args.length == 2) {
                    return fn(args[1], arguments[0], arguments[1]);
                }
                else if (args.length == 3) {
                    return fn(args[1], args[2], arguments[0]);
                }
                else {
                    return fn(args[1], args[2], args[3]);
                }

            }

            return temp;
        },

        curryIt: function (fn) {
            return function fnA(a) {
                return function fnB(b) {
                    return function fnC(c) {
                        if (isNaN(c)) {
                            return fn;
                        }
                        else{
                            return fn(a,b,c)
                        }
                    }
                }
            }
        }
    };
});
