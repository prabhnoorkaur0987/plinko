class Particle{
  constructor(x, y,radius) 
  {
    var options = {
      isStatic:false,
        restitution:0.8,
        friction:1,
        density:1.2,
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.color=color(random(0,255),(random(0,255)))
    this.radius = radius;
    
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
  var angle=this.body.angle
    push();

   
   translate(pos.x,pos.y)
   rotate (angle)
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    this.color=color(random(0,255),(random(0,255)))
    ellipse(0, 0, this.radius);
    pop();
  }
};