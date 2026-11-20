---
title: Courses
type: landing

# Every course under `courses/` uses the docs layout (sidebar, breadcrumbs, table of contents).
cascade:
  - target:
      path: '{/courses/*/**}'
    type: docs
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: courses
    content:
      title: Courses
      # Only the course sections (type docs, from the cascade above), not this landing page itself
      page_type: docs
      filters:
        folders:
          - courses
        kinds:
          - section
    design:
      # Local view (layouts/_partials/views/compact.html), as the old course list
      view: compact
---
