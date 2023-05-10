React Tic Tac Toe Game
This is a simple implementation of the classic Tic Tac Toe game using React with props and state management.

How to Play
The game is played on a 3x3 grid. To start, the first player clicks on any square on the board. Then, the second player clicks on a different square. Players take turns clicking on squares until one player gets three in a row (horizontally, vertically, or diagonally) or all squares are filled and the game ends in a tie.

Getting Started
To run the game on your local machine, follow these steps:

Clone this repository to your local machine
Open the terminal and navigate to the project directory
Run npm install to install all dependencies
Run npm start to start the development server
Open http://localhost:3000 in your browser to play the game
Dependencies
The game was built using the following dependencies:

React (17.0.2)
ReactDOM (17.0.2)
prop-types (15.7.2)
Components
The game is composed of the following components:

App: the main component that renders the game board and manages the game state
Cell: a functional component that represents a single square on the game board
Props
The following props are passed down to the Cell component:

id: the index of the cell in the cells array
cell: the value of the cell ("X", "O", or null)
setCells: a function that is called when a cell is clicked and updates the cells state in the App component
go: a string value that indicates which player's turn it is ("circle" or "cross")
setGo: a function that is called when a cell is clicked and updates the go state in the App component
cells: the current state of the game board as an array of 9 values
winMessage: a string value that represents the winner ("Cross Wins!", "Circle Wins!", or "It's a Tie!") or null if there is no winner yet.
State
The App component manages the game state using the following state variables:

cells: an array of 9 values that represent the state of each square on the board
go: a string value that indicates which player's turn it is ("circle" or "cross")
winMessage: a string value that represents the winner ("Cross Wins!", "Circle Wins!", or "It's a Tie!") or null if there is no winner yet.
The App component renders the game board by mapping over the cells array and rendering a Cell component for each cell. When a Cell is clicked, it updates the cells state with the new value of the cell and checks if there is a winner. If there is a winner, it updates the winMessage state accordingly. The App component passes down the current go value and the setGo function to the Cell components to keep track of which player's turn it is.
