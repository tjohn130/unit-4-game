$(document).ready(function(){
//Character Fighters   
var character = [{name: "J1", posnum: 1, live: true, img: '<img class="player" src="https://via.placeholder.com/30x30">'},
    {name:"J2", posnum:2, live:true, img:'<img class="player" src="https://via.placeholder.com/30x30">'},
    {name:"J2", posnum:3, live:true, img:'<img class="player" src="https://via.placeholder.com/30x30">'},
    {name:"J2", posnum:4, live:true, img:'<img class="player" src="https://via.placeholder.com/30x30">'}]
//Displays Characters
for(var i=0;i<4;i++){
    $(".gamearea").append(character[i].img);
}
var playerclickcheck = true;
       
//Start Game
if(playerclickcheck == false){
    $(".player").on("click", function(){
    $(this).addClass("hero");
    $(this).removeClass("player");
    $(".battlearea").append($(".player"));
    $(".player").addClass("enemy");
    $(".player").removeClass("player");
    playerclickcheck = true;
    })
}

$(".enemy").on("click",function(){
    $(this).addClass("defender");
    $(this).removeClass("enemy")
    $(".defendarea").append($(".defender"));
    })




    
    
});