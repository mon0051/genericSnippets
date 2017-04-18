"use strict";

(function () {
    var server = require('./dummyServer.js')();

    function TimeStampedObj(value, time) {
        if (!time) {
            if (time === false) {
                this.updated = null;
            }
            if (this.updated === undefined) {
                this.updated = new Date();
            }
        } else {
            this.updated = time;
        }

        this.value = value;
        this.toString = function () {
            return "[object TimeStampedObj]";
        };
    }

    function CachedObject(initLocalValue, id) {
        var that = this;
        this.local = new TimeStampedObj(initLocalValue);
        this.remote = new TimeStampedObj(null, false);
        this.value = function () {
            if (that.local.updated >= that.remote.updated) {
                server.pushup(id, that.local.value);
                return that.local.value;
            } else {
                that.local.updated = that.remote.updated;
                that.local.value = that.remote.value;
                return that.local.value;
            }
        };
    }

    var cache = {};

    function cacheObject(id, value) {
        cache[id] = new CachedObject(value);
    }

    function getFromCache(id) {
        return new Promise(function (resolve, reject) {
            resolve(cache[id].value());
        });
    }

    cacheObject("state", { state: "bad" });

    var p = getFromCache("state");
    p.then(function (v) {
        console.log(v);
    });

    console.log(p);
})();
//# sourceMappingURL=cache.js.map