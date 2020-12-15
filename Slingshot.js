class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.5,
            length: 260
        }
        //this.sling1=loadImage("sprites/sling1.png")
       // this.sling2=loadImage("sprites/sling2.png")
       // this.sling3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }




    fly(){
        this.sling.bodyA = null;
    }

    display(){
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        
    }
    attach(body){
        this.sling.bodyA=body
    } 
}