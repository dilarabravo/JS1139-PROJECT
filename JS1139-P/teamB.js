let teamNameB = document.getElementById("teamNameB");
let scoreB = document.getElementById("scoreB");
const upScoreB = document.getElementById("upScoreB");
const resetScoreB = document.getElementById("resetScoreB");
const downScoreB = document.getElementById("downScoreB");

teamNameB.addEventListener("click", function(){
    let teamNameBPrompt = prompt("TAKIM ADI GİRİNİZ");
    document.getElementById("teamNameB").innerHTML = teamNameBPrompt.toUpperCase(); 
})
 value = 0;

 upScoreB.addEventListener("click", function(){
    value++;
    document.getElementById("scoreB").innerHTML = value;
 })

 resetScoreB.addEventListener("click", function(){

    document.getElementById("scoreB").innerHTML = 0;
 })

 downScoreB.addEventListener("click", function(){
   value--;
   
   if(value < 0){
      value = 0
   }
   document.getElementById("scoreB").innerHTML = value;
 })


