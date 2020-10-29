class Bob {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.65,
          density:0.8,
          friction:0.8
          
      }
      this.body = Bodies.circle(x,y,15,options);
      this.radius=30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  }