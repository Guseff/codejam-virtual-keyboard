const keys = [
  { code: 'Backquote', label: [['`', '`'], ['ё', 'Ё']] },
  { code: 'Digit1', label: '1' },
  { code: 'Digit2', label: '2' },
  { code: 'Digit3', label: '3' },
  { code: 'Digit4', label: '4' },
  { code: 'Digit5', label: '5' },
  { code: 'Digit6', label: '6' },
  { code: 'Digit7', label: '7' },
  { code: 'Digit8', label: '8' },
  { code: 'Digit9', label: '9' },
  { code: 'Digit0', label: '0' },
  { code: 'Minus', label: '-' },
  { code: 'Equal', label: '=' },
  { code: 'Backspace', label: 'DEL', ext: 'del' },

  { code: 'Tab', label: 'Tab', ext: 'tab' },
  { code: 'KeyQ', label: [['q', 'Q'], ['й', 'Й']] },
  { code: 'KeyW', label: [['w', 'W'], ['ц', 'Ц']] },
  { code: 'KeyE', label: [['e', 'E'], ['у', 'У']] },
  { code: 'KeyR', label: [['r', 'R'], ['к', 'К']] },
  { code: 'KeyT', label: [['t', 'T'], ['е', 'Е']] },
  { code: 'KeyY', label: [['y', 'Y'], ['н', 'Н']] },
  { code: 'KeyU', label: [['u', 'U'], ['г', 'Г']] },
  { code: 'KeyI', label: [['i', 'I'], ['ш', 'Ш']] },
  { code: 'KeyO', label: [['o', 'O'], ['щ', 'Щ']] },
  { code: 'KeyP', label: [['p', 'P'], ['з', 'З']] },
  { code: 'BracketLeft', label: [['{', '{'], ['х', 'Х']] },
  { code: 'BracketRight', label: [['}', '}'], ['ъ', 'Ъ']] },
  { code: 'Backslash', label: '\\', ext: 'tab' },

  { code: 'CapsLock', label: 'Caps', ext: 'caps' },
  { code: 'KeyA', label: [['a', 'A'], ['ф', 'Ф']] },
  { code: 'KeyS', label: [['s', 'S'], ['ы', 'Ы']] },
  { code: 'KeyD', label: [['d', 'D'], ['в', 'В']] },
  { code: 'KeyF', label: [['f', 'F'], ['а', 'А']] },
  { code: 'KeyG', label: [['g', 'G'], ['п', 'П']] },
  { code: 'KeyH', label: [['h', 'H'], ['р', 'Р']] },
  { code: 'KeyJ', label: [['j', 'J'], ['о', 'О']] },
  { code: 'KeyK', label: [['k', 'K'], ['л', 'Л']] },
  { code: 'KeyL', label: [['l', 'L'], ['д', 'Д']] },
  { code: 'Semicolon', label: [[';', ';'], ['ж', 'Ж']] },
  { code: 'Quote', label: [['\'', '\''], ['э', 'Э']] },
  { code: 'Enter', label: 'Enter', ext: 'enter' },

  { code: 'ShiftLeft', label: 'Shift', ext: 'l-shift' },
  { code: 'KeyZ', label: [['z', 'Z'], ['я', 'Я']] },
  { code: 'KeyX', label: [['x', 'X'], ['ч', 'Ч']] },
  { code: 'KeyC', label: [['c', 'C'], ['с', 'С']] },
  { code: 'KeyV', label: [['v', 'V'], ['м', 'М']] },
  { code: 'KeyB', label: [['b', 'B'], ['и', 'И']] },
  { code: 'KeyN', label: [['n', 'N'], ['т', 'Т']] },
  { code: 'KeyM', label: [['m', 'M'], ['ь', 'Ь']] },
  { code: 'Comma', label: [[',', ','], ['б', 'Б']] },
  { code: 'Period', label: [['.', '.'], ['ю', 'Ю']] },
  { code: 'Slash', label: [['/', '/'], ['.', '.']] },
  { code: 'ArrowUp', label: '&uarr;', ext: 'arr-up' },
  { code: 'ShiftRight', label: 'Shift', ext: 'r-shift' },

  { code: 'ControlLeft', label: 'Ctrl', ext: 'service' },
  { code: 'MetaLeft', label: 'Win', ext: 'service' },
  { code: 'AltLeft', label: 'Alt', ext: 'service' },
  { code: 'Space', label: ' ', ext: 'space' },
  { code: 'AltRight', label: 'Alt', ext: 'service' },
  { code: 'ArrowLeft', label: '&larr;' },
  { code: 'ArrowDown', label: '&darr;' },
  { code: 'ArrowRight', label: '&rarr;' },
  { code: 'ControlRight', label: 'Ctrl', ext: 'service' },
];

