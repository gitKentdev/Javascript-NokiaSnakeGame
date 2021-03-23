const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
window.addEventListener('keydown', getKey);
setInterval(startGame, 1000/10);

// Variables
let posX = 10;
let posY = 10;

let velX = 1;
let velY = 0;

let gridSize = 20;

let appleX = Math.floor(Math.random()*20);
let appleY = Math.floor(Math.random()*20);


let sendero = [];
let snakeSize = 3;


function getKey(event) {
	// event.preventDefault()

	if (event.keyCode === 37 && velX !== 1) {
		velX = -1; 
		velY = 0;
	} else if (event.keyCode === 38 && velY !==1) {
		velX = 0; 
		velY = -1;
	} else if (event.keyCode === 39 && velX !== -1) {
		velX = 1;
		velY = 0;
	} else if (event.keyCode === 40 && velY !== -1) {
		velX = 0;
		velY = 1;
	}
}

function startGame() {
	posX += velX;
	posY += velY;

	if (posX < 0) {
		posX = gridSize - 1;
	} else if (posX > gridSize - 1) {
		posX = 0
	} else if (posY < 0) {
		posY = gridSize - 1;
	} else if (posY > gridSize - 1) {
		posY = 0;
	}


	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'lime';
	for (let i = 0;  i < sendero.length; i++) {
		ctx.fillRect(sendero[i].X * gridSize , sendero[i].Y * gridSize , gridSize - 2 , gridSize - 2 );

		if (sendero[i].X === posX && sendero[i].Y === posY) {
			snakeSize = 3;
		}
	}

	ctx.fillStyle = 'green';
	ctx.fillRect(posX * gridSize , posY * gridSize , gridSize - 2 , gridSize - 2 );

	sendero.push({X:posX , Y:posY});
	while (sendero.length > snakeSize) {
		sendero.shift();
	}

	if (posX == appleX && posY == appleY) {
		appleX = Math.floor(Math.random()*20);
		appleY = Math.floor(Math.random()*20);

		snakeSize++;
	}




	ctx.fillStyle = 'red';
	ctx.fillRect(appleX * gridSize , appleY * gridSize , gridSize - 2 , gridSize - 2);

}