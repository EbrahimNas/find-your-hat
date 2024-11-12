const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };
        this.field[0][0] = pathCharacter; // Start player at the top-left corner
    }

    // Method to print the current state of the field
    print() {
        console.clear();
        for (let row of this.field) {
            console.log(row.join(''));
        }
        console.log('Enter a direction (u = up, d = down, l = left, r = right):');
    }

    // Method to handle player's movement
    move(direction) {
        switch (direction) {
            case 'u':
                this.playerPosition.y -= 1;
                break;
            case 'd':
                this.playerPosition.y += 1;
                break;
            case 'l':
                this.playerPosition.x -= 1;
                break;
            case 'r':
                this.playerPosition.x += 1;
                break;
            default:
                console.log('Invalid input. Use "u", "d", "l", "r" to move.');
                return true;
        }

        if (this.isOutOfBounds()) {
            console.log('You moved out of bounds!');
            return false;
        }

        if (this.field[this.playerPosition.y][this.playerPosition.x] === hole) {
            console.log('You fell into a hole!');
            return false;
        }

        if (this.field[this.playerPosition.y][this.playerPosition.x] === hat) {
            console.log('Congratulations! You found your hat!');
            return false;
        }

        this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
        return true;
    }

    // Method to check if the player is out of bounds
    isOutOfBounds() {
        return (
            this.playerPosition.x < 0 ||
            this.playerPosition.x >= this.field[0].length ||
            this.playerPosition.y < 0 ||
            this.playerPosition.y >= this.field.length
        );
    }

    // Static method to generate a random field
    static generateField(height, width, holePercentage = 0.2) {
        const field = new Array(height).fill(0).map(() => new Array(width).fill(fieldCharacter));

        // Place the hat
        const hatPosition = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
        field[hatPosition.y][hatPosition.x] = hat;

        // Place holes
        const totalCells = height * width;
        const holeCount = Math.floor(totalCells * holePercentage);

        for (let i = 0; i < holeCount; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * width);
                y = Math.floor(Math.random() * height);
            } while (field[y][x] !== fieldCharacter || (x === 0 && y === 0)); // Prevent placing holes where the player starts
            field[y][x] = hole;
        }

        return field;
    }
}

const height = 5; // Adjust field dimensions as needed
const width = 5;
const myField = new Field(Field.generateField(height, width));

// Game logic to handle each turn, called repeatedly
function playTurn() {
    myField.print();

    // Listen for input directly from the console using `prompt-sync`
    const direction = prompt('Which way? (u = up, d = down, l = left, r = right): ');
    
    const playing = myField.move(direction);

    if (playing) {
        setTimeout(playTurn, 100); // Loop with a small delay
    } else {
        console.log('Game Over!');
    }
}

// Start the game after the HTML loads
window.onload = () => {
    console.log("Open your browser's console to play the game!");
    playTurn();
};
