let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

let modalBj = document.querySelector(".modal-bj");
let animals = document.querySelector("#animals");

let winModal = document.querySelector(".winner")

let wordCinema =["STAR WARS", "BATMAN", "THE KING", "JUMANJI", "SPIDERMAN", "VENOM", "FROZEN", "HARRY-POTTER"]
let wordAnimal =["CAT", "RABBIT", "LION", "ZEBRA", "HORSE", "TIGER", "BEAR", "FROG", "FROG", "MONKEY", "SNAKE"]
let word = ["FOOTBALL", "BOXING", "CYCLING", "SWIMMING", "TENNIS", "CLIMBING", "BASKETBALL", "ATHLETICS", "BADMINTON"]

let liveSpan = document.querySelector(".lives")

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
let pushAlphabet = [];
let letter;

function createAlphabet() {
   for (let i = 0; i < alphabet.length; i++) {
      let createButton = document.createElement("button");
      let div = document.getElementById("button");
      div.appendChild(createButton)
      createButton.className = "alphabet";
      createButton.innerHTML = alphabet[i];

   }
}
createAlphabet();

document.addEventListener("DOMContentLoaded", function () {
   console.log("DOM is loaded")
   modalBj.classList.add("bj-active")
   let buttons = document.getElementsByTagName("button");
   for (let button of buttons) {
      button.addEventListener("click", function () {
         if (this.getAttribute("data-type") === "animals") {
            modalBj.classList.remove("bj-active")
            let wordsAnimals = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
            wordGuessed(wordsAnimals)
            console.log(wordsAnimals)
         } else if (this.getAttribute("data-type") === "sports") {
            modalBj.classList.remove("bj-active")
            let wordsSports = word[Math.floor(Math.random() * word.length)]
            wordGuessed(wordsSports)
         } else if (this.getAttribute("data-type") === "cinema") {
            modalBj.classList.remove("bj-active")
            let wordsCinema = wordCinema[Math.floor(Math.random()*wordCinema.length)]
            wordGuessed(wordsCinema)

         }else if (this.getAttribute("data-type")==="win"){
            winModal.classList.remove("win-active")
            modalBj.classList.add("bj-active")
         }
      })

   }

});

function runGame() {
   modalBg.classList.add("bg-active");

   modalClose.addEventListener("click", function () {
      modalBg.classList.remove("bg-active")
      window.location.reload();
   })

}


function wordGuessed(wor) {
      for (let i = 0; i < wor.length; i++) {
         let board = document.createElement('li');
         board.className = "blah";
         document.getElementById('main-div').appendChild(board);
         for(let word of wor){
            if(word===" "){
               board.textContent=" ";
            }else {
               board.textContent = "_"
            }
         }
      }
      for (let i = 0; i < alphabet.length; i++) {
         let alpha = document.getElementsByClassName("alphabet")[i];
         alpha.addEventListener("click", function e (event) {
          let letter = event.target
            let alphabetValue = alphabet[i];
            if (wor.includes(alphabetValue)) {
               for (let i = 0; i < wor.length; i++) {
                  if (wor[i] === alphabetValue) {
                   document.getElementById("main-div").childNodes[i].textContent = alphabetValue
                   pushAlphabet.push("alphabetValue")    
                   
                   letterGuessed(wor, pushAlphabet)
                   
                   letter.removeEventListener("click", e)
                 
                  }
               }
            } else {
               decreaseLifes()
               letter.removeEventListener("click", e)
            }
   
            })  
           }
}


function letterGuessed(wor, pushAlphabet){ 
if(wor.length===pushAlphabet.length){
   winModal.classList.add("win-active")
}



lives = 3;

function decreaseLifes() {
   lives--;
   liveSpan.textContent = lives;
   if (lives === 0) {
      lives = 3;
      runGame()
   }

}



