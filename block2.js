class Block2{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image= loadImage("block2Img.png");
        this.visiblity = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,45,45 );
        pop();
        }
        else{
          World.remove(world,this.body);
          push()
          this.visiblity = this.visiblity-5;
          tint(255,this.visiblity);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
         pop()
        }
      }
}