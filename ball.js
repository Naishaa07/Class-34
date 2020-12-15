class Ball {
    constructor(x,y,radius) {
      var options = {
          //isStatic: false,
          frictionAir:0.005,
          //restitution:0.04
          density:1
      }
      //this.visibility=255;
      this.body = Bodies.circle(x,y,radius,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
      
    }
    display(){
     
      
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      
        
      
    }
    
  };

  