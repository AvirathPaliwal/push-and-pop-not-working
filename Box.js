class Box{
 constructor(x,y,width,height){
   var position ={
       isStatic:false
   }
    this.visibility = 255
    this.body=Bodies.rectangle(x,y,width,height,position)
    this.w=width
    this.h=height
    World.add(world,this.body)
 }
  display(){
    var pos =this.body.position
    rectMode(CENTER)
    if(this.body.speed <3)
       {
         
          translate(pos.x, pos.y);
         rotate(this.body.angle);
         rect(0,0,this.w,this.h);
         
       }
      else{
         World.remove(world,this.body); 
         push() 
         //translate(pos.x, pos.y);
         //rotate(this.body.angle);
         //rect(0,0,this.w,this.h);
         this.visibility = this.visibility -5;
         tint(255,this.visibility);
         pop()
     
        }
      
    
  }
};
  
