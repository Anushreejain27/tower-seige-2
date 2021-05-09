const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {

}

function setup() {
createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
  b1=new block(100,100,10,20) 
}

function draw() {
background("black");
Engine.update(engine);
b1.display()
 
}


