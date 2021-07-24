let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let myLeft, myRight, myBottom, myTop;
let enemyLeft, enemyRight, enemyBottom, enemyTop;

function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
    
    
}
function draw() {
    background(0);

    fill(0,0,255);
    rect(enemyXPos,enemyXPos,50,50)

    fill(255,0,0)
    rect(myXPos,myYPos,50,50)

    if(keyIsDown(LEFT_ARROW)){
        myXPos -= 3;
    }
    if(keyIsDown(RIGHT_ARROW)){
        myXPos += 3;
    }
    if(keyIsDown(UP_ARROW)){
        myYPos -=3;
    }
    if(keyIsDown(DOWN_ARROW)){
        myYPos +=3;
    }

    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;

    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25

    if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom ||myBottom < enemyTop){
        
    }
    else{
        background(0)
    }


}