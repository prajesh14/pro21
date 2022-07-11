
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball
	Matter.Bodies.applyForce(circle,circle.x,circle.y)	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	Matter.Bodies.circle(40,300,2,ball_options)
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  World = world,ball(40,300,2)
  groundObj.display()
groundObj = new ground(width/2,670,width,20)
leftSide = new ground(1100,600,20,120)
rightSide = new ground(600,1100,20,120)
  drawSprites();
 
}



