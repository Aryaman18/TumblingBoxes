 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
var box1;
var box2;
var ground;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

box1 = new Box(200,300,20,20);
box2 = new Box(240,100,20,20);
ground = new Ground(200,height,400,20);
}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display1();
  box2.display1();
  ground.display2();

  console.log(box2.body.angle);

}