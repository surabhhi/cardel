const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ball1,ball2,ball3,ball4,ball5,ball6;
var rope1,rope2,rope3,rope4,rope5,rope6;




function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(100,100,80,80);
    ball2 = new Ball(200,200,80,80);
    ball3= new Ball(300,300,80,80);
    ball4= new Ball(400,400,80,80);
    ball5= new Ball(500,500,80,80);
    ball6= new Ball(600,600,80,80);
    
    rope1 = new Rope(ball1.body,{x : 300, y : 50});
    rope2 = new Rope(ball2.body,{x : 380, y : 50});
    rope3 = new Rope(ball3.body,{x : 460, y : 50});
    rope4 = new Rope(ball4.body,{x : 540, y : 50});
    rope5 = new Rope(ball5.body,{x : 620, y : 50});
    rope6 = new Rope(ball6.body,{x : 700, y : 50});

}
function draw(){

    background(180);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    rope6.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}