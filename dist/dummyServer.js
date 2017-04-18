"use strict";

(function () {
    module.exports = function (params) {
        var remote = {};

        function pushup(id, value) {
            remote[id] = value;
        }

        function pulldown(id, value) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(remote[id]);
                }, 1500);
            });
        }

        return {
            pushup: pushup,
            pulldown: pulldown
        };
    };
})();
//# sourceMappingURL=dummyServer.js.map