class Box{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1,
            density:20
            

        }
this.body = Bodies.rectangle(x,y,50,50,options);
this.width = 50;
this.height = 50;
World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        var b = this.body.angle;
push();
translate(p.x,p.y);
rotate(b)
    rectMode(CENTER);
    fill("blue");
rect(0,0,this.width,this.height);
pop();
    }
}