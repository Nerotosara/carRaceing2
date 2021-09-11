class Player{
constructor(){
this.index=null;
this.name=null;
this.distance=0;
}
getCount(){
var playerCountRef = database.ref('playerCount');
playerCountRef.on("value", (data)=>{
    playerCount= data.val();
    })


}
updateCount(Count){
    database.ref('/').update({
        playerCount : Count
        })

    }
 update(){
     var playerIndex="players/player"+this.index
     database.ref(playerIndex).set({
         name:this.name,
         distance:this.distance
     })
     
 }
 static getPlayerInfo(){
var playerInforef=database.ref('players')
playerInforef.on("value",(data)=>{
allPlayers=data.val();


})


 }
}