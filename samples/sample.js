var keyMacro = new KeyMacro();
var displayKey = document.getElementById("display-key");

function display(text) {
    displayKey.innerText = text;
}

keyMacro.add("CTRL+A", function (e) {
    display("Ctrl + A => Select All");
});


keyMacro.add("CTRL+Z", function (e) {
    display("Ctrl + Z => Undo");
});

keyMacro.add("CTRL+SHIFT+Z", function (e) {
    display("Ctrl + SHIFT + Z => Redo");
});

keyMacro.add("CTRL+X", function (e) {
    display("Ctrl + X => Cut");
});

keyMacro.add("CTRL+C", function (e) {
    display("Ctrl + C => Copy");
});

keyMacro.add("CTRL+V", function (e) {
    display("Ctrl + V => Pate");
});

keyMacro.add("CTRL+S", function (e) {
    display("Save");
});

keyMacro.add("CTRL+SHIFT+S", function (e) {
    display("Save As");
});

keyMacro.add("TAB", function (e) {
    display("Tab");
});

keyMacro.start();