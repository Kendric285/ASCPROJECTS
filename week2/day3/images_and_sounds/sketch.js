let charIMG;
let squiIMG;
let bulIMG;

let charSound;
let squiSound;
let bulSound;


function preload(){
    charIMG = loadImage("images/charmander.png");
    squiIMG = loadImage("images/squirtle.png");
    bulIMG = loadImage("images/bulbasaur.png")

    charSound = loadSound("sounds/charmander.mp3")
    squiSound = loadSound("sounds/squirtle.mp3")
    bulSound = loadSound("sounds/bulbasaur.mp3")

}

function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke()

}
function draw() {
    fill(255,0,0);
    rect(100,200,100,100)
    image(charIMG, 100, 200,100,100)

    fill(0,255,0);
    rect(200,200,100,100)
    image(bulIMG, 200, 200,100,100)

    fill(0,0,255);
    rect(300,200,100,100)
    image(squiIMG, 300, 200,100,100)

    
}

function mouseClicked(){
    if(mouseX > 100 && mouse < 200 && mouseY > 200 && mouseY < 300){
        charSound.play()
    }
}

