# Repository for codejam-virtual-keyboard task, RSSchool.

## Task description
Make a virtual keyboard in Vanilla JS from 'empty' html file.
https://github.com/rolling-scopes-school/tasks/blob/master/tasks/codejam-virtual-keyboard.md

## What I have made
- DOM elements generation in index.html file with only `<body>` tag.
- Render virtual keyboard.
- Highlighting for corresponding virtual key when physical key is pressed.
- Switching between Russian and English language when RightCtrl + RightShift keys pressed.
- Switching between Upper and Low Case by press CapsLock key.
- Save value of current language when browser reload, but CapsLock is deactivated after reload.
- Print correspond symbols in text area by pressing physical keys or by mouse clicking on virtual keys. Enter key prints \n, DEL one deletes last printed symbol.
- Print in Upper Case when RightShift key is pressed in the same time.
- Animation for pressing keys.

## Some nuances
- Only right Shift and Ctrl keys used as controls, left ones print own codes in text area.
- Only Letter Keys change his behavior when Caps, Shift or Ctrl+Shift pressed.
- Virtual keyboard uses its own storage, so language in keyboard and Caps mode may be different from system one.