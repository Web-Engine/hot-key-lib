# hot-key-lib
javascript hot key(shortcut key) library on web

## How to use

### 0. Load hot-key-lib.js
<pre>
&lt;script src="hot-key-lib.js"&gt;&lt;/script&gt;
</pre>

### 1. Create a HotKey Object
<pre>
var hotKey = new HotKey();
</pre>


### 2. Add HotKey
<pre>
hotKey.add("CTRL+A", function(e) {
  // do something when CTRL+A keydown
});
</pre>

#### Also, you can add HotKey through key array
<pre>
hotKey.add(["CTRL+A", "META+A"], function(e) {
  // do something when CTRL+A or META+A keydown
});
</pre>

### 3. Setup (if you want)
<pre>
hotKey.setup({
  "preventDefault": true
});
</pre>

* preventDefault: if true, prevent default behavior from browser (default: false)


### 4. Start HotKey
<pre>
hotKey.start();
</pre>

### 5. Stop HotKey
if you want to stop the HotKey, then
<pre>
hotKey.stop();
</pre>

## Key Name Rule

### Default Rule

[CTRL+][SHIFT+][ALT+][META+]KEY

#### Example
<pre>
CTRL+A (A+CTRL is not available)
CTRL+SHIFT+A (SHIFT+CTRL+A is not available)
META+A (META is a Command key on Mac)
</pre>

#### Use `META` for Command Key on Mac
<pre>
META+C means Command+C on Mac
</pre>

### Reserved KEY
<pre>
Arrows => LEFT-ARROW, UP-ARROW, RIGHT-ARROW, DOWN-ARROW
Tab => TAB
Space Bar => SPACE
Back Space => DELETE
</pre>

#### Example
<pre>
CTRL+LEFT-ARROW
CTRL+RIGHT-ARROW
CTRL+UP-ARROW
</pre>

## Event Parameter
Event Parameter is just `KeyDownEvent` from Browser. But, we add some datas.  
<pre>
e.which, e.keyCode: the code of key was downed.
e.keyString: the key from hot key lib. (like CTRL+A)
</pre>

## License: MIT License
