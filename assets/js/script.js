

document.addEventListener("DOMContentLoaded", function(){
   console.log("DOM is loaded")
   modalBj.classList.add("bj-active")
 
});
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

 let modalBj = document.querySelector(".modal-bj");
 let animals = document.querySelector("#animals");
//  let modalBtn = document.querySelector(".modal-btn")
let words = ["DENY", "HELLO", "DOG", "CAT"];
let wordAnimal = ["CAT", "RABBIT", "LION"]
let liveSpan=document.querySelector(".lives")
let alphabet= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let word= words[Math.floor(Math.random()*words.length )]
let wordsAnimals = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
console.log(word)
// *this function will check the amount of letters and create the spaces*/


animals.addEventListener("click", function(){

   modalBj.classList.remove("bj-active")
   
})


modalClose.addEventListener("click", function(){
   modalBg.classList.remove("bg-active")
   window.location.reload();
})

function runGame(){
  modalBg.classList.add("bg-active");
}

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



function animalGame(){
 for(let i=0; i<wordsAnimals.length;i++){
    let board = document.createElement('li');
    board.textContent= "__";
    board.className = "blah";
    document.getElementById('main-div').appendChild(board);
 } 
 for(let i=0; i<alphabet.length;i++){
   let alpha = document.getElementsByClassName("alphabet")[i];
   alpha.addEventListener("click", function(event){
      event.target
      let alphabetValue = alphabet[i];
    if(wordsAnimals.includes(alphabetValue)){
       for(let i =0; i<wordsAnimals.length; i++){
          if(wordsAnimals[i]===alphabetValue){
            document.getElementById("main-div").childNodes[i].textContent=alphabetValue
         
          }
       } 
    }else{decreaseLifes()}
 
   })
}
}
animalGame();






// function checkLetter(){
// for(let i=0; i<alphabet.length;i++){
//    let alpha = document.getElementsByClassName("alphabet")[i];
//    alpha.addEventListener("click", function(event){
//       event.target
//       let alphabetValue = alphabet[i];
//     if(word.includes(alphabetValue)){
//        for(let i =0; i<word.length; i++){
//           if(word[i]===alphabetValue){
//             document.getElementById("main-div").childNodes[i].textContent=alphabetValue
         
//           }
//        } 
//     }else{decreaseLifes()}
 
//    })
// }}
// checkLetter()


lives=3;
function decreaseLifes(){
   lives--;
   liveSpan.textContent = lives;
   if(lives===0){
     runGame() 
   lives=3;
   }
  
}

