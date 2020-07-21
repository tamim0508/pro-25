var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ballIMG;
var ground;
var engine, world;
var d1,d2,d3,d4;

function preload()
{

}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(100,500,70);
var options ={
	isStatic:true
}
d2 = Bodies.rectangle(640,650,210,20,options);
World.add(world, d2);
ground = new Ground(400,650,800,20)
d1 = new Dustbin(650,540,200,200)
//d2 = new Dustbin(550,580,20,130);
//d3 = new Dustbin(755,580,20,130)
	Engine.run(engine);
	
	
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ball.display();
  rectMode(CENTER);
  rect(d2.position.x,d2.position.y,210,20); 
  ground.display();
  d1.display();
  
  //d2.display();
  //d3.display();
	
	
	
	
	
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:775,y:-775});
	}
}



