# hot-key-lib
pure javascript hot key(keyboard shortcut) library on web

## How to use

### 0. Load hot-key-lib.js
    <script src="hot-key-lib.js"></script>

### 1. Create a HotKey Object
    var hotKey = new HotKey();

### 2. Add HotKey
    hotKey.add("CTRL+A", function(e) {
      // do something when CTRL+A keydown
    });

#### Also, you can add HotKey through key array
    hotKey.add(["CTRL+A", "META+A"], function(e) {
      // do something when CTRL+A or META+A keydown
    });

### 3. Setup (if you want)
    hotKey.setup({
      preventDefault: true
      metaToCtrl: true
    });

If you want to know more about Settings, [Click Here](#settings). 

* preventDefault: if true, prevent browser's default behavior.
* metaToCtrl: if true, change the key `META+C` to `CTRL+C`
  (So you don't have to add both CTRL+C and META+C hot key for support windows and mac)
  (just add `CTRL+C` hot key and setup `metaToCtrl` to true)

### 4. Start HotKey
    hotKey.start();

### 5. Stop HotKey
if you want to stop the HotKey, then
    hotKey.stop();

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
| Key Code  | Description                     | Shape | Name          |
|:---------:|---------------------------------|:-----:|---------------|
| 8         | Back Space                      |       | BACK-SPACE    |
| 9         | Tab                             |       | TAB           |
| 12        | Number Pad 5 without Num Lock   |       | NUMPAD-CENTER |
| 13        | Enter                           |       | ENTER         |
| 16        | Shift                           |       | SHIFT         |
| 17        | Ctrl                            |       | CTRL          |
| 18        | Alt                             |       | ALT           |
| 19        | Pause / Break                   |       | PAUSE-BREAK   |
| 20        | Caps Lock                       |       | CAPS-LOCK     |
| 27        | ESC                             |       | ESC           |
| 32        | Space                           |       | SPACE         |
| 33        | Page Up                         |       | PAGE-UP       |
| 34        | Page Down                       |       | PAGE-DOWN     |
| 35        | End                             |       | END           |
| 36        | Home                            |       | HOME          |
| 37        | Left Arrow                      | ←    | LEFT-ARROW    |
| 38        | Up Arrow                        | ↑    | UP-ARROW      |
| 39        | Right Arrow                     | →    | RIGHT-ARROW   |
| 40        | Down Arrow                      | ↓    | DOWN-ARROW    |
| 44        | Print Screen / Sys Rq           |       | PRINT-SCREEN  |
| 45        | Insert                          |       | INSERT        |
| 46        | Delete                          |       | DELETE        |
| 48 ~ 90   | 0 ~ 9                           |       | 0 ~ 9         |
| 65 ~ 90   | A ~ Z                           |       | A ~ Z         |
| 96 ~ 105  | Number Pad 0 ~ 9                |       | NUMPAD-0 ~ 9  |
| 106       | Number Pad *                    | *     | NUMPAD-*      |
| 107       | Number Pad +                    | +     | NUMPAD-*      |
| 109       | Number Pad -                    | -     | NUMPAD--      |
| 110       | Number Pad .                    | .     | NUMPAD-.      |
| 111       | Number Pad /                    | /     | NUMPAD-/      |
| 112 ~ 123 | F1 ~ F12                        |       | F1 ~ F12      |
| 144       | Num Lock                        |       | NUM-LOCK      |
| 145       | Scroll Lock                     |       | SCROLL-LOCK   |
| 186       | Semi Colon                      | ;     | ;             |
| 187       | Dash                            | -     | -             |
| 188       | Equal                           | =     | =             |
| 189       | Comma                           | ,     | ,             |
| 190       | Period                          | .     | .             |
| 191       | Slash                           | /     | /             |
| 192       | Back Slash                      | \     | \             |
| 219       | Open Bracket                    | [     | [             |
| 220       | Close Bracket                   | ]     | ]             |
| 221       | Single Quote                    | '     | '             |
| 222       | Back Quote                      | \`    | \`            |

#### Example
    hotKey.add("CTRL+SPACE", ...);
    hotKey.add("SLASH", ...);
    hotKey.add("SHIFT+;", ...);

### Special Keys

#### ALL
    hotKey.add("ALL", ...);

This hot key will be call when any key is down.
And it doesn't prevent browser's default behavior, even the setting `preventDefault` is true.

## Settings
| Name           | Default Value | Description                                    |
|----------------|:-------------:|------------------------------------------------|
| preventDefault | false         | if true, prevent browser's default behavior |
| metaToCtrl     | false         | if true, change the key `META` to `CTRL`.<br>(So you don't have to add both `CTRL+C` and `META+C` hot key for support Windows and Mac)<br>(just add `CTRL+C` hot key and setup `metaToCtrl` to true) |
| noNumpadNum    | false         | if true, change the key `NUMPAD-0~9` to `0~9`<br>(So you don't have to add both `CTRL+0` and `CTRL+NUMPAD-0`, only CTRL+0) |

## Event Parameter
Event Parameter is just `KeyboardEvent` from Browser. But, we add some data.

| Name               | Description                             |
|--------------------|-----------------------------------------|
| e.which, e.keyCode | the code of key which was down          |
| e.keyString        | the name of key was down (without `CTRL+`, `META+` and etc like just `A`) |
| e.keyFullString    | the full name of key was down (with `CTRL+`, `META+` and etc like `CTRL+A`) |

## License
MIT License
Author: WebEngine (TaeSang Cho)
