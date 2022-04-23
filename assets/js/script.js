let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

let modalBj = document.querySelector(".modal-bj");
let animals = document.querySelector("#animals");

let words = ["FOOTBALL", "BOXING", "CYCLING", "SWIMMING", "TENNIS", "CLIMBING", "BASKETBALL", "ATHLETICS", "BADMINTON"];
let wordAnimal = ["CAT", "RABBIT", "LION", "ZEBRA", "HORSE", "TIGER", "BEAR", "FROG", "FROG", "MONKEY", "SNAKE"];
let wordCinema = ["STAR-WARS", "BATMAN", "THE KING", "JUMANJI", "SPIDERMAN", "VENOM", "FROZEN", "HARRY POTTER"]

let pushAlphabet = [];

let liveSpan = document.querySelector(".lives")
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
let wordsSports = words[Math.floor(Math.random() * words.length)]
let wordsAnimals = wordAnimal[Math.floor(Math.random()*wordAnimal.length)]
let wordsCinema = wordCinema[Math.floor(Math.random()*wordCinema.length)]



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
   console.log("DOM is d")
   modalBj.classList.add("bj-active")
   let buttons = document.getElementsByTagName("button");
   for (let button of buttons) {
      button.addEventListener("click", function () {
         if (this.getAttribute("data-type") === "animals") {
            modalBj.classList.remove("bj-active")
            let wordsAnimals = wordAnimal[Math.floor(Math.random() * wordAnimal.length)]
            animalGame(wordsAnimals)
         } else if (this.getAttribute("data-type") === "sports") {
            modalBj.classList.remove("bj-active")
            wordSport()
         } else if (this.getAttribute("data-type") === "cinema") {
            modalBj.classList.remove("bj-active")
            wordCinemas()

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



function wordSport() {

   for (let i = 0; i < wordsSports.length; i++) {
      let board = document.createElement('li');
      board.textContent = "_";
      board.className = "blah";
      document.getElementById('main-div').appendChild(board);
   }
   for (let i = 0; i < alphabet.length; i++) {
      let alpha = document.getElementsByClassName("alphabet")[i];
      alpha.addEventListener("click", function (event) {
         event.target
         let alphabetValue = alphabet[i];
         if (wordsSports.includes(alphabetValue)) {
            for (let i = 0; i < wordsSports.length; i++) {
               if (wordsSports[i] === alphabetValue) {
                document.getElementById("main-div").childNodes[i].textContent = alphabetValue  
               pushAlphabet.push("alphabetValue")
               if(wordsSports.length===pushAlphabet.length){
                   console.log("hola")
               }
               }
            }
         } else {
            decreaseLifes()
         }

      })
   }
}




function animalGame() {
   for (let i = 0; i < wordsAnimals.length; i++) {
      let board = document.createElement('li');
      board.textContent = "_";
      board.className = "blah";
      document.getElementById('main-div').appendChild(board);
   }
   for (let i = 0; i < alphabet.length; i++) {
      let alpha = document.getElementsByClassName("alphabet")[i];
      alpha.addEventListener("click", function (event) {
         event.target
         let alphabetValue = alphabet[i];
         if (wordsAnimals.includes(alphabetValue)) {
            for (let i = 0; i < wordsAnimals.length; i++) {
               if (wordsAnimals[i] === alphabetValue) {
                  document.getElementById("main-div").childNodes[i].textContent = alphabetValue
                  pushAlphabet.push("alphabetValue")
               if(wordsAnimals.length === pushAlphabet.length){
                  alert("you won")
               }
               }
            }
         } else {
            decreaseLifes()
         }

      })
   }
}

function wordCinemas() {
   for (let i = 0; i < wordsCinema.length; i++) {
      let board = document.createElement('li');
      board.textContent = "_";
      board.className = "blah";
      document.getElementById('main-div').appendChild(board);
   }
   for (let i = 0; i < alphabet.length; i++) {
      let alpha = document.getElementsByClassName("alphabet")[i];
      alpha.addEventListener("click", function (event) {
         event.target
         let alphabetValue = alphabet[i];
         if (wordsCinema.includes(alphabetValue)) {
            for (let i = 0; i < wordsCinema.length; i++) {
               if (wordsCinema[i] === alphabetValue) {
                  document.getElementById("main-div").childNodes[i].textContent = alphabetValue
                  pushAlphabet.push("alphabetValue")
                  if(wordsCinema.length===pushAlphabet.length){
                      console.log("hola")
                  }
               }
            }
         } else {
            decreaseLifes()
         }

      })
   }
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