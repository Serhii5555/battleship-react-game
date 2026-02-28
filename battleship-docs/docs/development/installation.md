---
sidebar_position: 1
---

# Development Installation

Set up a development environment to work on the Battleship game codebase.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required

- **Node.js** 20.0 or higher - [Download here](https://nodejs.org/)
- **npm** 10.0 or higher (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### Recommended

- **Visual Studio Code** - Popular code editor
- **Git client** - GitHub Desktop or GitKraken
- **Terminal/Shell** - PowerShell, bash, or zsh

## Verify Your Installation

Check that everything is installed correctly:

```bash
node --version      # Should show v20.0.0 or higher
npm --version       # Should show 10.0.0 or higher
git --version       # Should show a version number
```

## Step 1: Clone the Repository

```bash
git clone https://github.com/Serhii5555/battleship-react-game.git
cd battleship-react-game
```

## Step 2: Navigate to the Project Directory

```bash
cd battleship
```

## Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:

- React and React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS
- ESLint and other dev tools

## Step 4: Start the Development Server

```bash
npm run start
```

This starts the Vite development server with:

- Hot Module Replacement (HMR) - Changes reflect instantly
- Fast refresh - Your changes appear immediately
- Source maps - For easy debugging

The application will be available at `http://localhost:5173`

## Development Scripts

### Running the Application

```bash
npm run start
```

Starts the development server with hot reload enabled.

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Code Quality

```bash
npm run lint
```

Runs ESLint to check code for quality issues and style violations.

```bash
npm run type-check
```

Runs TypeScript compiler to check for type errors (without generating output).

## IDE Setup

### Visual Studio Code

Recommended extensions:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **ESLint** - dbaeumer.vscode-eslint
3. **Prettier** - esbenp.prettier-vscode
4. **TypeScript Vue Plugin** - Vue.volar
5. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Troubleshooting

### Port 5173 Already in Use

Vite will automatically use the next available port. If you want to specify a different port:

```bash
npm run start -- --port 3000
```

### Dependency Installation Issues

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors

Ensure you're in the correct directory:

```bash
pwd                # Check current directory
ls package.json    # Verify package.json exists
npm install        # Reinstall if needed
```

### TypeScript Errors

Ensure TypeScript is properly installed:

```bash
npx tsc --version
npm install - save-dev typescript@latest
```

## Next Steps

Once you have the development environment set up:

1. **Explore the Code** - See [Project Structure](project-structure)
2. **Understand the Architecture** - Read [Architecture Overview](architecture)
3. **Make Changes** - Start building!

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
