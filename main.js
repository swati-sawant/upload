let orangeBtn= document.getElementById("orangeBtn");
let redBtn= document.getElementById("redBtn");
let greenBtn= document.getElementById("greenBtn");
let blueBtn= document.getElementById("blueBtn");
let board=document.getElementById("board");

orangeBtn.addEventListener("click",orangeFunction);
function orangeFunction(){

    board.style.backgroundColor="orange";
}

redBtn.addEventListener("click",redFunction);
function redFunction(){

    board.style.backgroundColor="red";
}

greenBtn.addEventListener("click",greenFunction);
function greenFunction(){

    board.style.backgroundColor="green";
}

blueBtn.addEventListener("click",blueFunction);
function blueFunction(){

    board.style.backgroundColor="blue";
}

let textBox = document.getElementById("text");

textBox.addEventListener("input", changeText);

function changeText() {
   
    let boardtext = document.getElementById("boardText");
    boardtext.textContent = textBox.value;
}



let name=prompt("Your name Please");
document.getElementById("name").textContent=name;

