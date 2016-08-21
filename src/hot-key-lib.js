function HotKey() {
    const keyNames = {
        8: "DELETE",
        9: "TAB",
        32: "SPACE",
        37: "LEFT-ARROW",
        38: "UP-ARROW",
        39: "RIGHT-ARROW",
        40: "DOWN-ARROW"
    };

    var hotKeys = {};
    var setups = {
        "preventDefault": false
    };

    this.add = function(key, func) {
        if (key instanceof Array) {
            var t = this;
            key.forEach(function (k) {
                t.add(k, func);
            });

            return;
        }

        key = key.toString().toUpperCase();

        if (!hotKeys[key]) {
            hotKeys[key] = [];
        }

        hotKeys[key].push(func);
    }

    this.remove = function (key, func) {
        if (!hotKeys[key]) return false;

        hotKeys.filter(function (hotKey) {
            return hotKey !== func;
        });
    }

    this.setup = function(options) {
        for (var k in options) {
            setups[k] = options;
        }
    }

    function getKeyCode(e) {
        return e.which || e.keyCode;
    }

    function KeyEventToString(e) {
        var keyCode = getKeyCode(e);
        var key = [];

        if (e.ctrlKey) {
            key.push("CTRL");
        }

        if (e.shiftKey) {
            key.push("SHIFT");
        }

        if (e.altKey) {
            key.push("ALT");
        }

        if (e.metaKey) {
            key.push("META");
        }

        if (
            keyCode == 16 // shift key
            || keyCode == 17 // ctrl key
            || keyCode == 18 // alt key
        ) {
            return key.join("+");
        }

        if (keyNames[keyCode]) {
            key.push(keyNames[keyCode]);
        }
        else {
            key.push(String.fromCharCode(keyCode));
        }

        return key.join("+");
    }

    function runHotKeys(e) {
        var key = KeyEventToString(e);
        if (!hotKeys[key]) return;

        if (setups["preventDefault"]) {
            e.preventDefault();
        }

        var keyCode = getKeyCode(e);
        e.which = keyCode;
        e.keyCode = keyCode;
        e.keyString = key;

        hotKeys[key].forEach(function (macro) {
            macro.call(null, e);
        });
    }

    this.start = function () {
        document.addEventListener("keydown", runHotKeys);
    }

    this.stop = function () {
        document.removeEventListener("keydown", runHotKeys);
    }
}