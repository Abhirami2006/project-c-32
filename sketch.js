const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

var basket1,bin1;
var basket2,bin2;
var basket3,bin3;
var basket4,bin4;

var score = 0;

function preload()
{
    backgroundImg = loadImage("BACKGROUND.jpg");

    basket1 = loadImage("basketImg.png");
    basket2 = loadImage("basketImg.png");
    basket3 = loadImage("basketImg.png");
    basket4 = loadImage("basketImg.png");
}

function setup()
{
    var canvas = createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,585,1200,25);

    apple = new Apple(340,250,60,60);

    bin1 = createSprite(400,491,15,150);
    bin1.addImage(basket1);
    bin1.scale = 0.35;

    bin2 = createSprite(550,491,15,150);
    bin2.addImage(basket2);
    bin2.scale = 0.35;

    bin3 = createSprite(700,491,15,150);
    bin3.addImage(basket3);
    bin3.scale = 0.35;

    bin4 = createSprite(850,491,15,150);
    bin4.addImage(basket4);
    bin4.scale = 0.35;

    block1 = new Block(347,534,9,75);
    block2 = new Block(453,534,9,75);

    block3 = new Block(497,534,9,75);
    block4 = new Block(603,534,9,75);

    block5 = new Block(647,534,9,75);
    block6 = new Block(753,534,9,75);

    block7 = new Block(797,534,9,75);
    block8 = new Block(903,534,9,75);

    slingShot = new Slingshot(apple.body,{x:340,y:220});

}

function draw()
{
    background(backgroundImg);

    Engine.update(engine);

    ground.display();

    apple.display();

    block1.display();
    block2.display();

    block3.display();
    block4.display();

    block5.display();
    block6.display();

    block7.display();
    block8.display();

    slingShot.display();

    textSize(20);
    fill("black");
    text("To play again, press space key",10,30);


    drawSprites();

}

function mouseDragged()
{
    Matter.Body.setPosition(apple.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(apple.body);
    }
}
