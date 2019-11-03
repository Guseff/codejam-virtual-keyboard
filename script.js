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
  {code: 'Backquote', label: [['\`','\`'],['ё','Ё']]},
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
  {code: 'Equal', label: '\='},
  {code: 'Backspace', label: 'DEL', ext: 'del'},
  
  {code: 'Tab', label: 'Tab', ext: 'tab'},
  {code: 'KeyQ', label: [['q','Q'],['й','Й']]},
  {code: 'KeyW', label: [['w','W'],['ц','Ц']]},
  {code: 'KeyE', label: [['e','E'],['у','У']]},
  {code: 'KeyR', label: [['r','R'],['к','К']]},
  {code: 'KeyT', label: [['t','T'],['е','Е']]},
  {code: 'KeyY', label: [['y','Y'],['н','Н']]},
  {code: 'KeyU', label: [['u','U'],['г','Г']]},
  {code: 'KeyI', label: [['i','I'],['ш','Ш']]},
  {code: 'KeyO', label: [['o','O'],['щ','Щ']]},
  {code: 'KeyP', label: [['p','P'],['з','З']]},
  {code: 'BracketLeft', label: [['\{','\{'],['х','Х']]},
  {code: 'BracketRight', label: [['\}','\}'],['ъ','Ъ']]},
  {code: 'Backslash', label: '\\', ext: 'tab'},
  
  {code: 'CapsLock', label: 'Caps', ext: 'caps'},
  {code: 'KeyA', label: [['a','A'],['ф','Ф']]},
  {code: 'KeyS', label: [['s','S'],['ы','Ы']]},
  {code: 'KeyD', label: [['d','D'],['в','В']]},
  {code: 'KeyF', label: [['f','F'],['а','А']]},
  {code: 'KeyG', label: [['g','G'],['п','П']]},
  {code: 'KeyH', label: [['h','H'],['р','Р']]},
  {code: 'KeyJ', label: [['j','J'],['о','О']]},
  {code: 'KeyK', label: [['k','K'],['л','Л']]},
  {code: 'KeyL', label: [['l','L'],['д','Д']]},
  {code: 'Semicolon', label: [['\;','\;'],['ж','Ж']]},
  {code: 'Quote', label: [['\'','\''],['э','Э']]},
  {code: 'Enter', label: 'Enter', ext: 'enter'},

  {code: 'ShiftLeft', label: 'Shift', ext: 'l-shift'},
  {code: 'KeyZ', label: [['z','Z'],['я','Я']]},
  {code: 'KeyX', label: [['x','X'],['ч','Ч']]},
  {code: 'KeyC', label: [['c','C'],['с','С']]},
  {code: 'KeyV', label: [['v','V'],['м','М']]},
  {code: 'KeyB', label: [['b','B'],['и','И']]},
  {code: 'KeyN', label: [['n','N'],['т','Т']]},
  {code: 'KeyM', label: [['m','M'],['ь','Ь']]},
  {code: 'Comma', label: [['\,','\,'],['б','Б']]},
  {code: 'Period', label: [['\.','\.'],['ю','Ю']]},
  {code: 'Slash', label: [['\/','\/'],['.','.']]},
  {code: 'ArrowUp', label: '&uarr;', ext: 'arr-up'},
  {code: 'ShiftRight', label: 'Shift', ext: 'r-shift'},

  {code: 'ControlLeft', label: 'Ctrl', ext: 'service'},
  {code: 'MetaLeft', label: 'Win', ext: 'service'},
  {code: 'AltLeft', label: 'Alt', ext: 'service'},
  {code: 'Space', label: ' ', ext: 'space'}, 
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
  if (e.code == 'ShiftLeft' && (e.ctrlKey || e.metaKey)) {
    if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
    renderKey(keys);
  }

  textarea.value += text;
  
  let key = document.getElementById(e.code);
  if (key) anime(key, 'active');
}

function anime(el, cl) {
  el.classList.add(cl);
  setTimeout(() => el.classList.remove(cl), 300);
}