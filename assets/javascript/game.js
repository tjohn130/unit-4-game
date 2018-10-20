$(document).ready(function(){
//Character Fighters   
var character = [{name: "J1", hp: 200,ap:15, live: true, img: '<img class="player" value="0" src="https://via.placeholder.com/30x30">'},
    {name:"J2", hp:10, ap:15, live:true, img:'<img class="player" value="1" src="https://via.placeholder.com/30x30">'},
    {name:"J3", hp:10, ap:15, live:true, img:'<img class="player" value="2" src="https://via.placeholder.com/30x30">'},
    {name:"J4", hp:10, ap:15, live:true, img:'<img class="player" value="3" src="https://via.placeholder.com/30x30">'}]
//Displays Characters
for(var i=0;i<4;i++){
    $(".gamearea").append(character[i].img);
    
}
var playerclickcheck = false;
       
//Start Game
if(playerclickcheck == false){
    $(".gamearea").on("click", ".player", function(){
    $(this).removeClass("player");
    $(".battlearea").append($(".player"));
    $(".player").addClass("enemy").removeClass("player");
    $(this).addClass("hero");
    playerclickcheck = true;
    })
}

$(".battlearea").on("click",".enemy", function(){
    $(this).removeClass("hero").removeClass("enemy").addClass("defender");
    $(".defendarea").append($(".defender"));
    });
// Attack Button
$("#attack").on("click",function(){
    var heroindex = $(".hero").attr("value");
    var defenderindex = $(".defender").attr("value");
    heroObj = character[parseInt(heroindex)];
    defenderObj = character[parseInt(defenderindex)];

    defenderObj.hp = defenderObj.hp - heroObj.ap;
    console.log("The defender health is "+defenderObj.hp);
    
})

});