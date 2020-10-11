class SlingShot 
{

    constructor(bodyA,bodyB)
    {
         var options = {

        bodyA: bodyA ,   
        bodyB: bodyB ,
        length:10,
        stiffness:0.05,
        
        
    }
     this.string = Constraint.create(options)

     World.add(world,this.string)
    }

    display()
    {
    strokeWeight(3)
    line(this.string.bodyA.position.x,this.string.bodyA.position.y,this.string.bodyB.position.x,this.string.bodyB.position.y)

    }
}