---
sidebar_position: 1
---

# Common Issues and Troubleshooting

Solutions to common problems you might encounter.

## Installation and Setup Issues

### Cannot find Node.js or npm

**Problem:** Command not found error when running `node` or `npm`

**Solutions:**

1. [Download and install Node.js](https://nodejs.org/) - Ensure you install a version 20.0 or higher
2. Restart your terminal after installation
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### npm install fails with permission errors

**Problem:** `EACCES` errors when running `npm install`

**Windows Solution:**

```bash
npm install --no-optional
```

**Mac/Linux Solution:**

```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

### Dependencies won't install

**Problem:** Packages fail to install or stuck at 100%

**Solutions:**

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
2. Delete lock files and node_modules:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Update npm to latest version:
   ```bash
   npm install -g npm@latest
   ```
4. Try with different registry:
   ```bash
   npm install --registry https://registry.npmjs.org/
   ```

## Development Server Issues

### Port 5173 already in use

**Problem:** "port already in use" error when starting dev server

**Automatic Solution:**
Vite will automatically use the next available port (5174, 5175, etc.)

**Manual Solution - Kill the process:**

Windows:

```bash
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

Mac/Linux:

```bash
lsof -ti:5173 | xargs kill -9
```

**Custom Port:**

```bash
npm run start -- --port 3000
```

### Cannot GET localhost:5173

**Problem:** Blank page or 404 when accessing the dev server

**Solutions:**

1. Ensure dev server is running:
   ```bash
   npm run start
   ```
2. Check the URL - should be `http://localhost:5173`
3. Check browser console for errors (F12)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Hard refresh (Ctrl+Shift+R)

### Hot Module Replacement (HMR) not working

**Problem:** Changes don't automatically refresh in browser

**Solutions:**

1. Check browser console for errors
2. Restart the dev server:
   ```bash
   npm run start
   ```
3. Clear browser cache
4. Check for syntax errors in changed files
5. Restart your IDE

## Build Issues

### Build command fails

**Problem:** `npm run build` produces errors

**Solutions:**

1. Check for TypeScript errors:
   ```bash
   npm run type-check
   ```
2. Fix any reported issues
3. Clear build artifacts:
   ```bash
   npm run clear
   ```
4. Rebuild:
   ```bash
   npm run build
   ```

### Production build is too large

**Problem:** `dist/` folder is larger than expected

**Solutions:**

1. Check for large dependencies in `package.json`
2. Remove unused packages
3. Analyze bundle:
   ```bash
   npm run build -- --analyze
   ```

### TypeScript compilation errors on build

**Problem:** Build fails but dev server works fine

**Solutions:**

1. Run type check:
   ```bash
   npm run type-check
   ```
2. View all errors and fix them
3. Check `tsconfig.json` configuration
4. Ensure all dependencies have type definitions

## Runtime Issues

### Game won't load

**Problem:** Blank screen or loading forever

**Solutions:**

1. Open browser console (F12)
2. Look for error messages
3. Check network tab for failed requests
4. Try clearing localStorage:
   ```javascript
   // In browser console
   localStorage.clear();
   location.reload();
   ```
5. Restart dev server

### Ships not displayed correctly

**Problem:** Ships appear in wrong positions or multiple places

**Solutions:**

1. Clear browser cache
2. Close all browser tabs with the game
3. Restart the dev server
4. Hard refresh (Ctrl+Shift+R)
5. Try in a private/incognito window

### Game state not updating

**Problem:** Moves don't register or board doesn't update

**Solutions:**

1. Check console for JavaScript errors (F12)
2. Verify game is running (timer should be counting)
3. Check if it's actually your turn
4. Reload the page
5. Check Zustand store in React DevTools

### Performance is slow

**Problem:** Game is sluggish or freezes

**Solutions:**

1. Close other browser tabs
2. Close browser extensions (especially DevTools)
3. Restart browser
4. Use Chrome incognito mode (fewer extensions)
5. Check system resources (Task Manager / Activity Monitor)
6. Update browser to latest version

## Git and Repository Issues

### Cannot clone repository

**Problem:** Git clone fails or connection timeout

**Solutions:**

```bash
# Ensure Git is installed
git --version

# Try using HTTPS instead of SSH
git clone https://github.com/Serhii5555/battleship-react-game.git

# If slow, use a specific branch
git clone -b main https://github.com/Serhii5555/battleship-react-game.git --depth 1
```

### Local changes interfere with updates

**Problem:** Cannot pull updates due to local modifications

**Solutions:**

```bash
# Stash your changes
git stash

# Pull updates
git pull

# Reapply your changes
git stash pop
```

## IDE and Editor Issues

### ESLint errors in VS Code

**Problem:** ESLint shows errors but code works

**Solutions:**

1. Install ESLint extension: `dbaeumer.vscode-eslint`
2. Restart VS Code
3. Run ESLint CLI to see issues:
   ```bash
   npm run lint
   ```
4. Fix issues or update `.eslintrc` configuration

### TypeScript errors in VS Code

**Problem:** TypeScript errors don't match command line

**Solutions:**

1. Install TypeScript extension
2. Select the workspace TypeScript version (not system):
   - Command Palette (Ctrl+Shift+P)
   - "TypeScript: Select TypeScript Version"
   - Choose "Use Workspace Version"
3. Restart VS Code

### Format on save not working

**Problem:** Files don't auto-format when saved

**Solutions:**

1. Install Prettier: `esbenp.prettier-vscode`
2. Add to VS Code `settings.json`:
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```
3. Restart VS Code

## Browser Compatibility

### Game doesn't work in Safari

**Problem:** Features work in Chrome but not Safari

**Solutions:**

1. Update Safari to latest version
2. Check for console errors (Option+Cmd+I)
3. Disable Safari extensions
4. Clear Safari cache (Develop → Empty Caches)

### Game doesn't work in Firefox

**Problem:** Issues specific to Firefox

**Solutions:**

1. Update Firefox to latest version
2. Open Developer Tools (F12)
3. Check console for errors
4. Try with extensions disabled
5. Clear Firefox cache

### Mobile responsiveness broken

**Problem:** Layout wrong on mobile devices

**Solutions:**

1. Clear mobile browser cache
2. Hard refresh (F5 or Cmd+R)
3. Restart the browser
4. Test in different browser
5. Check viewport meta tag in index.html

## Getting Help

### If issues persist:

1. **Check GitHub Issues** - Your problem might already be reported
2. **Search Documentation** - See the full docs at the project site
3. **Report the Issue** - [Create a GitHub issue](https://github.com/Serhii5555/battleship-react-game/issues)

When reporting issues, include:

```
- OS and version
- Browser and version
- Node.js version
- Exact error message
- Steps to reproduce
- What you expected to happen
```

### Useful debugging tools:

- **React DevTools** - Inspect component hierarchy
- **Redux (Zustand) DevTools** - Inspect store state
- **Browser DevTools** - Network, console, performance
- **VS Code Debugger** - Debug with breakpoints

### Command Reference

Useful commands during development:

```bash
# Development
npm run start              # Start dev server
npm run build             # Build for production
npm run preview           # Preview production build

# Quality checking
npm run lint              # Check code style
npm run type-check        # Check TypeScript types

# Maintenance
npm cache clean --force   # Clear npm cache
npm install               # Reinstall dependencies
npm update                # Update dependencies
```

### Still stuck?

Remember: most issues are solved by:

1. Restarting the dev server
2. Clearing cache (npm and browser)
3. Reinstalling dependencies
4. Clearing localStorage
5. Using a fresh browser tab

Good luck! 🍀
