class block{
constructor(x,y,w,h){
var options={
    isStatic:false,
    restitution:1,
    density:0.5,
    friction:0.3
}
this.body=Bodies.rectangle(x,y,w,h)
this.x=x
this.y=y
this.width=w
this.height=h
World.add(world,this.body)

}
display(){
push()
var sp=this.body.position
rect(sp.x,sp.y,sp.width,sp.height)
pop()

}
}