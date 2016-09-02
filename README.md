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
  preventDefault: true
  metaToCtrl: true
});
</pre>

If you want to know more about Settings, [Click Here](#Settings). 

* preventDefault: 
* metaToCtrl: if true, change the key `META+C` to `CTRL+C`
  (So you don't have to add both CTRL+C and META+C hot key for support windows and mac)
  (just add `CTRL+C` hot key and setup `metaToCtrl` to true)

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
    [CTRL+][META+][SHIFT+][ALT+]KEY

#### Example
    CTRL+A (A+CTRL is not available)
    CTRL+SHIFT+A (SHIFT+CTRL+A is not available)
    META+A (META is a Command key on Mac)

#### Use `META` for Command Key on Mac (or use `metaToCtrl`)
    META+C means Command+C on Mac

### Reserved Keys
| Key Code | Name          | Shape | Key           |
|:--------:|---------------|:-----:|---------------|
| 8        | Back Space    |       | BACK-SPACE    |
| 9        | Tab           |       | TAB           |
| 13       | Enter         |       | ENTER         |
| 20       | Caps Lock     |       | CAPS-LOCK     |
| 27       | ESC           |       | ESC           |
| 32       | Space         |       | SPACE         |
| 33       | Page Up       |       | PAGE-UP       |
| 34       | Page Down     |       | PAGE-DOWN     |
| 35       | End           |       | END           |
| 36       | Home          |       | HOME          |
| 37       | Left Arrow    | ←     | LEFT          |
| 38       | Up Arrow      | ↑     | UP            |
| 39       | Right Arrow   | →     | RIGHT         |
| 40       | Down Arrow    | ↓     | DOWN          |
| 45       | Insert        |       | INSERT        |
| 46       | Delete        |       | DELETE        |
| 112      | F1            |       | F1            |
| 113      | F2            |       | F2            |
| 114      | F3            |       | F3            |
| 115      | F4            |       | F4            |
| 116      | F5            |       | F5            |
| 117      | F6            |       | F6            |
| 118      | F7            |       | F7            |
| 119      | F8            |       | F8            |
| 120      | F9            |       | F9            |
| 121      | F10           |       | F10           |
| 122      | F11           |       | F11           |
| 123      | F12           |       | F12           |
| 186      | Semi Colon    | ;     | SEMI-COLON    |
| 187      | Dash          | -     | DASH          |
| 188      | Equal         | =     | EQUAL         |
| 189      | Comma         | ,     | COMMA         |
| 190      | Period        | .     | PERIOD        |
| 191      | Slash         | /     | SLASH         |
| 192      | Back Slash    | \     | BACK-SLASH    |
| 219      | Open Bracket  | [     | OPEN-BRACKET  |
| 220      | Close Bracket | ]     | CLOSE-BRACKET |
| 221      | Quote         | '     | QUOTE         |
| 222      | Back Quote    | `     | BACK-QUOTE    |

#### Example
<pre>
hotKey.add("CTRL+SPACE", ...);
hotKey.add("SLASH", ...);
hotKey.add("SHIFT+SEMI-COLON", ...);
</pre>

### Special Keys

#### ALL

    hotKey.add("ALL", ...);

This hot key will be call when any key is down.
And also it isn't call `e.preventDefault()` even the setting `preventDefault` is true.

## Settings
| Name           | Default Value | Description                                    |
|----------------|:-------------:|------------------------------------------------|
| preventDefault | false         | if true, prevent default behavior from browser |
| metaToCtrl     | false         | if true, change the key `META` to `CTRL`.<br>(So you don't have to add both CTRL+C and META+C hot key for support Windows and Mac)<br>(just add `CTRL+C` hot key and setup `metaToCtrl` to true) |

## Event Parameter
Event Parameter is just `KeyboardEvent` from Browser. But, we add some datas.
| Name               | Description                             |
|--------------------|-----------------------------------------|
| e.which, e.keyCode | the code of key which was down          |
| e.keyString        | the key from hot key lib. (like CTRL+A) |

## License
MIT License
Author: WebEngine (Jo Tae Sang)
