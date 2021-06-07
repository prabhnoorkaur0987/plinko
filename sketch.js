const Engine = Matter.Engine;
const World = Matter.World;



const Bodies = Matter.Bodies;

const Body = Matter.Body;

var engine,world
var ground1
var divisionHeight=300
var particles=[]

var divisions=[]




function setup() {

  createCanvas(580,600);
  engine = Engine.create();
  world=engine.world;
  
  


  ground1=new Ground(200,600,1500,20)

  


plinko1=new  Plinko(25,70,20)
plinko2=new Plinko(60,70,20)
plinko3=new Plinko(90,70,20)
plinko4=new Plinko(120,70,20)
plinko5=new Plinko(150,70,20)
plinko6=new Plinko(180,70,20)
plinko7=new Plinko(210,70,20)
plinko8=new Plinko(240,70,20)
plinko9=new Plinko(270,70,20)
plinko10=new Plinko(300,70,20)
plinko11=new Plinko(330,70,20)
plinko12=new Plinko(360,70,20)
plinko13=new Plinko(390,70,20)
plinko14=new Plinko(420,70,20)
plinko15=new Plinko(450,70,20)

plinko16=new Plinko(25,140,20)
plinko17=new Plinko(60,140,20)
plinko18=new Plinko(90,140,20)
plinko19=new Plinko(120,140,20)
plinko20=new Plinko(150,140,20)
plinko21=new Plinko(180,140,20)
plinko22=new Plinko(210,140,20)
plinko23=new Plinko(240,140,20)
plinko24=new Plinko(270,140,20)
plinko25=new Plinko(300,140,20)
plinko26=new Plinko(330,140,20)
plinko27=new Plinko(360,140,20)
plinko28=new Plinko(390,140,20)
plinko29=new Plinko(420,140,20)
plinko30=new Plinko(450,140,20)

plinko31=new Plinko(25,210,20)
plinko32=new Plinko(60,210,20)
plinko33=new Plinko(90,210,20)
plinko34=new Plinko(120,210,20)
plinko35=new Plinko(150,210,20)
plinko36=new Plinko(180,210,20)
plinko37=new Plinko(210,210,20)
plinko38=new Plinko(240,210,20)
plinko39=new Plinko(270,210,20)
plinko40=new Plinko(300,210,20)
plinko41=new Plinko(330,210,20)
plinko42=new Plinko(360,210,20)
plinko43=new Plinko(390,210,20)
plinko44=new Plinko(420,210,20)
plinko45=new Plinko(450,210,20)

plinko46=new Plinko(25,280,20)
plinko47=new Plinko(60,280,20)
plinko48=new Plinko(90,280,20)
plinko49=new Plinko(120,280,20)
plinko50=new Plinko(150,280,20)
plinko51=new Plinko(180,280,20)
plinko52=new Plinko(210,280,20)
plinko53=new Plinko(240,280,20)
plinko54=new Plinko(270,280,20)
plinko55=new Plinko(300,280,20)
plinko56=new Plinko(330,280,20)
plinko57=new Plinko(360,280,20)
plinko58=new Plinko(390,280,20)
plinko59=new Plinko(420,280,20)
plinko60=new Plinko(450,280,20)


for (var i=0;i<=width;i=i+80){
  divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
}

}

   


function draw() {
  background(0); 
ground1.display()

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,),10,10))
}

for (var k=0;k<particles.length;k++){
particles[k].display()
}


for(var i=0; i < divisions.length; i++){
  divisions[i].display()
}


plinko1.display()
plinko2.display()
plinko3.display()
plinko4.display()
plinko5.display()
plinko6.display()
plinko7.display()
plinko8.display()

plinko9.display()
plinko10.display()
plinko11.display()
plinko12.display()
plinko13.display()
plinko14.display()
plinko15.display()

plinko16.display()
plinko17.display()
plinko18.display()
plinko19.display()
plinko20.display()
plinko21.display()
plinko22.display()
plinko23.display()

plinko24.display()
plinko25.display()
plinko26.display()
plinko27.display()
plinko28.display()
plinko29.display()
plinko30.display()


plinko31.display()
plinko32.display()
plinko33.display()
plinko34.display()
plinko35.display()
plinko36.display()
plinko37.display()
plinko38.display()

plinko39.display()
plinko40.display()
plinko41.display()
plinko42.display()
plinko43.display()
plinko44.display()
plinko45.display()


plinko46.display()
plinko47.display()
plinko48.display()
plinko49.display()
plinko50.display()
plinko51.display()
plinko52.display()
plinko53.display()

plinko54.display()
plinko55.display()
plinko56.display()
plinko57.display()
plinko58.display()
plinko59.display()
plinko60.display()

  drawSprites();
}