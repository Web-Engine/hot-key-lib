function KeyMacro() {
    const keyNames = {
        8: "DELETE",
        9: "TAB",
        32: "SPACE",
        37: "LEFT-ARROW",
        38: "UP-ARROW",
        39: "RIGHT-ARROW",
        40: "DOWN-ARROW"
    };

    var macroKeys = {};
    this.add = function(key, func) {
        key = key.toUpperCase();

        if (!macroKeys[key]) {
            macroKeys[key] = [];
        }

        macroKeys[key].push(func);
    };

    this.remove = function (key, func) {
        if (!macroKeys[key]) return false;

        macroKeys.filter(function (macro) {
            return macro !== func;
        });
    }

    function KeyEventToString(e) {
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

        if (
            e.keyCode == 16 // shift key
            || e.keyCode == 17 // ctrl key
            || e.keyCode == 18 // alt key
        ) {
            return key.join("+");
        }

        if (keyNames[e.keyCode]) {
            key.push(keyNames[e.keyCode]);
        }
        else {
            key.push(String.fromCharCode(e.keyCode));
        }

        return key.join("+");
    }

    function runMacroKeys(e) {
        var key = KeyEventToString(e);
        if (!macroKeys[key]) return;

        macroKeys[key].forEach(function (macro) {
            macro.call(null, e);
        });
    }

    this.start = function () {
        document.addEventListener("keydown", runMacroKeys);
    }

    this.stop = function () {
        document.removeEventListener("keydown", runMacroKeys);
    }
}