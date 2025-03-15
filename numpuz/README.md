3x3 Number Puzzle Game (8-Puzzle)
A classic 8-Puzzle Game implemented using HTML, CSS, and JavaScript. The objective of the game is to rearrange tiles in the correct order by sliding them into the empty space. The game is won when the tiles are arranged in ascending order from 1 to 8, with the empty space at the bottom-right corner.

Features
Playable on Desktop and Mobile: The game is fully responsive, so you can play it on any device.
Shuffle: The game starts with a randomly shuffled set of tiles.
Winning Condition: The game detects when the tiles are arranged in the correct order and congratulates the player.
How to Play
Click on a tile adjacent to the empty space to move it.
The goal is to arrange the tiles in order from 1 to 8, with the empty space at the bottom-right corner.
Once you have solved the puzzle, the game will alert you with a message: "Congratulations! You've won the game!".
Technologies Used
HTML: Structure of the game layout.
CSS: Styling the game board and tiles for a clean and simple design.
JavaScript: Logic for handling game movements, checking for the winning condition, and resetting the game.
Demo
You can play the game by opening the index.html file in a browser.

How to Run the Game Locally
Clone this repository:

bash
Copy
git clone https://github.com/your-username/8-puzzle-game.git
Navigate into the project directory:

bash
Copy
cd 8-puzzle-game
Open the index.html file in a browser:

Double-click index.html or right-click and select "Open with" to open it in your browser.
File Structure
graphql
Copy
/8-puzzle-game
    ├── index.html        # Main HTML file
    ├── style.css         # CSS file for styling
    └── script.js         # JavaScript file for functionality
Features to Add in the Future
Animations: Add smooth sliding animations when tiles move.
Move Counter: Display the number of moves made by the player.
Timer: Track how much time the player takes to solve the puzzle.
Different Grid Sizes: Add options to play the game with different grid sizes (like 4x4, 5x5).
License
This project is licensed under the MIT License - see the LICENSE file for details.