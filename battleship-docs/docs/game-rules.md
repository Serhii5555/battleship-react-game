---
sidebar_position: 3
---

# Game Rules

Learn how to play Battleship!

## Overview

Battleship is a turn-based strategy game played on a 5×5 grid. The goal is to find and sink all of your opponent's ships before they sink all of yours.

## The Board

The game board is divided into:

- **Your Board (Left)** - Shows your ships and opponent's shots
- **Opponent's Board (Right)** - Shows where you have shot

Each cell in the board is 5×5 grid (25 total cells).

### Board Cell States

| State       | Symbol | Meaning                    |
| ----------- | ------ | -------------------------- |
| 🌊 Empty    | Water  | No ship here               |
| ⚓ Ship     | Ship   | Your ship (visible to you) |
| 💥 Hit      | X      | You hit a ship             |
| 💧 Miss     | ◯      | You missed                 |
| 🔥 Ship Hit | Red    | Opponent hit your ship     |

## Game Flow

### Setup Phase

1. You start with ships already placed on your board
2. Ships are randomly positioned to ensure fairness
3. You can see your own ships but not the opponent's

### Playing Phase

**Your Turn:**

1. Click on a cell on the opponent's board
2. The cell will show a hit (💥) or miss (💧)
3. Your ships may be attacked by the opponent during their turn

**Opponent's Turn:**

1. The AI opponent chooses where to attack (based on difficulty level)
2. If they hit your ship, you'll see 🔥 on your board
3. The game continues until someone wins

### Win Condition

The first player to sink all of the opponent's ships wins the game. A ship is sunk when all of its cells have been hit.

## Difficulty Levels

The game offers three difficulty levels that affect the AI opponent's strategy:

### Easy

- AI makes random shots with no strategy
- Perfect for learning the game
- Most forgiving difficulty level

### Medium

- AI uses some strategy to find ships
- Increases challenge after hitting a ship
- Balanced gameplay experience

### Hard

- AI employs advanced tactics
- Efficiently searches for remaining ships
- Most challenging difficulty level

## Ships

The game includes different types of ships:

- **Battleship** - Largest ship (4 cells)
- **Cruiser** - Medium ship (3 cells)
- **Destroyer** - Small ship (2 cells)
- **Submarine** - Smallest ship (1 cell)

Each ship must be sunk completely to count as destroyed.

## Strategy Tips

### Offensive Strategy

1. **Search Pattern** - Use a systematic search pattern to cover the board efficiently
2. **Focus Hits** - Once you hit a ship, narrow your search to nearby cells
3. **Eliminate Areas** - Use misses to identify areas where ships are unlikely

### Defensive Strategy

1. **Ship Placement** - Ships are randomly placed, so no need to worry about this!
2. **Monitor Attacks** - Keep track of where the opponent is attacking
3. **Adapt** - The AI will adapt to your patterns, so vary your strategy

## Game Settings

You can customize your gameplay experience:

- Select different difficulty levels
- Adjust game preferences
- Reset games at any time

## Winning

When you sink all of the opponent's ships:

1. A victory message is displayed
2. Your game statistics are updated
3. You can start a new game or review the results

## Losing

If the opponent sinks all of your ships:

1. A defeat message is displayed
2. You can review what happened
3. Try again with a different strategy or difficulty level

## Common Mistakes to Avoid

- **Random Shooting** - Develop a search pattern instead of clicking randomly
- **Ignoring Misses** - Use your misses to identify where ships aren't located
- **Poor Focus** - When you hit a ship, focus on nearby cells to find the rest of it
- **Predictable Pattern** - The AI learns your patterns, so vary your strategy

## Tips for Success

✅ Start by testing different areas of the board
✅ Once you find a hit, search systematically around it
✅ Keep mental notes of misses to avoid hitting the same area twice
✅ On higher difficulties, be prepared for the AI to use similar strategies against you
