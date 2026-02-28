---
sidebar_position: 3
---

# Architecture Overview

Understand the high-level architecture and design patterns used in the Battleship game.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│              React Application Layer                │
│  ┌────────────────────────────────────────────────┐ │
│  │           App Component (App.tsx)              │ │
│  │  - Providers (Context, Zustand)               │ │
│  │  - Router Setup                                │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
    ┌────────┐     ┌──────────┐   ┌─────────┐
    │  Pages │     │Components│   │ Context │
    ├────────┤     ├──────────┤   ├─────────┤
    │ Start  │     │GameBoard │   │Settings │
    │ Game   │────▶│ GameTile │──▶│ Layout  │
    │Settings│     │ GameTimer│   │Messages │
    │ User   │     │ Modals   │   └─────────┘
    └────────┘     └──────────┘
        │               │
        └───────────────┤
                        ▼
            ┌────────────────────────┐
            │   State Management     │
            ├────────────────────────┤
            │  Zustand Stores:       │
            │  - gameStore           │
            │  - cookieStore         │
            │  - Custom Hooks        │
            └────────────────────────┘
```

## Core Concepts

### 1. Component-Based Architecture

The application is built using React components organized by responsibility:

**Page Components** (in `/pages`)

- Full-page views
- Correspond to routes
- Contain major layout logic

**Feature Components** (in `/components`)

- Reusable UI components
- Self-contained functionality
- Composable building blocks

**Example Component Hierarchy:**

```
<App>
  └─ <AppRouter>
     └─ <GamePage>
        ├─ <GameBoard>
        │  ├─ <GameTile> (multiple)
        │  └─ <GameTimer>
        └─ <GameResultModal>
```

### 2. State Management Strategy

The app uses a hybrid state management approach:

#### Zustand Stores (Global State)

Located in `/src/store/`:

**gameStore.ts**

- Game state (board, ships, turns)
- Game logic functions
- Turn management
- Win/lose conditions

**cookieStore.ts**

- Cookie consent state
- User privacy preferences

#### React Context (Settings)

Located in `/src/context/`:

**GameSettingsContext.tsx**

- Global game settings
- Difficulty selection
- Settings propagation

#### Local Component State

- React `useState` for local component data
- Form inputs
- UI state (modals, menus)

### 3. Hook-Based Logic

Custom hooks encapsulate game logic:

**useGame Hook** (`/hooks/useGame.tsx`)

- Game initialization
- Turn logic
- Ship placement
- Win/lose detection
- Game board state management

Benefits:

- Logic reuse across components
- Easier testing
- Clear separation of concerns

### 4. Routing Architecture

**React Router v7** manages navigation:

Routes defined in `AppRouter.tsx`:

```typescript
/                 → StartPage (Initial page)
/game             → GamePage (Main game play)
/settings         → SettingsPage (Configuration)
/user             → UserPage (User profile)
```

Navigation happens via:

- Route links
- Programmatic navigation
- History management

## Data Flow

### Game State Flow

```
User Action (click)
    │
    ▼
Component Event Handler
    │
    ▼
Zustand Store (gameStore)
    │
    ├─ Updates game state
    ├─ Computes new board
    └─ Returns updated state
    │
    ▼
Component Re-renders
    │
    ▼
UI Updated
```

### Example: Firing at a Target

```
User clicks a cell
    │
    ▼
<GameTile> onClick handler
    │
    ▼
gameStore.fireAtTarget(row, col)
    │
    ├─ Check if target hit
    ├─ Update opponent board
    ├─ Switch turns
    └─ Check win condition
    │
    ▼
Component subscribes to store updates
    │
    ▼
Component re-renders with new state
    │
    ▼
UI reflects shot result
```

## Key Design Patterns

### 1. Observer Pattern (Zustand)

Zustand implements the observer pattern:

- Components subscribe to store changes
- Only affected components re-render
- Efficient updates

```typescript
const gameState = gameStore(); // Subscribe to all
const { board } = gameStore(); // Subscribe to specific
```

### 2. Context Provider Pattern

GameSettingsContext provides values to consumers:

```typescript
<GameSettingsProvider>
  <App />  // All children can access settings
