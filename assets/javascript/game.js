$(document).ready(function(){
//Character Fighters   
var character = [{name: "Jotaro", hp: 200,ap:25, live: true, img: '<img class="player" value="0" src="./assets/images/jotaro.png" width="300" height="500">'},
    {name:"Joseph", hp:150, ap:8, live:true, img:'<img class="player" value="1" src="./assets/images/joseph.png" width="300" height="500">'},
    {name:"Whaw", hp:120, ap:10, live:true, img:'<img class="player" value="2" src="./assets/images/whaw.png" width="300" height="500">'},
    {name:"Dio", hp:90, ap:50, live:true, img:'<img class="player" value="3" src="./assets/images/dio.png" width="300" height="500">'}]
//Displays Characters
for(var i=0;i<4;i++){
    $(".gamearea").append(character[i].img);
}

var playerclickcheck = false;
var killcount = 0;
       
//Start Game
if(playerclickcheck == false){
    $(".gamearea").on("click", ".player", function(){
    $(this).removeClass("player");
    $(".battlearea").append($(".player"));
    $(".player").addClass("enemy").removeClass("player");
    $(this).addClass("hero");
    // Character Objects
    var heroindex = $(".hero").attr("value");
    heroObj = character[parseInt(heroindex)];
    // Display Hero Stats
    $(".gamearea").prepend("<h2>"+heroObj.name+"</h2>").addClass("gamefont");
    playerclickcheck = true;
    })
}

$(".battlearea").on("click",".enemy", function(){
    $(this).removeClass("hero").removeClass("enemy").addClass("defender");
    $(".defendarea").append($(".defender"));
    // Character Objects
    var defenderindex = $(".defender").attr("value");
    defenderObj = character[parseInt(defenderindex)];
    // Display Defender Stats
    $(".defendarea").prepend("<h2>"+defenderObj.name+"</h2>");
    });
// Attack Button
$("#attack").on("click",function(){
    var heroindex = $(".hero").attr("value");
    var defenderindex = $(".defender").attr("value");

    heroObj = character[parseInt(heroindex)];
    defenderObj = character[parseInt(defenderindex)];

    $(".defendarea").append("<h4> HP: "+defenderObj.hp+"</h4>").addClass("gamefont");

    defenderObj.hp = defenderObj.hp - heroObj.ap;
    heroObj.hp = heroObj.hp - defenderObj.ap;
    heroObj.ap = heroObj.ap + 10;

    alert(character[heroindex].name+" attack "+ character[defenderindex].name+" with "+character[parseInt(heroindex)].ap+" Attack Power");
    alert(character[defenderindex].name +" attack "+ character[heroindex].name+" with "+character[parseInt(defenderindex)].ap+" Attack Power");
    alert(heroObj.name+"'s HP: "+heroObj.hp);
    alert(defenderObj.name+"'s HP: "+defenderObj.hp)
    
    if(defenderObj.hp<= 0){
        alert("You have defeated "+defenderObj.name);
        $(".defendarea").empty();
        defenderObj.live = false;
        killcount++;
        if(killcount == 3&&heroObj.hp>=0){
            $(".gamearea").empty();
            $(".gamearea").prepend("<h1>You Win</h1>");
        }
    }
    if(heroObj.hp<=0){
        alert(heroObj.name+" have been defeated "+defenderObj.name);
        $(".gamearea").empty();
        $(".gamearea").prepend("<h1>You Lose</h1>")
        defenderObj.live = false;
    } 

})
//Display


});