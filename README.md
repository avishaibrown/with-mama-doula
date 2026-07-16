# With Mama Doula

A Vite and React website for With Mama doula, a birth and postpartum companionship practice inspired by Michel Odent's idea of `para mama`: being with the mother.

## Tech Stack

- React 18
- Vite 6
- Lucide React icons
- Vercel Analytics and Speed Insights
- Plain CSS with a black-and-white editorial visual system in `src/index.css`

## Project Structure

```text
src/
├── components/
│   ├── common/
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   └── sections/
│       ├── About.jsx
│       ├── BirthSettings.jsx
│       ├── Contact.jsx
│       ├── FAQ.jsx
│       ├── Hero.jsx
│       ├── Package.jsx
│       ├── Philosophy.jsx
│       ├── Process.jsx
│       └── Services.jsx
├── data/
│   └── content.js
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Customization Checklist

- Update `src/data/content.js` with final contact details, Michelle's credentials, service area nuance, package availability, and real client language when available.
- Replace the placeholder Formspree endpoint in `src/components/sections/Contact.jsx`.
- Update page metadata in `index.html`.
- Swap the remote black-and-white imagery in `src/index.css` for final documentary-style brand photography.

## Scripts

- `npm run dev` starts the local Vite server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint.
