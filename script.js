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
  {code: 'KeyQ', label: [['q','Q'],['й','Й']]},
  {code: 'KeyW', label: [['w','W'],['й','Ц']]},
  {code: 'KeyE', label: [['e','E'],['й','У']]},
  {code: 'KeyR', label: [['r','R'],['й','К']]},
  {code: 'KeyT', label: [['t','T'],['й','Е']]},
  {code: 'KeyY', label: [['y','Y'],['й','Н']]},
  {code: 'KeyU', label: [['u','U'],['й','Г']]},
  {code: 'KeyI', label: [['i','I'],['й','Ш']]},
  {code: 'KeyO', label: [['o','O'],['й','Щ']]},
  {code: 'KeyP', label: [['p','P'],['й','З']]},
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
    if (Array.isArray(key.label)) {
      if (localStorage.getItem('lang') === 'en') {
        this.innerHTML = localStorage.getItem('caps') === 'false' ? key.label[0][0] : key.label[0][1];
      } else {
        this.innerHTML = localStorage.getItem('caps') === 'false' ? key.label[1][0] : key.label[1][1];
      }
    } else {
      this.innerHTML = key.label;
    }
  }
}

function renderKey(keys, lang, caps) {
  keys.forEach(key => {
    let el = document.getElementById(key.code);
    if (Array.isArray(key.label)) {
      if (localStorage.getItem('lang') === 'en') {
        el.innerHTML = localStorage.getItem('caps') === 'false' ? key.label[0][0] : key.label[0][1];
      } else {
        el.innerHTML = localStorage.getItem('caps') === 'false' ? key.label[1][0] : key.label[1][1];
      }
    } else {
      el.innerHTML = key.label;
    }
  })
}

customElements.define('key-el', Key);

if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');
localStorage.setItem('caps', 'false');

keys.forEach(el => {
  let a = new Key(el);
  desk.append(a);
});

document.addEventListener('keydown', kbdHandle);

document.addEventListener('click', mouseHandle);

function checkCaps(id) {
  if (id === 'CapsLock') {
    if (localStorage.getItem('caps') === 'false') {
      localStorage.setItem('caps', 'true');
    } else {
      localStorage.setItem('caps', 'false');
    }
    renderKey(keys);
  }
}



function mouseHandle(e) {
  e.preventDefault();
  let kn = e.target;
  if (kn instanceof Key) {
    let id = kn.getAttribute('id');

    checkCaps(id);

    textarea.value += kn.innerText;
    anime(kn, 'tiny');
  }
}

function kbdHandle(e) {
  e.preventDefault();
  let text = e.key;

  checkCaps(text);

  textarea.value += text;
  
  let key = document.getElementById(e.code);
  if (key) anime(key, 'active');
}

function anime(el, cl) {
  el.classList.add(cl);
  setTimeout(() => el.classList.remove(cl), 300);
}