

document.addEventListener("DOMContentLoaded", function(){
   console.log("DOM is loaded")
   modalBj.classList.add("bj-active")
 
});
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

 let modalBj = document.querySelector(".modal-bj");
 let modalClos = document.querySelector(".modal-clos");
//  let modalBtn = document.querySelector(".modal-btn")
let words = ["DENY", "HELLO", "DOG", "CAT"];
let liveSpan=document.querySelector(".lives")
let alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let word= words[Math.floor(Math.random()*words.length )]
console.log(word)
// *this function will check the amount of letters and create the spaces*/


modalClose.addEventListener("click", function(){
   modalBg.classList.remove("bg-active")
   window.location.reload();
})

function runGame(){
  modalBg.classList.add("bg-active");
}





function createSpaces(){
 for(let i=0; i<word.length;i++){
    let board = document.createElement('li');
    board.textContent= "__";
    board.className = "blah";
    document.getElementById('main-div').appendChild(board);
 } 
   
}
createSpaces();



function createAlphabet(){
  for(let i=0; i<alphabet.length;i++){
    let createButton = document.createElement("button");
    let div= document.getElementById("button");
    div.appendChild(createButton)
    createButton.className="alphabet";
    createButton.innerHTML = alphabet[i];
   
  }
}
createAlphabet();




function checkLetter(){
for(let i=0; i<alphabet.length;i++){
   let alpha = document.getElementsByClassName("alphabet")[i];
   alpha.addEventListener("click", function(event){
      event.target
      let alphabetValue = alphabet[i];
    if(word.includes(alphabetValue)){
       for(let i =0; i<word.length; i++){
          if(word[i]===alphabetValue){
            document.getElementById("main-div").childNodes[i].textContent=alphabetValue
         
          }
       } 
    }else{decreaseLifes()}
 
   })
}}
checkLetter()


lives=3;
function decreaseLifes(){
   lives--;
   liveSpan.textContent = lives;
   if(lives===0){
     runGame() 
   lives=3;
   }
  
}

