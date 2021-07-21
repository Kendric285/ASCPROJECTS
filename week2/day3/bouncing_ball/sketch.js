let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;

function setup() {
   createCanvas(500, 500);
   background(0);
   xSpeed = random(-5,5)
   ySpeed = random(-5,5)

}
function draw() {
   
   background(0);
   fill(0, 255, 0);
   ellipse(xPos , yPos, 50, 50);

   xPos += xSpeed * xDirection;
   yPos += ySpeed * yDirection;

   if (xPos < 25 || xPos > 475){
       xDirection *= -1;
   }

   if (yPos < 25 || yPos > 475){
    yDirection *= -1;
    }
}