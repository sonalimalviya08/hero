const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var hero;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16;
var b;
function preload(){
    b = loadImage("images/GamingBackground.png");
}

function setup() {
 createCanvas(1300,500);

engine = Engine.create();
world = engine.world;
ground = new Ground(1500,500,3000,20);
hero = new Hero();


box1 = new Box(800,200,50,50);
box2 = new Box(850,200,50,50);
box3 = new Box(900,200,50,50);
box4 = new Box(950,200,50,50);

box5 = new Box(800,160,50,50);
box6 = new Box(840,160,50,50);
box7 = new Box(880,160,50,50);
box8 = new Box(920,160,50,50);

box9 = new Box(800,120,50,50);
box10 = new Box(840,120,50,50);
box11 = new Box(880,120,50,50);
box12 = new Box(920,120,50,50);

box13 = new Box(800,80,50,50);
box14 = new Box(840,80,50,50);
box15 = new Box(880,80,45,50);
box16 = new Box(920,80,50,50);

}
function draw() {
 background(b); 

Engine.update(engine);

hero.display();

ground.display();
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

//drawSprites();
}


