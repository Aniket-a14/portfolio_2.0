# Wizard Portfolio Terminal

This is an interactive portfolio built with [Next.js](https://nextjs.org), featuring a terminal-inspired UI, animated boot sequence, and modern design. Explore projects, skills, and more using terminal commands.

## Features

- **Animated Boot Loader:** Simulates a system boot with progress bar and system info.
- **Terminal UI:** Type commands like `help`, `about`, `projects`, `skills`, `contact`, `education`, `resume`, `sudo`, and `clear` to interact.
- **Responsive Design:** Optimized for desktop and mobile.
- **3D Tilted Card:** Showcases profile with interactive effects.
- **Modern Stack:** Next.js App Router, Tailwind CSS, Framer Motion, Radix UI, and custom components.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the main page by modifying [`app/page.js`](app/page.js). The app auto-updates as you edit files.

## Project Structure

```
app/
  Components/
    Body.js
    Footer.js
    Loader.js
    Navbar.js
    Terminal.js
  globals.css
  layout.js
  page.js
components/
  ui/
    button.jsx
    sheet.jsx
    TiltedCard.jsx
public/
  favicon.ico
  profile.jpeg
```

## Terminal Commands

- `help` – List available commands
- `about` – Info about Aniket Saha
- `projects` – Featured projects with live links
- `skills` – Technical skills overview
- `contact` – Contact and social info
- `education` – Education and certifications
- `resume` – Download resume
- `sudo` – Fun developer stats & easter eggs
- `clear` – Clear terminal output

## Fonts

Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font).

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## License

© 2025 Aniket Saha.
