const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,390,1200,20)
    stand = new Ground(510,350,320,10);
    
    box1 = new Box(390,320,40,50);
    box2 = new Box(430,320,40,50);
    box3 = new Box(470,320,40,50);
    box4 = new Box(510,320,40,50);
    box5 = new Box(550,320,40,50);
    box6 = new Box(590,320,40,50);
    box7 = new Box(630,320,40,50);
    box8 = new Box(430,270,40,50);
    box9 = new Box(470,270,40,50);
    box10 = new Box(510,270,40,50);
    box11 = new Box(550,270,40,50);
    box12 = new Box(590,270,40,50);
    box13 = new Box(470,220,40,50);
    box14 = new Box(510,220,40,50);
    box15 = new Box(550,220,40,50);
    box16 = new Box(510,170,40,50);
    
    ball1=new Ball(200,200,30)
    slingshot=new SlingShot(ball1.body, {x:300,y:50})
    

}

function draw(){
    background("grey");
    Engine.update(engine);
    ground.display();
    stand.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    
    ball1.display();
    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


