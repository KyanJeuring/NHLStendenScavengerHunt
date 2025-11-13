# Coding Conventions

This file documents the coding style and repository conventions used in this project. It is based on the current codebase layout and patterns so new contributions remain consistent and easy to read.

## Project overview
- Frontend: React (JSX) served with Vite.
- Language: JavaScript (JSX).
- Entrypoints: `src/Main.jsx`, `src/App.jsx`.

## File & folder naming
- Use `src/` for source code and `public/` for static assets.
- React component file names: PascalCase (e.g. `Home.jsx`, `Page1.jsx`, `Header.jsx`).
- Component directories (when used) may be kebab-case or lower-case (e.g. `components/navbar/`), but component files inside should remain PascalCase.
- CSS files may live alongside their components/pages (e.g. `src/pages/home/home.css`).

## React components
- Use functional components and hooks (no class components used in repository).
- Default-export the main component from the file.
- Component function name should match the filename (e.g. `export default function Header() {}` in `Header.jsx`).
- Keep components small and focused; split into subcomponents when a component grows large.

## Imports
- Prefer extensionless imports for local modules (e.g. `import Home from './pages/Home'`).
- Order imports like: 1) external packages, 2) absolute aliases (if used), 3) local modules.
- Use relative paths within `src/`.

## Styling
- Project uses plain `.css` files.
- Prefer component-scoped CSS files placed next to the component/page.
- Use clear, semantic class names that reflect the component (e.g. `.nav`, `.nav-link`).

## CSS colors

- Define color tokens as CSS variables in `:root` (the project currently defines these in `src/index.css`).
- Store RGB components as comma-separated values so you can use them with `rgb()` and `rgba()`/`rgb(var(--token))` and `rgba(var(--token), 0.8)` for alpha:

```css
:root {
	--nhl_stenden_corp_blue: 0, 90, 167;
	--color-text: 33, 33, 33;
}

/* usage */
body { color: rgb(var(--color-text)); }
.card { background: rgba(var(--nhl_stenden_corp_blue), 0.95); }
```

- Naming: prefer semantic tokens (e.g. `--color-text`, `--color-bg`, `--color-primary`, `--color-accent`) and keep brand-specific tokens if useful (`--nhl_stenden_corp_blue`). Use kebab-case for variable names.
- Keep tokens in `src/index.css` (or a central `variables.css`) and reference them from component CSS files instead of hardcoding hex/RGB values.
- When introducing a new color, add both a semantic token and (optionally) a brand token if it is part of the design system. Example:

```css
:root {
	--color-primary: var(--nhl_stenden_corp_blue);
	--nhl_stenden_corp_blue: 0, 90, 167;
}
```

- Prefer variables over literal hex codes in component styles. If you must use hex for a one-off, document the reason.
- Use `rgb(var(--token))` for opaque colors and `rgba(var(--token), <alpha>)` for semitransparent overlays or hover states.


## Accessibility
- Prefer semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Ensure links and buttons are keyboard accessible and use ARIA attributes when necessary.
- Use `NavLink` from `react-router-dom` to indicate active navigation state rather than purely CSS hacks.

## Brace style (curly brackets)

- Note: this repository intentionally deviates from the NHL Stenden brace convention. Use the opening brace on the same line as the function or control statement. Examples:

	Preferred (this repo):

	```js
	function test() {
		return;
	}
	```

	NHL Stenden style (not used here):

	```js
	function test
	{
		return;
	}
	```

- Apply the same same-line-brace rule for `if`, `for`, `while`, and other blocks:

	```js
	if (condition) {
		doSomething();
	}
	```
