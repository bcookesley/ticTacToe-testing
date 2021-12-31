
// Waits for DOM content to load first
document.addEventListener('DOMContentLoaded', () => {

  // starting page
  let startingPage = document.getElementById("start-page");
  let button = document.getElementById("button");
  let info = document.getElementById("info");

  // Game Page 

  let gamePage = document.getElementById("game-page");
  let boxes = document.querySelectorAll(".boxes");
  let showChange = document.querySelector("#showChange"); 
  let board = Array.from(boxes); 

  // Winner Page 
  let winnerPage = document.getElementById("winner-page");
  let winningName = document.getElementById("winner-name");
  let reset = document.getElementById("quit");
  let isPlayerMove = true;


  button.onclick = function () {
      if (startingPage.style.display !== "none") {
        startingPage.style.display = "none";
        info.style.display = "none";
      } else {
        startingPage.style.display = "block";
      }
      gamePage.style.display = "block";
      info.style.display = "none";

      //isPlayerMove = true;
      console.log('Start game');
      //playerMove();
  }

  // this event listener needs some work - not acting as it should and console suggests it's not a function

  document.addEventListener('click', event => {
      if (isPlayerMove === true) {
          playerMove(event);
          console.log('player event listener');
      } 
  });




  // Player move not working - it should once event listener click is operating 


  function playerMove(event) {

      if (boxes.innerText == '') {
      boxes.innerHTML += 'X';
      boxes.id = 'X';
      showChange.style.right = `160px`;

      // change The "changeTurn" Value False Into True
      isPlayerMove = false;
      console.log('player move function');
      computerMove();
      }
      
  }


  /*

  function playerMove(event) {
      if (boxes.innerText = '') {
          boxes.innerText = 'X';
          boxes.id = 'X';
          //showChange.style.left = `160px`;

          // change The "changeTurn" Value False Into True
          isPlayerMove = false;
          computerMove();
          //console.log('player move');
      }
  }
  */

  function computerMove(event) {

      if (boxes.innerText == "") {
         Math.floor(Math.random) * (boxes.length);
         boxes[move].innerText = 'O';
         playerMove();
         isPlayerMove = true;
      }

      isPlayerMove = false;
      console.log('computer move');
      //playerMove();

  }



 // document.addEventListener('click', playerMove);


/*
  boxes.forEach(items => {
      items.addEventListener("click", () => {
          // Add "X" Icon If "ChangeTurn" = False
          // Add "O" Icon If "ChangeTurn" = True
          if (changeTurn == false) {
              items.innerText = 'X';
              items.id = "X";
              items.style.pointerEvents = "none";
              showChange.style.left = `160px`;
  
              // change The "changeTurn" Value False Into True
              changeTurn = true;
          } else {
              computerMove();
  
            /* A computer turn needs to exist here in some capacity. This just generate a second move made by a person */ 
            /*
              items.innerHTML = `<i class="fas fa-circle-notch"></i>`;
              items.id = "O";
              items.style.pointerEvents = "none";
              showChange.style.left = `0px`;
  
              //change The "changeTurn" Value False Into True
              //changeTurn = false;
          }
         // winningFunc();
          // drawFunc();
      })
  })
  */

/*
  function ComputerPlayer(board) {
      this.takeTurn = function () {
          let availablePositions = board.positions.filter((p) => p.innerText === '');
          const move = Math.floor(Math.random() * (availablePositions.length - 0));
          availablePositions[move].innerText = 'O';
      }
  }
  */

  let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]

 // console.log(board);


})