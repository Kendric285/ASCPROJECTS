let state = 1;
let msg = "State #1"
function setup() {
    
    createCanvas(500, 500);
    background(0);
   
}
function draw() {
    if(state == 1){
        background(255,0,0)
    }
    else if(state == 2){
        background(0,255,0)
    }
    fill(255)
    textSize(50)
    text(msg,250,250)
}
function mouseClicked(){
    if(state == 1){
        state = 2
        msg = "State #2"
    }
    else{
        state = 1
        msg = "State #1"
    }
    
}
