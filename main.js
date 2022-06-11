

getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else { console.log('Error, invalid choice');
    }
};
//console.log(getUserChoice('Rock'));
getComputerChoice = () => {
    choice =  Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else { return 'scissors'};
}; 
//console.log(getComputerChoice());

determineWinner = (userInput, choice) =>{
    if (userInput === 'rock' && choice === 'rock' || userInput ==='scissors' && choice=== 'scissors' || userInput === 'paper' && choice === 'paper'){
        return 'This game is tied.'
    } else if (userInput === 'rock'){
        if (choice === 'paper') {
            return 'The Computer wins this game with paper over rock!'
        } else if (choice === 'scissors')
        {return 'The player won this game with rock breaking scissors!'}
    } else if (userInput === 'paper') {
        if (choice === 'scissors'){
            return 'The Computer wins this game with scissors cutting paper!'
        } else if (choice === 'rock') 
        {return 'The player won this game with paper over rock!'}
    } else if (userInput === 'scissors'){
        if (choice === 'rock'){
            return 'The Computer wins this game with rock breaking scissors!'
        } else if (choice ='paper') {return 'The player wins this game with scissors cutting paper!'}
    };
};
//console.log(determineWinner('rock', 'scissors'));


playGame = (userInput) => {
    var userChoice = getUserChoice(userInput);
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame('paper');

 
