# BKFC THPT Đức Hòa

Repository for our website, <https://bkfcduchoa.github.io/>.

Built with [Hugo](https://gohugo.io/) and [HugoBlox Kit](https://github.com/HugoBlox/kit),
starting from the [Academic CV template](https://github.com/HugoBlox/hugo-theme-academic-cv).

## Quick start

Needs [Hugo extended](https://gohugo.io/installation/) at the version in `hugoblox.yaml`
(`build.hugo_version`), [Go](https://go.dev/dl/) for Hugo Modules, and Node.js 22 or newer
with npm.

```sh
npm ci                          # Tailwind CSS and Pagefind
hugo server --disableFastRender # preview at http://localhost:1313/
npm run build                   # build into public/ and add the search index
```

Pushing to `main` builds and deploys the site through `.github/workflows/publish.yaml`.

## Where things are

- `content/`: pages. Posts are in `content/blog/` and events in `content/events/`; they keep
  their `/post/...` and `/talk/...` URLs through the permalinks in `config/_default/hugo.yaml`.
- `content/_index.md`: the home page sections.
- `data/authors/<slug>.yaml` and `assets/media/authors/<slug>.*`: member profiles and avatars.
- `assets/media/albums/gallery/`: photos for the home page gallery.
- `config/_default/params.yaml`: site settings (`hugoblox:`).
- `data/themes/bkfc.yaml`: the site's colour theme (HCMUT logo colours), picked by `theme.pack` in `params.yaml`.
- `layouts/`: local templates. Some port features of the old theme, such as the `compact` list
  view and the tag cloud. Others are copies of Kit templates with a fix. Each file's header
  comment says why it exists. Check the copies when you upgrade the Kit.
