class Mango{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
           
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);
        
        
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
       
        push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(RADIUS) ;
image(this.image,0,0,this.r*2, this.r*2);
pop();

    }

}
