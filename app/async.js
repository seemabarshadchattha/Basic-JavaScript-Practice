if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jquery'], function ($) {
    return {
        async: function (value) {
            return new Promise(function (resolve, reject) {
                resolve(value)
            })
        },

        manipulateRemoteData: function (url) {
            return new Promise(function (resolve, reject) {
                $.get(url, function (data, status) {
                    if(status == 'success') {
                        var people = data["people"];
                        var temp = [];
                        for (var i = 0; i < people.length; i++) {
                            temp.push(people[i].name);
                        }
                        temp.sort();
                        resolve(temp)
                    }
                    else{
                        reject(false)
                    }
                })

            })
        }
    };
});
