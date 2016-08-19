# hot-key-lib
javascript hot key library on web

## How to use

### 1. Create a HotKey Object
<pre>
var hotKey = new HotKey();
</pre>


### 2. Add HotKey
<pre>
hotKey.add("CTRL+A", function(e) {
  // do something when CTRL + A keydown
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


## Key Name Rule

[CTRL+][SHIFT+][ALT+][META+]KEY

#### Example
<pre>
A with CTRL => CTRL+A (A+CTRL is not available)
A with CTRL, SHIFT => CTRL+SHIFT+A (SHIFT+CTRL+A is not available)
A with META (Command Key on Mac) => META+A
</pre>

## Use `META` for Command Key on Mac
<pre>
META+C means Command+C on Mac
</pre>
