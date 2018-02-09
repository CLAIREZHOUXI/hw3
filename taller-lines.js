function setup() { 
  createCanvas(400, 400);
} 

for (var i = 0; i <= 340; i = i+10) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = i+30;
  line(startX, 0, endX, endY);
}

