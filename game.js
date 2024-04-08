
const pick = playGame();

function playGame(){

    let random = math.Random();
    let pick;

    if(random >= 0 && random < 1/3){
        pick = "rock";
    }
    else if( random > 1/3 && random < 2/3){
        pick = "paper";
    }
    else if ( random > 2/3 && random < 1){
        pick = "rock"
    }
return pick;
}
    
   
    
    
    let result;
    if( pick === "rock"){
        result = "Tie";
    }
    else if( pick === "paper"){
        result = "You Lose";
    }
    else if( pick === "scissors"){
        result = "You Win";
    }
alert(`${result}. You played rock. The computer played ${pick}.`)
