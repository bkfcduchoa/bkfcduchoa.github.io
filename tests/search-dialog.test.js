// Checks the search dialog script (assets/js/search.js) against a minimal fake DOM.
// Run with `node --test tests/*.test.js`; no dependencies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'assets', 'js', 'search.js'), 'utf8');

function fakeElement(tag) {
  return {
    tagName: String(tag || 'div').toUpperCase(),
    children: [],
    textContent: '',
    className: '',
    appendChild(child) {
      this.children.push(child);
      return child;
    },
    replaceChildren() {
      this.children = [];
    },
    closest() {
      return null;
    },
  };
}

// Loads the script with one search dialog at (100, 50)-(500, 450) and returns its handles.
function setup(index) {
  const input = Object.assign(fakeElement('input'), {
    value: '',
    listeners: {},
    addEventListener(type, fn) {
      this.listeners[type] = fn;
    },
    focus() {},
    select() {},
  });
  const list = Object.assign(fakeElement('ul'), { querySelector: () => null });
  const status = fakeElement('p');
  const form = { addEventListener() {} };
  const dialog = Object.assign(fakeElement('dialog'), {
    open: false,
    showModal() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    getAttribute: () => '/index.json',
    getBoundingClientRect: () => ({ left: 100, right: 500, top: 50, bottom: 450 }),
    querySelector(sel) {
      return { input, '.search-results': list, '.search-status': status, form }[sel];
    },
  });
  const listeners = {};
  const document = {
    getElementById: (id) => (id === 'search' ? dialog : null),
    createElement: fakeElement,
    addEventListener(type, fn) {
      listeners[type] = fn;
    },
  };
  const fetch = () =>
    Promise.resolve({ ok: true, json: () => Promise.resolve(index) });
  vm.runInNewContext(source, { document, fetch, window: {} });
  return { dialog, input, list, listeners };
}

function clickOn(target, x, y) {
  return { target, clientX: x, clientY: y };
}

test('a click on the backdrop closes the dialog', () => {
  const { dialog, listeners } = setup([]);
  dialog.open = true;
  listeners.click(clickOn(dialog, 20, 20));
  assert.equal(dialog.open, false);
});

test('a click on the dialog itself (scrollbar, padding) keeps it open', () => {
  const { dialog, listeners } = setup([]);
  dialog.open = true;
  listeners.click(clickOn(dialog, 495, 200));
  assert.equal(dialog.open, true);
});

test('the snippet lines up with the match in decomposed (NFD) text', async () => {
  const filler = 'Bài toán hôm nay rất hay và có nhiều điều thú vị để học hỏi thêm. '.normalize('NFD');
  const content = filler.repeat(3) + 'Áp dụng bất đẳng thức Cauchy.'.normalize('NFD');
  const opener = { closest: (sel) => (sel === '[data-search-open]' ? {} : null) };
  const { input, list, listeners } = setup([{ title: 'Bài', url: '/p/', content }]);
  listeners.click({ target: opener });
  await new Promise((resolve) => setImmediate(resolve));
  input.value = 'cauchy';
  input.listeners.input();
  assert.equal(list.children.length, 1);
  const snippet = list.children[0].children[0].children[2].textContent;
  assert.match(snippet, /bất đẳng thức Cauchy/);
});
