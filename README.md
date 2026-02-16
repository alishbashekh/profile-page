# Aldar Project — Intern Guide

This project uses **React 19**, **Vite**, and **Tailwind CSS v4**. All interns must follow this README.

---

## Tech Stack (Compulsory)

| Tool        | Version | Purpose                    |
|------------|---------|----------------------------|
| **React**  | 19.x    | UI library                 |
| **Vite**   | 7.x     | Build tool & dev server    |
| **Tailwind CSS** | v4  | Styling (utility-first)    |

- Do **not** add other CSS frameworks (e.g. Bootstrap, MUI) unless approved.
- Use **Tailwind v4** only; avoid mixing with Tailwind v3 patterns.

---

## Folder Structure (Mandatory)

Keep this structure. Add new files inside these folders only.

```
src/
├── assets/           # Images, SVGs, fonts, static files
├── components/       # Reusable UI components
│   ├── common/       # Buttons, Input, Card, Modal, etc.
│   └── layout/       # Header, Footer, Sidebar, etc.
├── pages/            # One folder per route/screen
│   ├── Home/
│   ├── About/
│   └── ...
├── hooks/            # Custom React hooks (useAuth, useFetch, etc.)
├── utils/            # Helper functions (formatDate, validators, etc.)
├── styles/           # Extra global CSS if needed (Tailwind first)
├── App.jsx
├── main.jsx
└── index.css
```

### Rules

- **`components/`** — Small, reusable pieces. No page-level logic here.
- **`pages/`** — One folder per page; each can have its own `PageName.jsx` and `PageName.css` if needed.
- **`hooks/`** — Shared logic (data fetching, auth, form state). No JSX.
- **`utils/`** — Pure functions only. No React imports.
- **`assets/`** — Only static files. No components.

---

## Guidelines for Interns

### 1. Before You Start

- Clone the repo and run `npm install`.
- Run `npm run dev` and confirm the app opens in the browser.
- Read this README and the folder structure once.

### 2. Coding Standards

- **Components**: Use **functional components** and **hooks** only (no class components).
- **Naming**:
  - Components: `PascalCase` (e.g. `Button.jsx`, `UserCard.jsx`).
  - Folders: `PascalCase` for components/pages (e.g. `components/UserCard/`), `camelCase` for hooks/utils.
- **Files**: One main component per file. Match file name to component name (e.g. `Button.jsx` → `Button`).
- **Styling**: Use **Tailwind v4** classes. Avoid inline `style={{}}` unless necessary. No separate CSS file for a component unless agreed.

### 3. Tailwind v4 Usage

- Use `@tailwindcss/vite` (already in the project). Do not add PostCSS Tailwind config unless instructed.
- Use Tailwind classes in `className`. For repeated patterns, use `@layer components` in `index.css` or create a small component.
- Check [Tailwind v4 docs](https://tailwindcss.com/docs) when in doubt.

### 4. Git & Workflow

- Create a **branch** for your task: `feature/your-name/task-name` or `fix/your-name/bug-name`.
- Commit often with clear messages: e.g. `Add login button`, `Fix header layout on mobile`.
- Do **not** commit to `main` directly. Use merge requests/PRs after review.
- Before pushing, run `npm run build` and `npm run lint` and fix any errors.

### 5. What to Do When Stuck

1. Check this README (folder structure, tech stack).
2. Search the codebase for similar components or patterns.
3. Check official docs: [React 19](https://react.dev), [Vite](https://vite.dev), [Tailwind v4](https://tailwindcss.com/docs).
4. Ask your mentor with a short description and, if possible, a code snippet or screenshot.

### 6. Don’ts

- Don’t add new dependencies without asking.
- Don’t create random folders (e.g. `src/xyz`) — use the structure above.
- Don’t push broken builds or failing lint.
- Don’t copy-paste large blocks without understanding; keep code readable.

---

## Quick Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Summary

- **Stack**: React 19 + Vite + Tailwind v4 (compulsory).
- **Structure**: Follow the `src/` folder layout; put components in `components/`, pages in `pages/`, shared logic in `hooks/` and `utils/`.
- **Process**: Branch → code → lint & build → PR → review.

Stick to this and ask when anything is unclear.
