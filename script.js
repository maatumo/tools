(function () {
  'use strict';

  const I18N = {
    ja: {
      subtitle: 'ブラウザだけで動く、ゼロ依存の小さなツール集',
      diffDesc: '2つのテキストの差分を行 / 文字単位で表示。Myers O(ND) を vanilla JS で実装。',
      meshDesc: '日本の標準地域メッシュコードを地図上に矩形表示（1次〜1/8 次）。',
      sqlDesc: '19 方言対応の SQL 整形ツール。完全オフライン動作。',
      aboutTitle: 'このサイトについて',
      aboutBody: 'いずれもビルド不要のシングルファイル系ツールです。外部 CDN や追跡コードは使っておらず、各ツールのリポジトリを clone して index.html を開けばオフラインでも動きます。',
    },
    en: {
      subtitle: 'Small zero-dependency tools that run entirely in the browser',
      diffDesc: 'Line / character diff between two texts. Myers O(ND) implemented in vanilla JS.',
      meshDesc: 'Japanese standard mesh codes plotted as rectangles on a map (1st through 1/8 grade).',
      sqlDesc: 'SQL formatter with 19 dialect support. Works fully offline.',
      aboutTitle: 'About',
      aboutBody: 'Each tool is a single-file, no-build site. No external CDN, no tracking — clone the repo and open index.html to use offline.',
    },
  };

  let lang = (navigator.language || 'ja').toLowerCase().startsWith('ja') ? 'ja' : 'en';

  function applyI18n() {
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('.lang-switch button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      applyI18n();
    });
  });

  applyI18n();
})();
