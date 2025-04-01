import Point from './js/componentes/point.js'; 
 
const PALETTE = [ '#001219', '#005f73', '#0a9396', '#94d2bd'];
const TOTAL_POINTS = 10;
let points = [];

window.setup = (event) => {

for (let i = 0; i < TOTAL_POINTS; i++) {
  const randomColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const point = new Point({
    fill: randomColor,
    stroke: 0,
    size: 300 - (20 * i),
    friction: i * 0.01,
    alpha: 150,  })
  points.push(point);
}

  createCanvas(windowWidth, windowHeight);

};

window.draw = (event) => {
  background('black');
  for (let i = 0; i < points.length; i++) {
    points[i].draw();
  }
};

window.windowResized = (event) => {
resizeCanvas(windowWidth, windowHeight);
background('black'); 
};