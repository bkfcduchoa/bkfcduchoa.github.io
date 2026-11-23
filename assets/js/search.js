// Search dialog over the site's JSON index (/index.json), loaded on first open.
// Matching ignores case and Vietnamese diacritics; every word of the query must match.
(function () {
  var dialog = document.getElementById('search');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var input = dialog.querySelector('input');
  var list = dialog.querySelector('.search-results');
  var status = dialog.querySelector('.search-status');
  var indexUrl = dialog.getAttribute('data-index');
  var MAX = 20;
  var items = null;
  var loading = null;

  function fold(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd');
  }

  function load() {
    if (!loading) {
      loading = fetch(indexUrl, { headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then(function (data) {
          items = (Array.isArray(data) ? data : []).map(function (d) {
            return {
              d: d,
              title: fold(d.title),
              body: fold([d.summary, (d.tags || []).join(' '), (d.authors || []).join(' '), d.content].join(' '))
            };
          });
          render();
        })
        .catch(function () {
          loading = null;
          status.textContent = 'Không tải được dữ liệu tìm kiếm. Hãy thử lại.';
        });
    }
    return loading;
  }

  function snippet(d, words) {
    var text = d.content || d.summary || '';
    var folded = fold(text);
    var at = -1;
    for (var i = 0; i < words.length && at < 0; i++) at = folded.indexOf(words[i]);
    if (at < 0) return d.summary || text.slice(0, 140);
    var start = Math.max(0, at - 50);
    return (start ? '… ' : '') + text.slice(start, start + 160).trim() + ' …';
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function render() {
    var q = fold(input.value).trim();
    list.replaceChildren();
    if (!items) {
      status.textContent = 'Đang tải…';
      return;
    }
    if (!q) {
      status.textContent = 'Nhập từ khoá để tìm bài viết và sự kiện.';
      return;
    }
    var words = q.split(/\s+/);
    var hits = items
      .filter(function (it) {
        return words.every(function (w) {
          return it.title.indexOf(w) >= 0 || it.body.indexOf(w) >= 0;
        });
      })
      .map(function (it) {
        var score = words.filter(function (w) { return it.title.indexOf(w) >= 0; }).length;
        return { it: it, score: score };
      })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, MAX);

    status.textContent = hits.length ? hits.length + ' kết quả' : 'Không có kết quả cho “' + input.value.trim() + '”';
    hits.forEach(function (h) {
      var d = h.it.d;
      var li = el('li');
      var a = el('a', 'search-hit');
      a.href = d.url;
      a.appendChild(el('span', 'search-title', d.title));
      a.appendChild(el('span', 'search-meta', [d.section, d.date].filter(Boolean).join(' · ')));
      a.appendChild(el('span', 'search-snippet', snippet(d, words)));
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function open() {
    if (dialog.open) return;
    dialog.showModal();
    input.focus();
    input.select();
    load();
    render();
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-search-open]')) open();
    else if (e.target.closest('[data-search-close]') || e.target === dialog) dialog.close();
  });

  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.key === '/' && !typing) || (e.key.toLowerCase() === 'k' && (e.ctrlKey || e.metaKey))) {
      e.preventDefault();
      open();
    }
  });

  input.addEventListener('input', render);

  // Enter opens the first result.
  dialog.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var first = list.querySelector('a');
    if (first) window.location.href = first.href;
  });
})();
