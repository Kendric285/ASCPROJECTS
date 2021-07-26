let game = [1,2,3,4,5,6,7,8,9]
let userTurn = 'X'
let winner
let xScore = 0
let yScore = 0
function setup() {
    createCanvas(1000, 500);
    background(111, 122, 114);

    strokeWeight(4)
    rect(25, 25, 100, 100);
    rect(125, 25, 100, 100);
    rect(225, 25, 100, 100);
  
    rect(25, 125, 100, 100);
    rect(125, 125, 100, 100);
    rect(225, 125, 100, 100);
  
    rect(25, 225, 100, 100);
    rect(125, 225, 100, 100);
    rect(225, 225, 100, 100);

}

function draw() {
    textSize(50);

    if(userTurn == 'X'){
      fill(255,0,0)
      text("X Wins: " + xScore, 500, 90);
      fill(0)
      text("O Wins: " + yScore, 500, 190);
    }
    else{
      fill(0)
      text("X Wins: " + xScore, 500, 90);
      fill(255,0,0)
      text("O Wins: " + yScore, 500, 190);

    }
   
   
    //row 1
    
    
   
   
    
}

function mouseClicked() {
  console.log(game[0] == 1)
  fill(0,0,0)
  if(mouseX > 25 && mouseX < 125 && mouseY > 25 && mouseY < 125){
    game.splice(0, 1, userTurn)
    console.log('(1,1)')
    textSize(50);
    text(userTurn, 60, 90);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
        textSize(50);
        if(userTurn == 'X'){
            text("O is the winner!!!",25, 400);
            yScore++
          }
          else{
            text("X is the winner!!!",25, 400);
            xScore++
          }
        setTimeout(reset,1500);
        
      }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(game)
    console.log(checkWinner())
  }
  
  if(mouseX > 125 && mouseX < 225 && mouseY > 25  && mouseY < 125){
    game.splice(1, 1, userTurn)
    console.log('(2,1)')
    textSize(50);
    text(userTurn, 160, 90);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  if(mouseX > 225 && mouseX < 325 && mouseY > 25  && mouseY < 125){
    game.splice(2, 1, userTurn)
    console.log('(3,1)') 
    textSize(50);
    text(userTurn, 260, 90);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  
  if(mouseX > 25 && mouseX < 125 && mouseY > 125  && mouseY < 225){
    game.splice(3, 1, userTurn)
    console.log('(1,2)')
    
    textSize(50);
    text(userTurn, 60, 190);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  
  if(mouseX > 125 && mouseX < 225 && mouseY > 125  && mouseY < 225){
    game.splice(4, 1, userTurn)
    console.log('(2,2)')
    textSize(50);
    text(userTurn,160, 190);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  
  if(mouseX > 225 && mouseX < 325 && mouseY > 125  && mouseY < 225){
    game.splice(5, 1, userTurn)
    console.log('(3,2)')
    textSize(50);
    text(userTurn,260, 190);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  
  if(mouseX > 25 && mouseX < 125 && mouseY > 225 && mouseY < 325){
    game.splice(6, 1, userTurn)
    console.log('(1,3)')
    textSize(50);
    text(userTurn,60, 290);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  if(mouseX > 125 && mouseX < 225 && mouseY > 225 && mouseY < 325){
    game.splice(7, 1, userTurn)
    console.log('(2,3)')
    textSize(50);
    text(userTurn,160, 290);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
    console.log(checkWinner())
  }
  if(mouseX > 225 && mouseX < 325 && mouseY > 225  && mouseY < 325){
    game.splice(8, 1, userTurn)
    console.log('(3,3)')
    textSize(50);
    text(userTurn,260, 290);
    if(userTurn == 'X'){
      userTurn = 'O'
    }
    else {
      userTurn = 'X'
    }
    if(checkWinner() == true){
      textSize(50);
      if(userTurn == 'X'){
          text("O is the winner!!!",25, 400);
          yScore++
        }
        else{
          text("X is the winner!!!",25, 400);
          xScore++
        }
      setTimeout(reset,1500);
      
    }
    else if(checkWinner() == 'Tie'){
        text("It is a Tie",25, 400);
        setTimeout(reset,1500);
    }
  }
  console.log(game)
  console.log("X Wins: " + xScore)
  console.log("Y Wins: " + yScore)
  
}

function checkWinner() {
  if(game[0] == game[1] && game[0] == game[2]) {
    winner = game[0]
    console.log(winner)
    return true
  }
  if(game[3] == game[4] && game[3] == game[5]) {
    winner = game[3]
    return true
  }
  if(game[6] == game[7] && game[6] == game[8]) {
    winner = game[6]
    return true
  }
  if(game[0] == game[3] && game[0] == game[6]) {
    winner = game[0]
    return true
  }
  if(game[1] == game[4] && game[1] == game[7]) {
    winner = game[1]
    return true
  }
  if(game[2] == game[5] && game[2] == game[8]) {
    winner = game[2]
    return true
  }
  if(game[0] == game[4] && game[0] == game[8]){
    winner = game[0]
    return true
  }
  if(game[6] == game[4] && game[6] == game[2]){
    winner = game[6]
    return true
  }
  if(game[0] != 1 && 
     game[1] != 2 && 
     game[2] != 3 && 
     game[3] != 4 && 
     game[4] != 5 && 
     game[5] != 6 && 
     game[6] != 7 && 
     game[7] != 8 && 
     game[8] != 9) {
    return 'Tie'
  }
  
  else{
    return false
  }
}

function reset(){
        fill(255,255,255)
        strokeWeight(4);
        clear();
        background(111, 122, 114);
        //row 1
        rect(25, 25, 100, 100);
        rect(125, 25, 100, 100);
        rect(225, 25, 100, 100);
      
        rect(25, 125, 100, 100);
        rect(125, 125, 100, 100);
        rect(225, 125, 100, 100);
      
        rect(25, 225, 100, 100);
        rect(125, 225, 100, 100);
        rect(225, 225, 100, 100);

        text("X Wins: " + xScore, 500, 90);
        text("O Wins: " + yScore, 500, 190);
        game = [1,2,3,4,5,6,7,8,9]
         
  
}

function inArray(element,array){
    var count = array.length;
    for(var i=0;i<count;i++){
        if(array[i] == element){
          return true;
        }
    }
    return false;
}
