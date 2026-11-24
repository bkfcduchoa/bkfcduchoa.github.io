# BKFC THPT Đức Hòa

Repository for our website, <https://bkfcduchoa.github.io/>, for the students of THPT Đức Hòa.

Built with [Hugo](https://gohugo.io/) and a theme of its own in this repository.

## Quick start

Needs Hugo extended **0.154.5**.

```sh
hugo server                  # preview at http://localhost:1313/
hugo --gc --minify           # build into public/
node --test tests/*.test.js  # footer credit test (any recent Node, no packages)
```

## Hugo version

Hugo is pinned to 0.154.5 everywhere: it is the version in the Ubuntu 26.04 LTS archive, which
is what local builds use (`apt install hugo`). CI (`.github/workflows/publish.yaml`) installs the
same version from the official Hugo release, and Netlify reads it from `netlify.toml`. Change all
three together.

## Deployment

- **GitHub Pages:** every push to `main` builds and deploys the site through
  `.github/workflows/publish.yaml`.
- **Netlify:** the site is also deployed on [Netlify](https://www.netlify.com), which builds
  `main` with `netlify.toml`. Thanks to Netlify for hosting it on their Open Source plan; the
  footer credits GitHub Pages and Netlify on every page.

## Where things are

- `content/_index.md`: home page text (hero, subjects, about, contact), read by `layouts/home.html`.
- `content/post/`: posts, at `/post/<file name>/`. `content/event/`: events, at `/talk/<slug>/`.
- `content/authors/<slug>/_index.md`: author profiles (shown at `/author/<slug>/`); avatars in
  `assets/media/authors/`.
- `assets/media/albums/gallery/`: photos for the home page gallery.
- `config/_default/`: site settings (`params.yaml` has the footer notice and giscus comments).
- **Theme:** templates in `layouts/` (`_partials/`, `_shortcodes/`, `_markup/` hooks), styles in
  `assets/css/`, scripts in `assets/js/`.
- Shortcodes: `spoiler`, `button`, `gdocs`. Math: write `$…$` or `$$…$$`; Hugo renders it with
  KaTeX at build time.
