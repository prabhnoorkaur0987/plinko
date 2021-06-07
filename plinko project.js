const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ground1
var divisionHeight=250
var particles=[]
var plinkos=[]
var divisions=[]
var divisions
var plinkos
function setup() {

  createCanvas(480,600);
  engine = Engine.create();
  world=engine.world;
  
  
for(var k=0;k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}
for (var j=40; j <=width; j=j+40){
  plinkos.push(new Plinko(j,25))
} 
for (var j=15;j<width-10;j=j+40){
  plinkos.push(new Plinko(j,125))
}
for (var j=40;j<width;j=j+40){
  plinkos.push(new Plinko(j,225.))
}
for (var j=15;j<width-10;j=j+40){
  plinkos.push(new Plinko(j,325))
}
ground1=new Ground(200,600,1500,20)
  
}

function draw() {
  Engine.update(engine)
  background("lime"); 
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
ground1.display()



for (var i=0;i <divisions.length;i++){
  divisions[i].display()
}
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
for(var j=0;j<plinkos.length;j++){
  plinkos[j].display()
}

drawSprites();
}