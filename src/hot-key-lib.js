function HotKey() {
    const keyNames = {
        8: "BACK-SPACE",
        9: "TAB",
        13: "ENTER",
        20: "CAPS-LOCK",
        27: "ESC",
        32: "SPACE",
        33: "PAGE-UP",
        34: "PAGE-DOWN",
        35: "END",
        36: "HOME",
        37: "LEFT",
        38: "UP",
        39: "RIGHT",
        40: "DOWN",
        45: "INSERT",
        46: "DELETE",
        186: "SEMI-COLON",
        187: "EQUAL",
        188: "COMMA",
        189: "DASH",
        190: "PERIOD",
        191: "SLASH",
        192: "BACK-QUOTE",
        219: "OPEN-BRACKET",
        220: "BACK-SLASH",
        221: "CLOSE-BRACKET",
        222: "QUOTE",
    };

    var hotKeys = {
        ALL: []
    };
    var settings = {
        preventDefault: false,
        metaToCtrl: false
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

        hotKeys = hotKeys.filter(function (hotKey) {
            return hotKey !== func;
        });
    }

    this.setup = function(options) {
        for (var k in options) {
            settings[k] = options;
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

        if (e.metaKey) {
            if (settings.metaToCtrl) {
                if (!e.ctrlKey) {
                    key.push("CTRL");
                }
            }
            else {
                key.push("META");
            }
        }

        if (e.shiftKey) {
            key.push("SHIFT");
        }

        if (e.altKey) {
            key.push("ALT");
        }

        if (
            keyCode == 16 // shift key
            || keyCode == 17 // ctrl key
            || keyCode == 18 // alt key
            || keyCode == 91 // left meta key
            || keyCode == 93 // right meta key
        ) {
            return key.join("+");
        }

        if (keyNames[keyCode]) {
            key.push(keyNames[keyCode]);
        }
        else if (112 <= keyCode && keyCode <= 123) {
            key.push("F" + (keyCode - 111));
        }
        else {
            key.push(String.fromCharCode(keyCode));
        }

        return key.join("+");
    }

    function runHotKeys(e) {
        var key = KeyEventToString(e);
        var keyCode = getKeyCode(e);

        e.which = keyCode;
        e.keyCode = keyCode;
        e.keyString = key;

        hotKeys.ALL.forEach(function (macro) {
            macro.call(document, e);
        });

        if (!hotKeys[key]) return;

        if (settings.preventDefault) {
            e.preventDefault();
        }

        hotKeys[key].forEach(function (macro) {
            macro.call(document, e);
        });
    }

    this.start = function () {
        document.addEventListener("keydown", runHotKeys);
    }

    this.stop = function () {
        document.removeEventListener("keydown", runHotKeys);
    }
}