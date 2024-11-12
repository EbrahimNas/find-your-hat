# Find Your Hat Game

This is a simple interactive console game where you navigate a field to find your hat while avoiding holes. The game can be played both in a **browser** and **Node.js** environment, with specific JavaScript files for each platform.

## Features

- A 5x5 grid is randomly generated.
- The goal is to find your hat (`^`) while avoiding holes (`O`).
- The player can navigate the field by typing directional commands (`u` for up, `d` for down, `l` for left, `r` for right).
- If the player falls into a hole, the game ends.
- If the player finds the hat, they win!

## Files

- **`main.js` (Browser Environment)**: This file is used for running the game in the browser. It is injected into the `index.html` file and interacts with the browser’s console for user input.
- **`main.js` (Node.js Environment)**: This file is used for running the game in a Node.js environment, where the user interacts with the game via terminal/command line.
- **`index.html`**: The HTML file that sets up the game in the browser. It includes instructions on how to play and injects the browser-specific `main.js` file.

## Setup

### Running in the Browser

1. Clone the repository or download the source code.
2. Open the `index.html` file in your browser.
3. Open the browser’s developer console (usually F12 or right-click → Inspect → Console).
4. Follow the instructions in the console to play the game.

### Running in Node.js

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install any dependencies (if required) by running `npm install`.
4. Run the Node.js version of the game by executing the following command in your terminal:
   
   ```bash
   node main.js
5. Follow the terminal prompts to play the game.

## Game Instructions

- **Field Characters**:
  - `^` represents the Hat.
  - `O` represents a hole.
  - `░` represents an empty space.
  - `*` represents the player's current position.

- **Controls**:
  - `u`: Move up
  - `d`: Move down
  - `l`: Move left
  - `r`: Move right

- **Objective**: Find your hat (`^`) while avoiding falling into holes (`O`).

- **End Game Conditions**:
  - If you find the hat, you win!
  - If you fall into a hole, the game ends.

## Code Structure

- **`main.js` (Browser Environment)**: Handles the game logic in the browser. It updates the grid in the console and listens for user input directly through the browser's developer console.
- **`main.js` (Node.js Environment)**: Same game logic as in the browser, but tailored to work in the terminal/command line with `prompt-sync` for reading user input.
- **`index.html`**: The HTML file for the browser environment that includes the game instructions and injects the browser-specific `main.js` file.
