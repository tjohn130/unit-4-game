$(document).ready(function(){
//Character Fighters

class Player{
    constructor(name,hp,ap){
        this.hp = hp
        this.ap = ap
        this.name = name
        this.live = true
        this.img

    }
    //Player takes Damage
    newHp(value){
        console.log(this.hp)
        this.hp = this.hp - value
        console.log(this.hp)
    }
}
class Battle{
    Start(){
        alert("You have the chocie of fighting with Jotaro, Joseph, Wham and Dio")
        var accept = prompt("Choose your fight","Jotaro");
        //User input for Character Selection
        if (accept == "Dio"||"Jotaro"||"Wham"||"Joseph"){
            switch(accept){

                case "Dio":
                    alert("You choose Dio")
                    $(".gamearea").append('<img class="player" src="./assets/images/dio.png">')
                    return
                case "Jotaro":
                    alert("You choose Jotaro")
                    $(".gamearea").append('<img class="player" src="./assets/images/jotaro.png">')
                    return
                case "Wham":
                    alert("You choose Wham")
                    $(".gamearea").append('<img class="player" src="./assets/images/wham.png">')
                    return
                case "Joseph":
                    alert("You choose Joseph")
                    $(".gamearea").append('<img class="player" src="./assets/images/joseph.png">')
                    return
            }
        }
    }
    //Player Displays Names
    Display(name1,name2){
        console.log("////////////")
        console.log("Welcome to BattleZone")
        console.log("////////////")
        console.log("This is "+name1)
        console.log("////////////")
        console.log("AND")
        console.log("////////////")
        console.log("This is "+name2)
        console.log("////////////")
    }
    selectWinner(){

    }
    reset(){

    }
}   
var playJotaro = new Player("Jotaro",200,25);
var playJoseph = new Player("Joseph",150,10);
var playWhaw = new Player("Whaw",120,9);
var playDio = new Player("Dio",90,42);

var batTest = new Battle;

//Displays Characters
batTest.Start()
       
//Start Game



});