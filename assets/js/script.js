let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

let body = document.querySelector(".body")
let img = document.querySelector(".img")


let modalIn = document.querySelector(".modal-Initiator");


let winModal = document.querySelector(".winner")

let wordCinema =["STAR WARS", "BATMAN", "THE KING", "JUMANJI", "SPIDERMAN", "VENOM", "FROZEN", "HARRY-POTTER"]
let wordAnimal =["CAT", "RABBIT", "LION", "ZEBRA", "HORSE", "TIGER", "BEAR", "FROG", "FROG", "MONKEY", "SNAKE"]
let word = ["FOOTBALL", "BOXING", "CYCLING", "SWIMMING", "TENNIS", "CLIMBING", "BASKETBALL", "ATHLETICS", "BADMINTON"]

let liveSpan = document.querySelector(".lives")


let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
let pushAlphabet = [];
let letter;
/*This function creates the alphabet buttons*/
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
   modalIn.classList.add("modalInt")
   let buttons = document.getElementsByTagName("button");
   for (let button of buttons) {
      button.addEventListener("click", function () {
         if (this.getAttribute("data-type") === "animals") {
            modalIn.classList.remove("modalInt")
            img.classList.add("imgAnimal")
            let wordsAnimals = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
            wordGuessed(wordsAnimals)
         } else if (this.getAttribute("data-type") === "sports") {
            modalIn.classList.remove("modalInt")
            let wordsSports = word[Math.floor(Math.random() * word.length)]
            wordGuessed(wordsSports)
            img.classList.add("imgSport")
            console.log(wordsSports)
         } else if (this.getAttribute("data-type") === "cinema") {
            modalIn.classList.remove("modalInt")
            img.classList.add("imgCinema")
            let wordsCinema = wordCinema[Math.floor(Math.random()*wordCinema.length)]
            wordGuessed(wordsCinema)
             console.log(wordsCinema)
         }else if (this.getAttribute("data-type")==="win"){
           window.location.reload()
            
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
              
               letter.removeEventListener("click", e)
               decreaseLifes()
            }
   
            })  
           }
}


function letterGuessed(wor, pushAlphabet){ 
if(wor.length===pushAlphabet.length){
   winModal.classList.add("win-active")
   
}}



lives = 3;

function decreaseLifes() {
   lives--;
   liveSpan.textContent=`You have ${lives} shots left`
   if (lives === 0) {
      lives = 3;
      runGame()
   }
}

