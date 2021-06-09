
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var gameState=0;
var START=0;
var PLAY = 1;
var ENDING =2;
var END= 3;
var score=0;

//Declare launcherObject and launchForce variable here
var chain1;

function preload(){
	boy=loadImage("images/boy.png");
  bg=loadImage("images/bg.jpg");
  giffy=loadImage("images/mangoes.gif");
  
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
   mango13=new mango(100,-40,40);
   mango14=new mango(400,160,40);
   mango15=new mango(700,-40,40);
   mango16=new mango(1200,130,40);

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here
   chain1= new Chain(stoneObj.body,{x:230,y:450})

	Engine.run(engine);
}

function draw() {
   console.log(stoneObj.body.position.x);
  
  background(bg);
  if(gameState===0)

  { push();
    stroke("black");
    fill("orange");
    textSize(70);
    textFont("Algerian");
    text("Plucking Mangoes",width/3,height/2)
    pop();
    fill("black");
    textSize(25);
    textFont("Times New Roman")
    text("Press RIGHT ARROW key to start", 600,350);
    mango13.display();
    Matter.Body.setStatic(mango13.body,false);
    mango14.display();
    Matter.Body.setStatic(mango14.body,false);
    mango15.display();
    Matter.Body.setStatic(mango15.body,false);
    mango16.display();
    Matter.Body.setStatic(mango16.body,false);
  }
  if(keyCode===RIGHT_ARROW)
  {
    gameState=1;
  }
  if(gameState===1)
{
  fill("black");
  textSize(25);
  textFont("Lucida Handwriting");
  text("Mangoes🥭:"+ score,50,100)
  image(boy ,200,370,200,300);
  if(score>2)
  {
     text("Tired, press LEFT ARROW key to end",50,150);
  }
  if(mango1.body.position.y>300 && mango1.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango2.body.position.y>300 && mango2.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango3.body.position.y>300 && mango3.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango4.body.position.y>300 && mango4.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango5.body.position.y>300 && mango5.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango6.body.position.y>300 && mango6.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango7.body.position.y>300 && mango7.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango8.body.position.y>300 && mango8.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango9.body.position.y>300 && mango9.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango10.body.position.y>300 && mango10.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango11.body.position.y>300 && mango11.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango12.body.position.y>300 && mango12.body.position.y<315 )
  {
     score= score+1;
  }
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  // display launcher object here
   
chain1.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}
if(stoneObj.body.position.y>400 && stoneObj.body.position.x>600 && gameState===1 ||stoneObj.body.position.y>500 && stoneObj.body.position.x<50 && gameState===1)
{
   gameState=2;
}
if(gameState===2)
{
   textSize(25);
   textFont("Lucida Handwriting");
   fill("black")
   text("Press Space to get a second Chance to Play!!",50 ,50);
   fill("black");
  textSize(25);
  text("Mangoes🥭:"+ score,50,100)
  image(boy ,200,370,200,300);
  if(score>2)
{
   text("Tired, press LEFT ARROW key to end",50,150);
}
  if(mango1.body.position.y>300 && mango1.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango2.body.position.y>300 && mango2.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango3.body.position.y>300 && mango3.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango4.body.position.y>300 && mango4.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango5.body.position.y>300 && mango5.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango6.body.position.y>300 && mango6.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango7.body.position.y>300 && mango7.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango8.body.position.y>300 && mango8.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango9.body.position.y>300 && mango9.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango10.body.position.y>300 && mango10.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango11.body.position.y>300 && mango11.body.position.y<315 )
  {
     score= score+1;
  }
  if(mango12.body.position.y>300 && mango12.body.position.y<315 )
  {
     score= score+1;
  }
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stoneObj.display();
  groundObject.display();
  // display launcher object here
   
chain1.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}
if(keyCode===LEFT_ARROW )
{
   gameState=3;
}

if(gameState===3)
{
  
   fill("black");
   textFont("Lucida Handwriting");
   textSize(30);
   text("CONGRATULATION, you have collected  "+score+"  mangoes",100,150);
   image(giffy ,600,250,300,300);
 
}
}

//create mouseDragged function here
function mouseDragged()
{
   Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})

}

//create mouseReleased function here
function mouseReleased()
{
   chain1.fly();
   console.log(chain1);
}

//create keyPressed function here
function keyPressed()
{
 if(keyCode=== 32)
 {
  Matter.Body.setPosition(stoneObj.body,{x:230,y:410}) 
  stoneObj.attach({x:230,y:410});
  gameState=1;
 }
}
  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }