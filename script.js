function closeRules(){
    document.getElementById("window-rules").style.display="none";
}

function openRules(){
    document.getElementById("window-rules").style.display="flex";

}

var score = 0;
var shadowPicks =["0 -6px hsl(349, 71%, 35%) inset","0 -6px hsl(230, 66%, 48%) inset","0 -6px hsl(34, 100%, 39%) inset"]// prock paper scissors

function pickOption(obj){
    var id = obj.id ;
    var pickPlayer = id.replace("icon-","")

    let pickOptions =["rock","paper","scissors"];

    document.getElementById("game-container-step1").style.display='none';
    document.getElementById("game-container-step2").style.display='flex';

    document.getElementById("player-pick").classList.add(pickPlayer+"-border");
    document.getElementById("pick-player-icon").setAttribute("src","./images/icon-"+pickPlayer+".svg");

    document.getElementById("pick-house-icon").style.display='none';

    playerIndex=pickOptions.indexOf(pickPlayer);
    

    document.getElementById("player-pick").style.cssText = "box-shadow:"+shadowPicks[playerIndex];

    document.getElementById("house-pick").style.cssText = "box-shadow: none";

    //console.log(pickPlayer);



    setTimeout(function(){
        pickHouse = pickOptions[parseInt(Math.random()*3)];
        //console.log(pickHouse);
        houseIndex=pickOptions.indexOf(pickHouse);

        document.getElementById("house-pick").style.cssText = "box-shadow:"+shadowPicks[houseIndex];


        document.getElementById("pick-house-icon").style.display='flex';

        document.getElementById("house-pick").classList.add(pickHouse+"-border");
        document.getElementById("house-icon-container").classList.remove("null-container");
        document.getElementById("house-icon-container").classList.add("icon-container");
        document.getElementById("pick-house-icon").setAttribute("src","./images/icon-"+pickHouse+".svg");

        setTimeout(function(){

            playerIndex=pickOptions.indexOf(pickPlayer);
            houseIndex=pickOptions.indexOf(pickHouse);

            if(playerIndex == houseIndex){ //DRAW LOGIC
                document.getElementById("game-result-text").innerHTML= "YOU DRAW";
                document.getElementById("button-play-again").style.color ="hsl(229, 25%, 31%)"
            } else {
                if((playerIndex-houseIndex == 1) || (playerIndex-houseIndex == -2)){ //WIN LOGIC
                    document.getElementById("game-result-text").innerHTML= "YOU WIN";
                    document.getElementById("button-play-again").style.color ="hsl(229, 25%, 31%)"
                    score = score + 1;

                    document.getElementById("player-pick").style.cssText = 
                    "box-shadow:"+shadowPicks[playerIndex]+",0 0 0 50px rgba(255, 255, 255, .02),0 0 0 100px rgba(255, 255, 255,.02),0 0 0 150px rgba(255, 255, 255,.02)";
                
                } else{ //LOSE LOGIC
                    document.getElementById("game-result-text").innerHTML= "YOU LOSE";
                    document.getElementById("button-play-again").style.color ="hsl(349, 71%, 52%)"
                    score = score - 1;

                    document.getElementById("house-pick").style.cssText = 
                    "box-shadow:"+shadowPicks[houseIndex]+",0 0 0 50px rgba(255, 255, 255, .02),0 0 0 100px rgba(255, 255, 255,.02),0 0 0 150px rgba(255, 255, 255,.02)";

                    if(score < 0){
                        score = 0;
                    }
                }
            }

            document.getElementById("score").innerHTML= score;
            //console.log(score);

            document.getElementById("game-result-container").style.display='flex';


        },1000);
        

    },2000)
}


function resetGame(){
    document.getElementById("game-container-step2").style.display='none';
    document.getElementById("game-container-step1").style.display='flex';

    document.getElementById("player-pick").style.cssText = "box-shadow: none"
    document.getElementById("player-pick").style.cssText = "box-shadow: none"

    document.getElementById("game-result-container").style.display='none'
    
    document.getElementById("house-pick").className = "icon-border pick-border";
    document.getElementById("player-pick").className = "icon-border pick-border";

    document.getElementById("house-icon-container").classList.remove("icon-container");
    document.getElementById("house-icon-container").classList.add("null-container");
    
    
}