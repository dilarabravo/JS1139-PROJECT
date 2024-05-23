let teamNameA = document.getElementById("teamNameA");

teamNameA.addEventListener("click", function(){
    let teamNameAPrompt = prompt("TAKIM ADI GİRİNİZ")

    document.getElementById("teamNameA").innerHTML = teamNameAPrompt.toUpperCase();

})

let value = 0;
let scoreAUp = document.getElementById("scoreAUp");

scoreAUp.addEventListener("click",function(){
    value++;

    document.getElementById("scoreA").innerHTML = value;
})

let scoreResetA = document.getElementById("scoreResetA");

scoreResetA.addEventListener("click", function(){

    document.getElementById("scoreA").innerHTML = 0;
})

let scoreDownA = document.getElementById("scoreDownA");

scoreDownA.addEventListener("click", function(){
    value--;

    if(value < 0 ){
        value = 0
    }
    
    document.getElementById("scoreA").innerHTML = value;
})