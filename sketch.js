const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(600,50,50,50);
  box2 = new Box(600,100,50,50);
  box3 = new Box(600,150,50,50);
  box4 = new Box(600,200,50,50);
  box5 = new Box(600,250,50,50);

  ground = new Ground(400,390,800,50);

  ball = new Ball(400,320,30)
  rope = new Rope(ball.body,{x:400,y:20})
}

function draw() {
  background("blue");
  Engine.update(engine);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  ground.display();

  rope.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}