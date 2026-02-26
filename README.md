# ⚓ Battleship (5×5)

A classic naval battle board game implemented in React with responsive design and multiple difficulty levels.

## About the Project

**Version:** 1.0.0  
**License:** [MIT License](LICENSE)  
**Authors:** Battleship React Game Contributors  
**Stack:** TypeScript + React + Vite

### Core Technologies

- **React 19** - UI library for building user interfaces
- **TypeScript 5.9** - JavaScript with static typing
- **Vite 7** - next-generation build tool
- **Tailwind CSS 4** - utility-first CSS framework
- **Framer Motion 12** - animation library
- **React Router 7** - client-side routing
- **Zustand 5** - state management
- **React Hook Form 7** - form state management
- **Yup 1.7** - schema validation library

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Serhii5555/battleship-react-game
cd battleship-react-game
```

### 2. Install Dependencies

```bash
cd battleship
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

The application will be available at: `http://localhost:5173` (port may vary)

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run in development mode with HMR (Hot Module Replacement) |
| `npm run build` | Build the project for production |
| `npm run lint` | Check code with ESLint |
| `npm run preview` | Preview the built project |

## Project Structure

```
src/
├── assets/              # Media files and static resources
├── components/          # Reusable React components
│   ├── Container.tsx
│   ├── GameButton.tsx
│   ├── GameResultModal.tsx
│   ├── GameTimer.tsx
│   ├── HeaderText.tsx
│   ├── PageComponent.tsx
│   ├── SelectDropdown.tsx
│   └── SubText.tsx
├── constants/           # Application constants
│   └── difficulties.ts   # Game difficulty levels
├── context/             # React Context for global state
│   └── GameSettingsContext.tsx
├── hooks/               # Custom React hooks
│   └── useGame.tsx      # Core game logic
├── pages/               # Application pages
│   ├── GamePage.tsx     # Game page
│   ├── SettingsPage.tsx # Settings page
│   ├── StartPage.tsx    # Start/welcome page
│   └── UserPage.tsx     # User profile page
├── router/              # Routing configuration
│   └── AppRouter.tsx
├── store/               # Zustand state store
│   └── gameStore.ts
├── styles/              # Global styles
│   └── global.css
├── App.tsx              # Main application component
└── main.tsx             # Application entry point

public/                  # Static files
```

## Configuration

### TypeScript

The project uses TypeScript with the following configuration:
- **Version:** ~5.9.3
- **Target:** ES2020
- **Module:** ESNext
- **JSX:** react-jsx

Configuration files:
- `tsconfig.json` - base configuration
- `tsconfig.app.json` - application configuration
- `tsconfig.node.json` - Node.js scripts configuration

### ESLint

The project uses ESLint for code quality assurance:
- **Version:** 9.36.0
- **Config File:** `eslint.config.js`

Run code check:
```bash
npm run lint
```

### Vite

Vite configuration is located in `vite.config.ts`:
- React plugin for JSX/TSX
- Tailwind CSS integration
- Production optimization

## Dependencies

### Production Dependencies

- `@hookform/resolvers` - integration with React Hook Form
- `@tailwindcss/vite` - Tailwind CSS Vite integration
- `framer-motion` - animation library
- `lucide-react` - icon set
- `react` - core library
- `react-dom` - DOM manipulation
- `react-hook-form` - form state management
- `react-router-dom` - client-side routing
- `yup` - schema validation
- `zustand` - state management

### Development Dependencies

- `@types/react` - TypeScript types for React
- `@types/react-dom` - TypeScript types for React DOM
- `@types/node` - TypeScript types for Node.js
- `@vitejs/plugin-react` - Vite React plugin
- `autoprefixer` - CSS vendor prefix processing
- `eslint` and plugins - code linting
- `postcss` - CSS processing
- `tailwindcss` - CSS framework
- `typescript` - static typing
- `vite` - build tool

## License and Attribution

### License

This project is distributed under the **MIT License**.

Full license text: [LICENSE](LICENSE)

### Attribution

**Copyright © 2026 Battleship React Game Contributors**

All rights reserved.

### Dependencies and their Licenses

The project uses numerous open-source libraries. A complete list of dependencies and their licenses is available in:

[DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md)

## Quality Assurance

### Dependency License Verification

All project dependencies have been verified for license compatibility using the **license-checker** tool.

Verification results are recorded in [DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md).

All used dependencies have compatible licenses (MIT, Apache-2.0, etc.) and can be used in both commercial and non-commercial projects.

## Version Control

The project uses Git for version control:

```bash
# View history
git log

# Check current status
git status
```

## Getting Started

1. Install dependencies: `npm install`
2. Run in development mode: `npm run dev`
3. Review dependencies documentation: [DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md)
4. Comply with MIT license terms when distributing

---

**Last Updated:** February 2026
