let r = 0
let g = 0
let b = 0
 
 function setup() {
   createCanvas(500, 500);
   background(255, 255, 255);
}
 
function draw() {
  
  fill(r,g,b)
  line(250,250,mouseX,mouseY)
  

}
 
function mouseClicked(){
  
   background(255,255,255)
   r = random(0,255)
   g = random(0,255)
   b = random(0,255)
}


//plan
//les go