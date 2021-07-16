
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject, groundObject
var world;

var engine, world

function setup(){
	createCanvas(800,700);


	engine = new Paper(100, 600, 10);

	ground=new Ground(400, 600, 800, 20);

	paperObject= new paper(200, 450, 70);
	groundObject = new ground(width/2,679,width,20);
	dustbinObj = new dustBin(1200,650);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:1600,
			height:700,
			wireframes : false
		}
	})
   
     
	
	leftSide = new DustBin(550, 620, 20, 100);
	bottom = new DustBin(610,660,100, 20);
	rightSide = new DustBin(670, 620 , 20,100);

	Engine.run(engine);
}

function draw () {
	rectMode(CENTER);

	background(0);

	Engine.update(engine);

	paper.display();

	ground.display();

	leftSide.display();
	bottom.display();
	rightSide.display();

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
}







