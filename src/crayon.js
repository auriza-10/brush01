import Preloader from "./js/componentes/preloader.js";
import Line from "./js/crayon/line.js";
let lines = [];
let _line;

window.setup= (event) => {
    createCanvas(windowWidth, windowHeight)

};
window.mousePressed = (event) => {
    _line = new Line({
    stroke: color(random(255), random(255), random(255)),
    strokeWeight: random(1, 10),

    });
    lines.push(_line);
};

window.mouseDragged = (event) => {
        const point = createVector(event.x, event.y)
        _line.points.push(point);
    };

window.draw = (event) => {
    background(0);
    lines.forEach((line) => line.draw());

    };


window.Resized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
};
