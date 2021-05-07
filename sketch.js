
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roofObject=new roof(width/2,height/4,width/7,20)
bobDiameter=40;
startBobPositionX=width/2
startBobPositionY=height/4+500
	//Create the Bodies Here.
 bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
 bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
 bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
 bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
 bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
 rope1=new rope(bob1.body,roofObject.body,-bobDiameter*2,0)
 rope2=new rope(bob2.body,roofObject.body,-bobDiameter*1,0)
 rope3=new rope(bob3.body,roofObject.body,0,0)
 rope4=new rope(bob4.body,roofObject.body,bobDiameter*1,0)
 rope5=new rope(bob5.body,roofObject.body,bobDiameter*2,0)
 roofObject=new roof(width/2,height/4,width/7,20)


}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
Ground.display
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
roofObject.display();



}



