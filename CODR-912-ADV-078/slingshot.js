class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1a.png")
        this.sling2 = loadImage("sprites/sling2a.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.band = new Band()
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            if(pointA.x > 220){
                strokeWeight(4);
            }
            else{
                strokeWeight(10);
            }
            line(pointA.x +40, pointA.y, pointB.x+30, pointB.y-10);
            line(pointA.x -40, pointA.y, pointB.x-30, pointB.y-10);
            this.band.display(this.sling.body)
        }
        image(this.sling1,200,150)
        image(this.sling2,170,150)
    }
    attach(body){
        this.sling.bodyA = body;
    }
}
