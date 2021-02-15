class Umbrella{
    constructor(x,y){
        var Options = {
            restitution:0.8,
            friction:0.1,
            density:3.0,
            isStatic:true
        }
    
        this.body = Bodies.circle(x,y,100,Options)
        this.radius = 100
        this.image = loadImage("Walking Frame/walking_1.png")
        World.add(world,this.body)
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,225,580,400,400)
        pop();
    }
}

