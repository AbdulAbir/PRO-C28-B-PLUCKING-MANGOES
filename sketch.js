const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog;
var Sling1;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    mango1 = new mango(810,350,50);
    mango2 = new mango(870,400,50);
    mango3 = new mango(890,300,50);
    mango4 = new mango(780,450,50);
    mango5 = new mango(720,420,50);
    mango6 = new mango(800,420,35);
    mango7 = new mango(930,430,60);
    mango8 = new mango(960,260,65);
    mango9 = new mango(950,350,40);
    mango10 = new mango(1030,350,50);
    mango11 = new mango(1100,400,50);
    mango12 = new mango(1050,320,50);
    boy1 = new boy(200,545);
    tree1 = new tree(720,240);
    stone1 = new stone(235,590,40);
    Sling1 = new SlingShot(stone1.body,{x:235,y:600})
   
}

function draw(){
    background("gray");
    Engine.update(engine);
  
    ground.display();
    tree1.display();
    mango1.display();
    boy1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    detectCollision(stone1,mango1);
    detectCollision(stone1,mango2);
    detectCollision(stone1,mango3);
    detectCollision(stone1,mango4);
    detectCollision(stone1,mango5);
    detectCollision(stone1,mango6);
    detectCollision(stone1,mango7);
    detectCollision(stone1,mango8);
    detectCollision(stone1,mango9);
    detectCollision(stone1,mango10);
    detectCollision(stone1,mango11);
    detectCollision(stone1,mango12);

    Sling1.display();

    stone1.display();
   

   
    
}

function mouseDragged()
{
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
    Sling1.fly();
}

function keyPressed() 
{
 if (keyCode === 32) 
  {
   Matter.Body.setPosition(stone1.body,{x:235,y:590})
   Sling1.attach(stone1.body)
    
  }
}

function detectCollision(lstone,lmango)
{
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.radius+lstone.radius)
    {
        Matter.Body.setStatic(lmango.body,false)
    }
}