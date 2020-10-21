
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballObject,dustbinobject;
var wall1,wall2,wall3;
function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

   ground = new Ground(width/2,670,width,20);

    dustbinobject = new Dustbin(1200,500);
   
   ballObject = new Paper (200,450,40);
   
   wall1=new Dustbin(1200,650,200,20,{isStatic:true});
	

	wall2=new Dustbin(1100,610,20,100,{isStatic:true});
	

	wall3=new Dustbin(1300,610,20,100,{isStatic:true});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  ballObject.display();    
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  dustbinobject.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:90,y:-90});
	}
}

	




