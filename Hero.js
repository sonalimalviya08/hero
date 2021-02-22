class Hero {
    constructor(){
var options = {
    density:1,
    frictionAir:1
}
this.image = loadImage("images/Superhero-01.png");
this.body = Bodies.rectangle(500,200,40,40,options);
this.width = 40;
this.height = 40;
World.add(world,this.body);
    }
    display(){
push();
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
pop();
    }
}