let r = 0
let g = 255
let b = 0
let yPos = 25
let down = 1
let times = 1
let distance = 250
function setup() {
    
    createCanvas(500, 500);
    background(0);
   
 }
 function draw() {
   background(0,20)
   fill(r,g,b)
  
   
   ellipse(250,yPos,50,50)
   yPos += 3 * down
   if (yPos > 525) {
        down = -1
        
   }
   else if(yPos < distance){
       down = 1
       
   }
    if(yPos == 526){
        distance = distance/2
    }
   
}
function mouseClicked(){
    r = random(0,255)
    g = random(0,255)
    b = random(0,255)
}
