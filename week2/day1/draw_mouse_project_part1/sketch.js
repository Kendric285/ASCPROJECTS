function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}

function draw() {

}

function mouseClicked() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let radius = random(25, 100)
  fill(r, g, b);

  ellipse(mouseX, mouseY, radius, radius);
}
 
 