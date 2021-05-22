class Ground{
    constructor(x,y,width,height){
    var options_ground = {
        isStatic: true

    }

    this.body = Bodies.rectangle(x,y,width,height,options_ground);
    World.add(world,this.body);
    this.width = width;
    this.height = height;

    }

    display(){
     var posi = this.body.position;
     fill("blue");
     rectMode(CENTER);
    rect(posi.x,posi.y,this.width,this.height);
    }
}

