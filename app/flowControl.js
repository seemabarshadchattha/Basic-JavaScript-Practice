if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        fizzBuzz: function (num) {
            // write a function that receives a number as its argument;
            function tempFunc(num) {

                // false if no number
                // was provided or the value provided is not a number
                if (isNaN(num)) {
                    return false;
                }
                else {
                    var divisibleBy3 = false;
                    var divisibleBy5 = false;
                    if ((num % 3) == 0) {
                        divisibleBy3 = true;
                    }
                    if ((num % 5) == 0) {
                        divisibleBy5 = true;
                    }

                    // if the number is divisible by 3 and 5, the function should return
                    // 'fizzbuzz';
                    if (divisibleBy3 && divisibleBy5) {
                        return 'fizzbuzz';
                    }
                    // if the number is divisible by 3, the function should return 'fizz';
                    else if (divisibleBy3) {
                        return 'fizz';
                    }
                    // if the number is divisible by 5, the function should return 'buzz';
                    else if (divisibleBy5) {
                        return 'buzz';
                    }
                    else {
                        // otherwise the function should return the number,
                        return num;
                    }
                }
            }

            return tempFunc(num);


        }
    };
});
