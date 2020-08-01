const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gamestate=1;
var engine, world;
var paper,ground,launcher;
var dustbin1,dustbin2,dustbin3,log;


function preload()
{
 
}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;
    
	ground = new Ground2(600,600,1400,30);
	paper = new Paper(600,500);
  dustbin1 = new Ground(925,580,180,20);
  dustbin2 = new Ground(1010,520,20,140);
  dustbin3 = new Ground(840,520,20,140);
  log = new Ground(600,170,20,20);
  launcher = new Launcher(paper.body,log.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215,215,215);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  log.display();
  launcher.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

 
