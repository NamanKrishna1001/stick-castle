const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(30,300,10,400);
    box2 = new Box(70,300,50,300);
    box3 = new Box(120,300,50,200);
    box4 = new Box(170,350,50,100);
    box5 = new Box(220,300,50,200);
    box6 = new Box(270,300,50,300);
    box7 = new Box(310,300,10,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
}