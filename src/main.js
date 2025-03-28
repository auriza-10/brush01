var mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

var mouse2 = {
  x: 0,
  y: 0
}

var fiction = 0.1;
var fict = 0.02;

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background('black');
};

// p5.js draw function
window.draw = () => {
  background('black');
  mouse.x += (mouseX - mouse.x) * fiction;
  mouse.y += (mouseY - mouse.y) * fiction;
  ellipse(mouse.x, mouse.y, 10, 10);
  text(mouseX + ", " + mouseY, mouse.x, mouse.y);
  fill(255);

  mouse2.x += (mouseX - mouse2.x) * fict;
  mouse2.y += (mouseY - mouse2.y) * fict;
  ellipse(mouse2.x, mouse2.y, 10, 10);
  text(mouseX + ", " + mouseY, mouse2.x, mouse2.y);
  fill(0, 255, 0);
};

// p5.js windowResized function
window.windowResized = () => {
resizeCanvas(windowWidth, windowHeight);
background('black'); // Reset background after resizing
};