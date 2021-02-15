class Drops{
   constructor(x,y){
      var Options = {
        restitution:0.8,
        friction:0.1,
        density:3.0
      }

      this.body = Bodies.circle(x,y,3,Options)
      this.radius = 3
      World.add(world,this.body)
   }

   newDrops(){
      if(this.body.position.y>height){
         Body.setPosition(this.body,{x:random(0,400),y:random(0,300)})
      }
   }

   display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
}