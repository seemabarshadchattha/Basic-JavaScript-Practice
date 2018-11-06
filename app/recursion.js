if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        listFiles: function (data, dirName) {
            var allfiles = [];
            var dirOnly = [];

            function countFiles(d, dir, filesArr) {
                for (var key in d) {
                    if (key == 'files') {
                        for (var i = 0; i < d[key].length; i++) {
                            if (typeof d[key][i] === 'object') {
                                countFiles(d[key][i], dir, filesArr);
                            }
                            else {
                                if (d[key][i].indexOf('.' + dir) > -1) {
                                    dirOnly.push(d[key][i]);
                                }
                                filesArr.push(d[key][i]);
                            }
                        }
                    }
                }
            }

            countFiles(data, dirName, allfiles);

            if (dirName) {
                return dirOnly
            }
            else {
                return allfiles;
            }

        },

        permute: function (arr) {

            function permute(input) {
                var tempArr = [],
                    usedChars = [];
                return (function main() {
                    for (var i = 0; i < input.length; i++) {
                        var ch = input.splice(i, 1)[0];
                        usedChars.push(ch);
                        if (input.length == 0) {
                            tempArr.push(usedChars.slice());
                        }
                        main();
                        input.splice(i, 0, ch);
                        usedChars.pop();
                    }
                    return tempArr;
                })();
            }

            return permute(arr);
        }
    };
});
