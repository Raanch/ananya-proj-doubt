var boy, boyImg;
var tree, treImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg=loadImage("sprites/boy.png")
	treeImg=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1300, 700);
	boy=createSprite(200,620,10,10);
	boy.addImage(boyImg)
	boy.scale=0.08

	tree=createSprite(1000,300,10,10)
	tree.addImage(treeImg)
	tree.scale=0.6
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(150,500,30);
	ground = new Ground(650,670,1300,20);
	mango1=new Mango(800,170,40)
	mango2=new Mango(900,200,40)
	mango3=new Mango(1000,140,30)
	mango4=new Mango(1100,70,30)
	mango5=new Mango(950,50,40)
	mango6=new Mango(1200,170,40)
    chain = new Chain(stone1.body, {x: 140, y:550});
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(220);
  drawSprites();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  
  text(mouseX,mouseY,500,100)
  
  detectCollision(stone1,mango1);
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 
 
}
function keyPressed(){
 if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:140,y:550})
    chain.attach(stone1.body);
 }
}
function detectCollision(lstone,lmango){
	stonePos=lstone.body.position;
	mangoPos=lmango.body.position;
	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
	 chain.fly();
}