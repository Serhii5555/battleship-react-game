---
sidebar_position: 2
---

# Project Structure

Understand the organization of the Battleship game codebase.

## Directory Layout

```
battleship/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   ├── constants/            # Game constants and configuration
│   ├── context/              # React Context for state management
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page components (screens)
│   ├── router/               # Routing configuration
│   ├── store/                # Zustand store (state management)
│   ├── styles/               # Global styles
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── tailwind.config.ts        # Tailwind CSS configuration
```

## Key Directories

### `/public`

Static assets that are served as-is:

- Favicon
- Images used in the game
- Other static files

### `/src`

Main source code directory containing all TypeScript/React files.

#### `/src/components`

Reusable UI components:

- `Container.tsx` - Main layout wrapper
- `GameButton.tsx` - Game action buttons
- `GameTimer.tsx` - Timer display component
- `GameResultModal.tsx` - Result display modal
- `SelectDropdown.tsx` - Dropdown selector component
- `CookieConsent.tsx` - Cookie consent banner
- `HeaderText.tsx` - Header text component
- `SubText.tsx` - Subtitle text component
- `PageComponent.tsx` - Page wrapper component

#### `/src/pages`

Full-page components representing distinct views:

- `StartPage.tsx` - Game start/menu screen
- `GamePage.tsx` - Main game screen
- `SettingsPage.tsx` - Settings configuration
- `UserPage.tsx` - User profile page

#### `/src/hooks`

Custom React hooks for logic reuse:

- `useGame.tsx` - Main game logic hook

#### `/src/store`

Zustand store files for state management:

- `gameStore.ts` - Game state (ships, board, turns)
- `cookieStore.ts` - Cookie consent state

#### `/src/context`

React Context API implementations:

- `GameSettingsContext.tsx` - Global game settings context

#### `/src/constants`

Configuration and constant values:

- `difficulties.ts` - Game difficulty levels definition

#### `/src/router`

Routing configuration:

- `AppRouter.tsx` - Route definitions and navigation setup

#### `/src/styles`

Global styling:

- `global.css` - Global CSS or Tailwind directives

#### `/src/assets`

Project images and media:

- Game graphics
- UI icons
- Logos

### `/src/App.tsx`

Main application component that:

- Renders the router
- Provides context providers
- Sets up global layout

### `/src/main.tsx`

Application entry point that:

- Mounts the React app to the DOM
- Initializes the root component

## Configuration Files

### `package.json`

Defines:

- Project metadata
- Dependencies and devDependencies
- npm scripts
- Project version

### `tsconfig.json`

TypeScript configuration including:

- Compiler options
- Module system
- Strict type checking
- Path aliases

### `vite.config.ts`

Vite build tool configuration:

- Plugin setup (React, TypeScript)
- Build options
- Development server settings

### `tailwind.config.ts`

Tailwind CSS configuration:

- Theme customization
- Color schemes
- Component extensions

### `index.html`

HTML template with:

- Root div for React mounting
- Script reference to main.tsx
- Meta tags and title

## File Naming Conventions

### Components

- **PascalCase** for component files: `GameButton.tsx`
- Component name matches file name
- One component per file (unless very related)

### Utilities and Hooks

- **camelCase** for utility files: `gameStore.ts`
- Custom hooks start with `use`: `useGame.tsx`

### CSS

- **Global styles**: `global.css`
- **Component scopes**: Use Tailwind CSS classes
- **CSS Modules**: Not used in this project

## Type Definitions

TypeScript type definitions are included in component files:

- Props interfaces
- State types
- Custom types

You'll find `*.d.ts` files if there are global type definitions.

## State Management

### Zustand Stores

Located in `/src/store/`:

- Simple, lightweight state management
- No boilerplate
- Easy to use and test

### React Context

Located in `/src/context/`:

- Used for global settings
- Complementary to Zustand

### Local Component State

- React `useState` for component-level state
- Props for passing data down

## Routing Structure

Routes are defined in `AppRouter.tsx`:

- `/` - Start page
- `/game` - Game page
- `/settings` - Settings page
- `/user` - User page

## Adding New Features

When adding new features:

1. **Create component** in `/src/components` or `/src/pages`
2. **Add logic** to hooks or store as needed
3. **Update router** if it's a new page
4. **Style with Tailwind** CSS
5. **Add types** for TypeScript safety

## Dependencies Overview

Key packages in `package.json`:

- **react** - UI library
- **react-dom** - React for web
- **react-router-dom** - Client-side routing
- **zustand** - State management
- **typescript** - Type safety
- **tailwindcss** - Utility-first CSS
- **eslint** - Code quality

## Build Output

After running `npm run build`:

- Creates `/dist` directory
- Production-ready files
- Optimized and minified
- Ready for deployment

## Debugging

### Browser DevTools

In your browser:

- React DevTools extension
- Network tab for API calls
- Console for error messages

### TypeScript

TypeScript provides compile-time error checking:

```bash
npm run type-check
```

### ESLint

Check code quality:

```bash
npm run lint
```

## Best Practices

✅ Keep components focused and single-responsibility
✅ Use TypeScript for type safety
✅ Use hooks for logic reuse
✅ Organize imports alphabetically
✅ Name files and variables descriptively
✅ Add comments to complex logic
✅ Keep styles co-located (use Tailwind classes)
