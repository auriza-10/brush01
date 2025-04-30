import Preloader from './js/componentes/preloader.js';
import Line from './js/crayon/line.js';

let lines = [];
let _line;
let undoneLines = [];

const redoBtn = document.getElementById('redo-btn');
const eraseBtn = document.getElementById('erase-btn');
const undoBtn = document.getElementById('undo-btn');

redoBtn.addEventListener('click', () => {
    if (undoneLines.length > 0) {
        const redone = undoneLines.pop();
        lines.push(redone);
        console.log("Redo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
});

eraseBtn.addEventListener('click', () => {
    lines = [];
    undoneLines = [];
});

undoBtn.addEventListener('click', () => {
    if (lines.length > 0) {
        const undone = lines.pop();
        undoneLines.push(undone); 
        console.log("Undo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
});

let brushSize = 1;
const brushSizeInput = document.getElementById('brush-size');
brushSizeInput.addEventListener('input', (event) => {
    brushSize = parseFloat(event.target.value);
    console.log("Brush size updated:", brushSize);
});

const colorInput = document.getElementById('color-input');

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
};

window.mousePressed = (event) => {
    if (event.target.tagName === 'CANVAS') {
        const selectedColor = colorInput.value;

        _line = new Line({
            stroke: selectedColor, 
            strokeWeight: brushSize,
        });
        lines.push(_line);
        console.log("Line added. Total lines: ", lines.length);
    }
};

window.mouseDragged = (event) => {
    if (event.target.tagName === 'CANVAS' && mouseIsPressed) {
        const p = createVector(event.x, event.y);
        _line.points.push(p);
    }
};

window.draw = () => {
    background(0);
    lines.forEach(line => {
        line.draw();
    });
};

window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

window.addEventListener('load', () => {
    const preloader = new Preloader();
    preloader.hide(); 
});
