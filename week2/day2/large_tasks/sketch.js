function setup() {
    createCanvas(500, 500);
    background(220,220,220);
   
 }
 function draw() {
    let xRand = random(0,20)
    let yRand = random(0,20)
    let size = random(10, 35)
    let opacity = random(120, 180)
    ellipse(mouseX + xRand,mouseY + yRand,size,size)
    fill(random(0,255),random(0,255),random(0,255),opacity)
    noStroke();
}

function mouseClicked(){
    
    clear();
    background(220,220,220);
}