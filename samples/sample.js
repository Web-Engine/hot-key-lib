var hotKey = new HotKey();
var keyView = document.getElementById("display-key");
var actView = document.getElementById("display-action");

function displayKey(text) {
    keyView.innerText = text;
}

function displayAction(text) {
    actView.innerText = text;
}

hotKey.add("ALL", function (e) {
    e.preventDefault();
    displayKey(e.keyString + " - " + e.keyCode);
});

hotKey.add("CTRL+A", function () {
    displayAction("Select All");
});

hotKey.add("CTRL+Z", function () {
    displayAction("Undo");
});

hotKey.add("CTRL+SHIFT+Z", function () {
    displayAction("Redo");
});

hotKey.add("CTRL+X", function () {
    displayAction("Cut");
});

hotKey.add(["CTRL+C", "META+C"], function () {
    displayAction("Copy");
});

hotKey.add("CTRL+V", function () {
    displayAction("Paste");
});

hotKey.add("CTRL+S", function () {
    displayAction("Save");
});

hotKey.add("CTRL+SHIFT+S", function () {
    displayAction("Save As");
});

hotKey.add("TAB", function () {
    displayAction("Tab");
});

hotKey.setup({
    preventDefault: true,
    metaToCtrl: true
});

hotKey.start();