const createWorkspace = () => {
  const el = document.createElement('div');
  el.classList.add('workspace');

  return el;
};

const createTextarea = () => {
  const el = document.createElement('textarea');
  el.setAttribute('id', 'textarea');
  el.setAttribute('cols', '111');
  el.setAttribute('rows', '5');

  return el;
};

const createDesk = () => {
  const el = document.createElement('div');
  el.setAttribute('id', 'desk');
  el.classList.add('desk');

  return el;
};

const workspace = createWorkspace();
document.body.prepend(workspace);

const textarea = createTextarea();
const desk = createDesk();

workspace.append(textarea);
workspace.append(desk);

function renderKey(key) {
  let res;
  if (Array.isArray(key.label)) {
    if (localStorage.getItem('isEnglish') === 'true') {
      res = localStorage.getItem('isCaps') === 'false' ? key.label[0][0] : key.label[0][1];
    } else {
      res = localStorage.getItem('isCaps') === 'false' ? key.label[1][0] : key.label[1][1];
    }
  } else {
    res = key.label;
  }
  return res;
}

class Key extends HTMLElement {
  constructor(key) {
    super();
    this.setAttribute('class', 'key');
    this.setAttribute('id', key.code);
    this.setAttribute('data', key.label);
    if ('ext' in key) {
      this.classList.add(key.ext);
    }
    this.innerHTML = renderKey(key);
  }
}

function anime(el, cl) {
  el.classList.add(cl);
  setTimeout(() => el.classList.remove(cl), 300);
}

function renderKeyboard(arr) {
  arr.forEach((key) => {
    const el = document.getElementById(key.code);
    el.innerHTML = renderKey(key);
  });
}

function toggleStorageItem(item) {
  if (localStorage.getItem(item) === 'false') {
    localStorage.setItem(item, 'true');
  } else {
    localStorage.setItem(item, 'false');
  }
}

function checkCaps(id) {
  if (id !== 'CapsLock') return;

  toggleStorageItem('isCaps');
  renderKeyboard(keys);
}

function mouseHandle(e) {
  e.preventDefault();
  const kn = e.target;
  if (kn instanceof Key) {
    const id = kn.getAttribute('id');

    checkCaps(id);

    textarea.value += kn.innerText;
    anime(kn, 'tiny');
  }
}

function kbdHandle(e) {
  e.preventDefault();
  const text = e.key;

  checkCaps(text);
  if (e.code === 'ShiftLeft' && (e.ctrlKey || e.metaKey)) {
    toggleStorageItem('isEnglish');
    renderKeyboard(keys);
  }

  textarea.value += text;

  const key = document.getElementById(e.code);
  if (key) anime(key, 'active');
}

const initStorage = () => {
  if (!localStorage.getItem('isEnglish')) {
    localStorage.setItem('isEnglish', 'true');
  }
  localStorage.setItem('isCaps', 'false');
};

const createKeyboard = (kbd, arr) => {
  arr.forEach((el) => {
    const a = new Key(el);
    kbd.append(a);
  });
};

initStorage();

customElements.define('key-el', Key);
createKeyboard(desk, keys);

document.addEventListener('keydown', kbdHandle);
document.addEventListener('click', mouseHandle);
