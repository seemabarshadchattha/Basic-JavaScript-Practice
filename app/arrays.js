if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        indexOf: function (arr, item) {
            return arr.indexOf(item)
        },

        sum: function (arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        },

        remove: function (arr, item) {
            var temparr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != item) {
                    temparr.push(arr[i]);
                }
            }
            return temparr;

        },

        removeWithoutCopy: function (arr, item) {

            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == item) {
                    arr.splice(i, 1);
                    i--;
                }
            }
            return arr;
        },

        append: function (arr, item) {
            arr.push(item);
            return arr;

        },

        truncate: function (arr) {
            arr.pop();
            return arr;
        },

        prepend: function (arr, item) {
            arr.splice(0, 0, item);
            return arr;
        },

        curtail: function (arr) {
            arr.shift();
            return arr;
        },

        concat: function (arr1, arr2) {
            var temp = arr1.concat(arr2);
            return temp;
        },

        insert: function (arr, item, index) {
            arr.splice(index, 0, item);
            return arr;
        },

        count: function (arr, item) {
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == item) {
                    count++;
                }
            }
            return count;
        },

        duplicates: function (arr) {
            var duplicates = [];
            for (var i = 0; i < arr.length; i++) {
                var count = 0;
                for (var j = 0; j < arr.length; j++) {
                    if (arr[i] == arr[j]) {
                        count++;
                    }
                }
                if (count > 1) {
                    var already = false;
                    for (var j = 0; j < duplicates.length; j++) {
                        if (arr[i] == duplicates[j]) {
                            {
                                already = true
                            }
                        }
                    }
                    if (!already)
                        duplicates.push(arr[i])
                }
            }
            return duplicates;
        },

        square: function (arr) {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                temp.push(arr[i]*arr[i]);
            }
            return temp;
        },

        findAllOccurrences: function (arr, target) {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == target) {
                    temp.push(i);
                }
            }
            return temp;
        }
    };
});
