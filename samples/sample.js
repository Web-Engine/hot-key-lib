var hotKey = new HotKey();
var displayKey = document.getElementById("display-key");

function display(text) {
    displayKey.innerText = text;
}

hotKey.add("CTRL+A", function (e) {
    display("Ctrl + A => Select All");
});


hotKey.add("CTRL+Z", function (e) {
    display("Ctrl + Z => Undo");
});

hotKey.add("CTRL+SHIFT+Z", function (e) {
    display("Ctrl + SHIFT + Z => Redo");
});

hotKey.add("CTRL+X", function (e) {
    display("Ctrl + X => Cut");
});

hotKey.add(["CTRL+C", "META+C"], function (e) {
    display("Ctrl + C => Copy");
});

hotKey.add("CTRL+V", function (e) {
    display("Ctrl + V => Pate");
});

hotKey.add("CTRL+S", function (e) {
    display("Save");
});

hotKey.add("CTRL+SHIFT+S", function (e) {
    display("Save As");
});

hotKey.add("TAB", function (e) {
    display("Tab");
});

hotKey.setup({
    "preventDefault": true
});

hotKey.start();