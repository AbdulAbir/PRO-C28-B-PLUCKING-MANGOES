class stone  {
  constructor(x, y,radius, angle) {
        var options = {
             isStatic : false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius
        this.x = x;
        this.y = y;

        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}
