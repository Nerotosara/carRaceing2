class Form{
constructor(){
this.input=createInput('name');
this.button=createButton("play");
this.greeting=createElement('h1');
this.title=createElement("h2")
}
hide(){
this.greeting.hide()
this.button.hide()
 this.input.hide()

}
display(){
//var title = createElement('h2');
this.title.html("CAR RACING GAME");
this.title.position(displayWidth/2+299,displayHeight/2-199);
this.input.position (displayWidth/2+299,displayHeight/2-80);
this.button.position(displayWidth/2+299,displayHeight/2+19);
this.button.mousePressed (()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1;
player.index=playerCount
player.update();
player.updateCount(playerCount);
this.greeting.html("HELLO, WELCOME TO MY GAME  " + player.name)
this.greeting.position (displayWidth/2,displayHeight/2)
       })
}
}