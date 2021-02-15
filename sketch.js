const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var MaxDrops = 100;
var Array1 = []


function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
    createCanvas(450,750);
    engine = Engine.create();
    world = engine.world;

    if(frameCount%100 === 0){
        for(var i = 0; i<MaxDrops; i++){
            Array1.push(new Drops(random(0,400), random(0,600)))
        }
    }

    umbrella = new Umbrella(225,530)
    
}

function draw(){
    background("black");
    Engine.update(engine);

    for(var i = 0; i<MaxDrops; i++){
        Array1[i].display()
        Array1[i].newDrops()
    }

    rand = Math.round(random(1,4))

    if(frameCount%80 === 0){

        thunder = createSprite(random(50,350),random(10,30))

        switch(rand){
            case 1 : thunder.addImage(thunder1)
            break;

            case 2 : thunder.addImage(thunder2)
            break;

            case 3 : thunder.addImage(thunder3)
            break;

            case 4 : thunder.addImage(thunder4)
            break;

            default : break;


        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 20
    }
    
    

    umbrella.display();
    
    
    drawSprites();


    
}   

