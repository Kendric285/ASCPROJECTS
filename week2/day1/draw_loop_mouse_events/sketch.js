function setup() {
    createCanvas(500, 500);
    background(0,255,0);
    
    let xPos = random(0, 500);
    let yPos = random(0,500);

    let color = 'white';
    let clicks = 0

    fill(255,0,0)
    rect(300,200,100,50)
    
    
   
 }

 function draw(){
    clear();
    background(0,255,0)
    ellipse(mouseX,mouseY,100,100)
    // let xPos = random(0, 500);
    // let yPos = random(0,500);

   
    // ellipse(xPos,yPos,25,25)
 }

 function mouseClicked(){
    
    
    var dVer = dist(mouseX, mouseY, 350, 225);
    if (dVer < 40 ){
        color = 'blue'
        clicks ++;
    }

    if(color == 'blue' && dVer < 40 == false){
        fill(0,0,255)
        ellipse(mouseX,mouseY, 25,25)
    }
    else if(dVer < 40 == false){
        fill(255,255,255)
        ellipse(mouseX,mouseY, 25,25)
    }
    
 }
 
