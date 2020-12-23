const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    pimg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   G1 = new Ground (400,250,300,20)

    b1 = new Box(300,275,30,40)
    b2 = new Box(330,275,30,40)
    b3 = new Box(360,275,30,40)
    b4 = new Box(390,275,30,40)
    b5 = new Box(420,275,30,40)
    b6 = new Box(450,275,30,40)
    b7 = new Box(480,275,30,40)
    b8 = new Box(330,235,30,40)
    b9 = new Box(360,235,30,40)
    b10 = new Box(390,235,30,40)
    b11 = new Box(420,235,30,40)
    b12 = new Box(450,235,30,40)
    b13 = new Box(360,195,30,40)
    b14 = new Box(390,195,30,40)
    b15 = new Box(420,195,30,40)
    b16 = new Box(390,155,30,40)

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:100})
}


function draw(){
    background(0);
    Engine.update(engine);

    G1.display()

    fill("lightblue")
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    fill("pink")
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    fill("cyan")
    b13.display()
    b14.display()
    b15.display()
    fill("lightgrey")
    b16.display()
    slingshot.display();

    imageMode(CENTER)
    image(pimg,polygon.position.x,polygon.position.y,40,40)

}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly()
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}