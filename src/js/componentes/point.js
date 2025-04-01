export default class Point {
    constructor(args={}) {
      this.position = createVector(args.x || 0, args.y || 0);
      this.fill = args.fill || 'white';
      this.stroke = args.stroke || 'black';
      this.size = args.size || 10;
      this.opacity = args.opacity || 1;
      this.friction = args.friction || 0.1;
  
    }
  
  
    draw() {
        this.update();
      fill(this.fill);
      noStroke();
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
  
    update(mouse){
      this.position.x += (mouseX - this.position.x) * this.friction;
      this.position.y += (mouseY - this.position.y) * this.friction;
  }
  }