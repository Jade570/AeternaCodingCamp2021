let buttonProp = document.getElementById("rock");
let img = document.getElementById("img");
buttonProp.addEventListener("mouseover", game());
let winRate = 0.333;
let otherRate = (1-winRate)/2;
let drawRate = winRate+otherRate;
let controlRate = 0.05;

function game(){
    let player = Math.random();
    /*
    if (player <= winRate){ // win
        winRate -= 0.05;
        otherRate = (1-winRate)/2;
        drawRate = winRate+otherRate;
        img.src="win.JPG";
    }
    else { // other
        if (player <= drawRate){ // draw
        img.src="draw.JPG";
        }
        else{ // lose
            winRate += 0.05;
            otherRate = (1-winRate)/2;
            drawRate = winRate+otherRate;
            img.src="lose.JPG";
        }
    }*/
    console.log(player);
}





