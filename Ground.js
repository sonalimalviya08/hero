class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.8
        }
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);

    }
    display(){
push();
fill("brown");
rect(this.body.position.x,this.body.position.y,this.width,this.height);
pop();
    }
}