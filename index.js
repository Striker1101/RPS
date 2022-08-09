function getComputerChoice(){// to get computer input through random 1<>3
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
/*const playerselection = () => { // constrain playerselection to determine the input
    playerselection = playerselection.toLowerCase();
    if(playerselection ==='rock' || 'paper' || 'scissors' ){
        return playerselection;
    }else{
        console.log ('error !');
    }  
}*/
function playround(playerselection, computerselection){ // design the rules of the game per round, since game follow a set pick of rules
    // para - playerselection and computerselection
    // number -> string
    // plays a single round of rock, paper, scissors
    // function play(number){ string}
    
    //input on both parties

     // tie case:
  if(playerselection === computerselection){ //if both selection are same 
    return ('this turn is a tie');
  } 
  // case 1 for player:
  else if (playerselection==='rock') {
    if (computerselection==='paper'){
      return 'i won';
    }else{
      return 'you won';
    }
  }
  // case two for player:
  else if (playerselection === 'scissors'){
    if( computerselection === 'rock'){
      return 'i won';
    }else{
      return 'you won';
    }
  }
  // case 3 for player:
  else if (playerselection==='paper')
    if(computerselection==='scissors'){
      return 'i won';
    }else{
      return 'you won';
    }
  }
  /*  if(playerselection === computerselection){ //if both selection are same 
        return ('this turn is a tie');
    }else if (playerselection==='rock')
        if (computerselection==='paper'){
            return 'i won';
        }else{
            return 'you won';
    }else if (playerselection === 'scissors')
        if( computerselection === 'rock'){
            return 'i won';
        }else{
            return 'you won';
    }else if (playerselection==='paper')
        if(computerselection==='scissors'){
            return 'i won';
        }else{
            return 'you won';
        }

}*/

function game(){
    // no aurgments
    // string-> string
    // play 5 round game (keep score and report a winner or loser at end)
    for(let i = 0;  i <= 5; i++){
        const playerselection = prompt('whats your play');
        const computerselection = getComputerChoice();

        console.log(playround(playerselection,computerselection));
    }

}

console.log(game());