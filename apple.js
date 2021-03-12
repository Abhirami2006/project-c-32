class Apple{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("appleImg.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}