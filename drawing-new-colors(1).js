function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  }else if (key == 'A') {
    fill(0, 0, 255); 
  }else if (key == 'D') {
    fill(100, 5, 255); 
	}else if (key == 'E') {
    fill(100, 100, 255); 
  }Eelse if (key == 'F') {
    fill(200, 100, 255); 
  }
}

setup();
draw();
keyPressed();
