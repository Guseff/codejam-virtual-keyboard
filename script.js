let workspace = document.createElement('div'); 
workspace.classList.add('workspace');
document.body.prepend(workspace);

let textarea = document.createElement('textarea');
textarea.setAttribute('id', 'textarea');
textarea.setAttribute('cols', '111');
textarea.setAttribute('rows', '5');
workspace.append(textarea);

let desk = document.createElement('div');
desk.setAttribute('id', 'desk');
desk.classList.add('desk');
workspace.append(desk);

let keys = [
  {code: 'Backquote', label: '\`'},
  {code: 'Digit1', label: '1'},
  {code: 'Digit2', label: '2'},
  {code: 'Digit3', label: '3'},
  {code: 'Digit4', label: '4'},
  {code: 'Digit5', label: '5'},
  {code: 'Digit6', label: '6'},
  {code: 'Digit7', label: '7'},
  {code: 'Digit8', label: '8'},
  {code: 'Digit9', label: '9'},
  {code: 'Digit0', label: '0'},
  {code: 'Minus', label: '\-'},
  {code: 'Equal', label: '\+'},
  {code: 'Backspace', label: '\<\-', ext: 'del'},
  
  {code: 'Tab', label: 'Tab', ext: 'tab'},
  {code: 'KeyQ', label: 'q'},
  {code: 'KeyW', label: 'w'},
  {code: 'KeyE', label: 'e'},
  {code: 'KeyR', label: 'r'},
  {code: 'KeyT', label: 't'},
  {code: 'KeyY', label: 'y'},
  {code: 'KeyU', label: 'u'},
  {code: 'KeyI', label: 'i'},
  {code: 'KeyO', label: 'o'},
  {code: 'KeyP', label: 'p'},
  {code: 'BracketLeft', label: '\{'},
  {code: 'BracketRight', label: '\}'},
  {code: 'Backslash', label: '\\', ext: 'tab'},
  
  {code: 'CapsLock', label: 'Caps', ext: 'caps'},
  {code: 'KeyA', label: 'a'},
  {code: 'KeyS', label: 's'},
  {code: 'KeyD', label: 'd'},
  {code: 'KeyF', label: 'f'},
  {code: 'KeyG', label: 'g'},
  {code: 'KeyH', label: 'h'},
  {code: 'KeyJ', label: 'j'},
  {code: 'KeyK', label: 'k'},
  {code: 'KeyL', label: 'l'},
  {code: 'Semicolon', label: '\;'},
  {code: 'Quote', label: '\''},
  {code: 'Enter', label: 'Enter', ext: 'enter'},

  {code: 'ShiftLeft', label: 'Shift', ext: 'l-shift'},
  {code: 'KeyZ', label: 'z'},
  {code: 'KeyX', label: 'x'},
  {code: 'KeyC', label: 'c'},
  {code: 'KeyV', label: 'v'},
  {code: 'KeyB', label: 'b'},
  {code: 'KeyN', label: 'n'},
  {code: 'KeyM', label: 'm'},
  {code: 'Comma', label: '\,'},
  {code: 'Period', label: '\.'},
  {code: 'Slash', label: '\/'},
  {code: 'ArrowUp', label: '&uarr;', ext: 'arr-up'},
  {code: 'ShiftRight', label: 'Shift', ext: 'r-shift'},

  {code: 'ControlLeft', label: 'Ctrl', ext: 'service'},
  {code: 'MetaLeft', label: 'Win', ext: 'service'},
  {code: 'AltLeft', label: 'Alt', ext: 'service'},
  {code: 'Space', label: '_______', ext: 'space'}, 
  {code: 'AltRight', label: 'Alt', ext: 'service'},
  {code: 'ArrowLeft', label: '&larr;'},
  {code: 'ArrowDown', label: '&darr;'},
  {code: 'ArrowRight', label: '&rarr;'},
  {code: 'ControlRight', label: 'Ctrl', ext: 'service'},
];

class Key extends HTMLElement {
  constructor(key) {
    super();
    this.setAttribute('class', 'key');
    this.setAttribute('id', key.code);
    this.setAttribute('data', key.label);
    if ('ext' in key) this.classList.add(key.ext);
    this.innerHTML = `<span>${key.label}</span>`;
  }
}

customElements.define('key-el', Key);

keys.forEach(el => {
  let a = new Key(el);
  desk.append(a);
});

document.addEventListener('keydown', kbdHandle);

function kbdHandle(e) {
  e.preventDefault();
  let text = e.key;

  textarea.value += text;
  
  let key = document.getElementById(e.code);
  if (key) anime(key);
}

function anime(el) {
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 300);
}