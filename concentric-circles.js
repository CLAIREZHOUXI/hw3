function setup() { 
  createCanvas(340, 340);
} 

for (var i = 20; i <= 350; i = i + 10) {
  var startX = 20;
  var startY = i;
  var endX = i;
  var endY = i;
  noFill();
  ellipse(170, 170, endX, endY);
}
      
