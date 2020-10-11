class tree  {
  constructor(x, y,widht,height) {
    var options = {
         isStatic : true
        
        
    }
   
    this.body = Bodies.rectangle(x, y,widht,height, options);
    
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/tree.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2)
    stroke("green")
    fill("brown");
   image(this.image, 0, 0, 470,470);
    pop();
  }

};
