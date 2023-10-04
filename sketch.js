function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  strokeWeight(0)
}

function mouseClicked(){
  fill(
    random(100, 256),
    random(0,256),
    random(0,256)); 
    bezier(mouseX+50, mouseY - 50, mouseX, random(mouseY), random(0,width), random(mouseY), random(mouseX), mouseY-20);
    }


