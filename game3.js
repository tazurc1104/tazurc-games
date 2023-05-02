const boxes = document.querySelectorAll('.box');
var lastInput = "o";
const header = document.querySelector('.header-title')
var won = false;
const resetButton = document.getElementById("reset");



for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        if (lastInput === "o" && boxes[i].innerHTML === "" && won === false){
            boxes[i].innerHTML = "X";
            lastInput = "x";
        }
        else if (lastInput === "x" && boxes[i].innerHTML === "" && won === false){
            boxes[i].innerHTML = "O";
            lastInput = "o";
        }



        if (boxes[0].innerHTML === "X" && boxes[1].innerHTML === "X" && boxes[2].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[3].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[5].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[6].innerHTML === "X" && boxes[7].innerHTML === "X" && boxes[8].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[0].innerHTML === "X" && boxes[3].innerHTML === "X" && boxes[6].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[1].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[7].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[2].innerHTML === "X" && boxes[5].innerHTML === "X" && boxes[8].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[0].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[8].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }
        if (boxes[2].innerHTML === "X" && boxes[4].innerHTML === "X" && boxes[6].innerHTML === "X") {
            header.innerHTML = "Player X Won";
            won = true;
        }




        if (boxes[0].innerHTML === "O" && boxes[1].innerHTML === "O" && boxes[2].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[3].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[5].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[6].innerHTML === "O" && boxes[7].innerHTML === "O" && boxes[8].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[0].innerHTML === "O" && boxes[3].innerHTML === "O" && boxes[6].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[1].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[7].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[2].innerHTML === "O" && boxes[5].innerHTML === "O" && boxes[8].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[0].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[8].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
        if (boxes[2].innerHTML === "O" && boxes[4].innerHTML === "O" && boxes[6].innerHTML === "O") {
            header.innerHTML = "Player O Won";
            won = true;
        }
    });
}


reset.addEventListener("click", function(){
    lastInput = "o";
    won = false;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        header.innerHTML = "X-O-X";
    }
})