---
sidebar_position: 2
---

# Getting Started

Get up and running with the Battleship game in minutes!

## Installation

### System Requirements

- **Node.js** 20.0 or above
- **npm** 10.0 or above (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Serhii5555/battleship-react-game.git
cd battleship-react-game
```

### Step 2: Install Dependencies

Navigate to the battleship directory and install dependencies:

```bash
cd battleship
npm install
```

### Step 3: Start the Development Server

```bash
npm run start
```

The application will open in your browser at `http://localhost:5173`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Available Scripts

- **`npm run start`** - Start the development server
- **`npm run build`** - Create a production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run type-check`** - Run TypeScript type checking

## First Game

Once the server is running:

1. **Select Difficulty** - Choose from Easy, Medium, or Hard
2. **View the Board** - See your 5×5 grid with your ships placed
3. **Make Shots** - Click cells on the opponent's board to attack
4. **Win** - Sink all of the opponent's ships to win!

## Game Settings

The application includes a Settings page where you can:

- Adjust game difficulty
- Configure other game preferences
- Manage cookies and privacy settings

## User Account

Create a user account to:

- Track your game statistics
- Save your preferences
- Maintain a game history

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Installation Fails

Try clearing your npm cache:

```bash
npm cache clean --force
npm install
```

### Application Won't Start

Ensure you have Node.js 20+ installed:

```bash
node --version
```

For more issues, see the [Troubleshooting](troubleshooting/common-issues) page.

## Next Steps

- Read the [Game Rules](game-rules) for detailed gameplay instructions
- Explore the [Features](features) to see what else the game offers
- Check [Project Structure](development/project-structure) if you want to understand the codebase
