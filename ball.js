class Ball {
    constructor(x,y,radius) {
      var options = {
          density: 1.0,
          restitution:0.3,
          friction: 0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
  };