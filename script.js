// Initialize score variables
let wins = 0, losses = 0, ties = 0;

// Function to handle the gameplay logic when the user submits their choice
function playGame() {
    // Takes user input and puts it in lowercase letters
    let userInput = document.getElementById('userInput').value.toLowerCase();

    // Validate user input to ensure it is one of the valid choices
    if (userInput !== 'paper' && userInput !== 'rock' && userInput !== 'scissors') {
        alert('Invalid input. You must enter rock, paper, or scissors.');
        return;  // Stops execution if input is invalid
    }

    // Array of the choices for computer 3 choices
    let choices = ['rock', 'paper', 'scissors'];
    // Randomly select the computer's choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Compare user and computer choices to determine the result
    let result = compareChoices(userInput, computerChoice);
    // Display the result on the webpage and set color based on the result
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Your picked: ${userInput}, Computer picked: ${computerChoice}. ${result}`;
    if (result.includes("You win")) {
        resultElement.style.color = "green";  // Set text color to green if user wins
    } else if (result.includes("Computer wins")) {
        resultElement.style.color = "red";  // Set text color to red if computer wins
    } else {
        resultElement.style.color = "blue";  // Set text color to black if there is a tie
    }

    // Update the score based on the game result
    updateScore(result);
}

// Function; Comparision between player and computer score to determine who wins
function compareChoices(user, computer) {
    // Check for a tie
    if (user === computer) {
        ties++;  // Counts the ties
        return "It's a tie!";
    }
    // Conditions for player win
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')) {
        wins++;  // Increment wins counter
        return "You win!";
    } else {
        losses++;  // Increment losses counter if none of the above conditions are met
        return "Computer wins!";
    }
}

// Function that updates the scoreboard 
function updateScore(result) {
    // Takes the text from the Score div I created in html and shows the current scores
    document.getElementById('score').textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

// Function to reset and clear the score
function resetGame() {
    // Reset all scores to zero
    wins = 0;
    losses = 0;
    ties = 0;
    // Update the score display to show all zeroes
    document.getElementById('score').textContent = "Wins: 0, Losses: 0, Ties: 0";
    // Clear any previous result messages
    document.getElementById('result').textContent = '';
    document.getElementById('result').style.color = 'black'; // Reset text color
}
