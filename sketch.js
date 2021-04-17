const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

var gamestate="play";

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
box1=new Box(800,480,70,70)
box2 = new Box(800, 500, 70, 70);
box3 = new Box(800, 520, 70, 70);
  box4 = new Box(800, 540, 70, 70);
  box5 =new Box(800,560,70,70);
  box6 =new Box(800,460,70,70);
  box7 =new Box(870,410,70,70);
  box8 =new Box(870,430,70,70);
  box8 =new Box(870,450,70,70);
  box9 =new Box(870,450,70,70);


}

function draw() {
  background(bg);
  Engine.update(engine);
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
  
  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
hero.fly()
  
}