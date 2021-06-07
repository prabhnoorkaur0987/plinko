class Plinko{
  constructor(x, y) 
  {
    var options = 
    {
      isStatic:true,
        restitution:0.8,
        friction:0.3,
        density:1.2
    }
    this.radius=20
    this.body = Bodies.circle(x, y, this.radius, options);
  
    
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
  var angle=this.body.angle
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
  
    fill(255);
    ellipse(0, 0, this.radius);
   
  }
};