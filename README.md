# boiler-plate-react

React 19 + TypeScript boilerplate built with Vite, React Router and CSS Modules.

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
```

## Project structure

```
src/
├── app/                  # App wiring
│   ├── App.tsx           # RouterProvider
│   ├── router.tsx        # Route tree (pages are lazy-loaded)
│   └── routes.ts         # Page paths, labels and lazy imports
├── components/           # Shared components, used by more than one page
│   ├── Button/
│   ├── Layout/           # Navbar + <Outlet />
│   ├── Navbar/           # Preloads a page chunk on hover/focus
│   └── PageLoader/
├── pages/                # One folder per page
│   ├── Home/
│   │   ├── HomePage.tsx
│   │   ├── HomePage.module.css
│   │   └── components/   # Components used only by this page
│   ├── About/
│   └── NotFound/
├── styles/global.css     # Design tokens and base element styles
├── assets/
└── main.tsx
```

### Conventions

- **One folder per component**: `Name/Name.tsx` + `Name/Name.module.css`.
- **Shared vs. page-only**: a component starts in `pages/<Page>/components/`
  and moves to `src/components/` once a second page needs it.
- **No barrel files** (`index.ts` re-exports). Import files directly, e.g.
  `import Button from '@/components/Button/Button'`, so each page chunk only
  pulls in what it uses.
- **`@/` alias** points to `src/`.

### Adding a page

1. Create `src/pages/Contact/ContactPage.tsx` with a default export.
2. Add it to `routes` in `src/app/routes.ts` (and to `navRoutes` to show it in
   the navbar).
3. Add a route entry in `src/app/router.tsx`:
   `{ path: routes.contact.path, lazy: lazyPage(routes.contact.load) }`.

Each page is built as its own chunk and loaded on first visit, or earlier when
its navbar link is hovered or focused.

## Claude Code skills

Project skills live in `.claude/skills/` (pinned in `skills-lock.json`):

- `vercel-react-best-practices`: React performance guidelines from Vercel
- `frontend-design`: guidance for distinctive UI design
