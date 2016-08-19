# key-macro-lib
javascript key library macro on web

## How to use

### 1. Create a KeyMacro Object
<pre>
var keyMacro = new KeyMacro();
</pre>


### 2. Add Macro
<pre>
keyMacro.add("CTRL+A", function(e) {
  // do something when CTRL + A keydown
});
</pre>


### 3. Setup
<pre>
keyMacro.setup({
  "preventDefault": true
});
</pre>


### 4. Start KeyMacro
<pre>
keyMacro.start();
</pre>
