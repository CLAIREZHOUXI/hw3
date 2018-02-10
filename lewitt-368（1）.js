
function setup() { 
  createCanvas(400, 200);
  background(245);
  for (var i = 0; i <= 400; i = i + 2.5) {
  stroke(230);
  var startX = i;
  var startY = 60;
  var endX = i;
  var endY = 140;
  line(startX, startY, endX, endY);
}
  for (var a = 0; a <= 200; a = a + 2.5) {
  stroke(230);
  var startX1 = 110;
  var startY1 = a;
  var endX1 = 240;
  var endY1 = a;
  line(startX1, startY1, endX1, endY1);
}
  stroke(0);
  var lines = 3;
  while (lines < 80) {
    stroke(230);
    line(lines, height-lines, lines*2, height+2);
    lines = lines + 2;
  }}
