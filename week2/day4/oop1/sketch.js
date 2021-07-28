let ball1;

function setup() {
    createCanvas(500, 500);
    noStroke();
    ball1 = new Ball(150,250,255,0,0)
    
}

function draw() {
    background(0)

    
    // fill(255,0,0);
    // ellipse(150,250,100,100)

    // fill(0,255,0);
    // ellipse(250,250,100,100)

    // fill(0,0,255);
    // ellipse(350,250,100,100)
    fill(ball1.rVal, ball1.gVal, ball1.bVal)
    ellipse(ball1.xPos,ball1.yPos,100,100)
    // console.log(ball1.add)

  
}

class Ball {
    constructor(x, y, r, g, b){
        this.xPos = x;
        this.yPos = y;
        this.rVal = r;
        this.gVal = g;
        this.bVal = b;

        this.add = x + y;
    }
}

