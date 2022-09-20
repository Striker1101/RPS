const playerPick = document.querySelector('.playerPick');
const computerPick = document.querySelector('.computerPick');
let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
let winner = document.querySelector('.winner');



let computerCounter = 0;
let playerCounter = 0;
let playroundCount = 0;
let computerselection = getComputerChoice().toLowerCase;
let win = " ";


function getComputerChoice(){// to get computer input through random 1<>3
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "rock";
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
/* using arrays
function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomPick = Math.floor(Math.random() * choices.length);
  console.log(randomPick);
  return choices[randomPick];
}
*/



function playround(playerselection, computerselection){// design the rules of the game per round, since game follow a set pick of rules    
    //input on both parties

  playroundCount++ // increment any time this function is called 

     // tie case:

  if(playerselection == computerselection){

    
    result.textContent = "game tie";
    playerScore.textContent = playerCounter;
    playerPick.textContent = playerselection;
    computerPick.textContent = computerselection;
    computerScore.textContent = computerCounter;
  
  }else if (playerselection == 'rock' &&  computerselection == 'paper'){
              computerCounter++;
              playerScore.textContent = playerCounter;
              playerPick.textContent = playerselection;
              computerPick.textContent = computerselection;
              computerScore.textContent = computerCounter;
              result.textContent = "computer won ";
          
            
            
  }else if (playerselection == 'scissors' && computerselection == 'rock'){
              computerCounter++;
              playerScore.textContent = playerCounter;
              playerPick.textContent = playerselection;
              computerPick.textContent = computerselection;
              computerScore.textContent = computerCounter;
              result.textContent = "computer won";
           
              
  }else if (playerselection == 'paper' && computerselection == 'scissors'){
              computerCounter++;
              playerScore.textContent = playerCounter;
              playerPick.textContent = playerselection;
              computerPick.textContent = computerselection;
              computerScore.textContent = computerCounter;
              result.textContent = "computer won";
            
  }else if (playerselection == "rock" && computerselection == "scissors") {
            ++playerCounter;
            playerScore.textContent = playerCounter;
            playerPick.textContent = playerselection;
            computerPick.textContent = computerselection;
            computerScore.textContent = computerCounter;
            result.textContent = "player won";

  }else if (playerselection == "paper" && computerselection == "rock") {
            ++playerCounter; 
           playerScore.textContent = playerCounter;
           playerPick.textContent = playerselection;
           computerPick.textContent = computerselection;
           computerScore.textContent = computerCounter;
           result.textContent = "player won";

  }else if (playerselection == "scissors" && computerselection == "paper") {
           ++playerCounter;  
           playerScore.textContent = playerCounter;
           playerPick.textContent = playerselection;
           computerPick.textContent = computerselection;
           computerScore.textContent = computerCounter;
           result.textContent = "player won";

  };
   
  /*
  if(playerselection === computerselection){ //if both selection are same 
    return ('this turn is a tie');
  } // computerConter and PlayerCounter increment each time they are called
  // case 1 for player:
  else if (playerselection === 'rock') {
    if (computerselection === 'paper'){
        computerCounter++
      return 'computer won 1';
    }else{
        playerCounter++
      return 'player won 1';
    }
  }
  // case two for player:
  else if (playerselection === 'scissors'){
    if( computerselection === 'rock'){
        computerCounter++
      return 'computer won 2';
    }else{
        playerCounter++
      return 'plater won 2';
    }
  }
  // case 3 for player:
  else if (playerselection === 'paper')
    if(computerselection === 'scissors'){
        computerCounter++
      return 'computer won 3';
    }else{
        playerCounter++its
      return 'player won 3';
    }*/
  
}
 // onclick event for rock, papper, scissiors
let rock = document.querySelector('.rock');
rock.onclick = ()  => { playerselection = "rock"; game();};

let paper = document.querySelector('.paper');
paper.onclick = ()  => { playerselection = "paper";  game();};

let scissors = document.querySelector('.scissors');
scissors.onclick = ()  => { playerselection = "scissors"; game();};

reset.onclick = () => {reseter()};


function game(){
  
  
  playround(playerselection, getComputerChoice());
  console.log(playerCounter +"**");
  console.log(computerCounter + "**");
    
   //disable buttons on 5 wins
  if (playerCounter >= 5 ){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    winner.textContent = "congrats" ;
    console.log(winner.textContent);
  }else if( computerCounter >= 5){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    winner.textContent = "computer won";
    console.log(winner.textContent);
  };

}




function reseter (){
  //enable all button option
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false; 
 
 console.log(playerCounter);
 playerCounter = 0;
computerCounter = 0;
playerCounter = playerCounter;
computerCounter = computerCounter;

 console.log(computerCounter);
 winner.textContent = win;
 console.log(winner);
 

 // reload the page to get playercount and computercount to 0
//this.reload();

};



//     problems
// how to reset counter after loop
// loop runs 10times 
//https://codepen.io/striker1101/pen/XWEPzbm    