</GameSettingsProvider>
```

### 3. Composition Pattern

Components are composed to build complex UIs:

```typescript
<GamePage>
  <GameBoard>
    <GameTile /> ...
  </GameBoard>
  <GameTimer />
  <GameResultModal />
</GamePage>
```

### 4. Custom Hooks Pattern

Logic is extracted into reusable hooks:

```typescript
const gameState = useGame(); // Encapsulates game logic
```

## Game Board Representation

### Board Data Structure

```typescript
// Board is a 5x5 grid
type Board = Cell[][];
type Cell = {
  hasShip: boolean;
  isHit: boolean;
  ship?: ShipType;
};
```

### Ship Management

Ships stored with:

- Type (Battleship, Cruiser, Destroyer, Submarine)
- Coordinates (array of cells)
- Hit tracking (which cells are hit)

### Game State

```typescript
{
  playerBoard: Board[][]
  opponentBoard: Board[][]
  playerShips: Ship[]
  opponentShips: Ship[]
  currentTurn: 'player' | 'opponent'
  gameStatus: 'playing' | 'won' | 'lost'
  gameTime: number
  difficulty: 'easy' | 'medium' | 'hard'
}
```

## AI Opponent Logic

The AI opponent uses different strategies based on difficulty:

### Easy Mode

- Random cell selection
- No pattern recognition
- Pure chance-based gameplay

### Medium Mode

- Basic hit tracking
- Searches adjacent cells after hits
- Somewhat predictable

### Hard Mode

- Advanced hit patterns
- Efficient search algorithms
- Learns from misses
- Strategic placement analysis

## Styling Architecture

### Tailwind CSS

All styling uses Tailwind utility classes:

- No component-scoped CSS
- Consistent design tokens
- Responsive utilities built-in
- Dark mode support

Example:

```tsx
<div className="flex items-center justify-center p-4 bg-blue-500 rounded-lg">
  Tailwind styling
</div>
```

### Color Scheme

- Game board: Blue gradient
- Ships: Different colors by type
- Hits: Red highlighting
- Misses: Gray highlighting
- UI: Neutral grays and white

## Performance Considerations

### Optimizations

1. **Efficient Re-renders** - Zustand only updates subscribed components
2. **Lazy Loading** - React Router enables code splitting
3. **CSS-in-JS** - Tailwind generates only used classes
4. **Module Bundling** - Vite provides optimized builds

### Best Practices

- Avoid inline function definitions in render
- Use `useCallback` for event handlers
- Keep component trees shallow
- Memoize expensive computations

## Extensibility

### Adding New Features

**New Page:**

1. Create page component in `/pages`
2. Add route in `AppRouter.tsx`
3. Add navigation link

**New Game Mode:**

1. Extend gameStore logic
2. Create new difficulty constants
3. Implement AI strategy

**New UI Component:**

1. Create in `/components`
2. Use Tailwind for styling
3. Accept props for configuration

## Testing Strategy

While not covered in detail here, testing should focus on:

- **Unit Tests** - Store logic, utilities
- **Component Tests** - Component rendering, events
- **Integration Tests** - Full game flows
- **E2E Tests** - User interactions

## Security Considerations

- **Type Safety** - TypeScript prevents many bugs
- **Input Validation** - User actions validated before store updates
- **Cookie Handling** - Explicit consent mechanism
- **No Backend** - All logic runs client-side (privacy-focused)

## Future Architecture Improvements

Potential enhancements:

1. **Multiplayer Backend** - WebSocket server for real players
2. **Persistence** - Database for saving games
3. **Analytics** - Event tracking for game statistics
4. **Plugin System** - Extend game with plugins
5. **Monorepo** - Separate game and documentation repos

## Key Takeaways

✅ Component-based architecture ensures maintainability
✅ Zustand + Context hybrid approach is flexible
✅ Custom hooks encapsulate complex logic
✅ Tailwind CSS keeps styling simple
✅ TypeScript catches errors at compile time
✅ Vite provides fast development experience
