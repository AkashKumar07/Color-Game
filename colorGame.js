var numSquares = 6;
var colors = generateRandomColors(numSquares);  
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	messageDisplay.textContent = "";
	resetButton.textContent="New Colors";
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
	messageDisplay.textContent = "";
	resetButton .textContent="New Colors";
})

resetButton.addEventListener("click", function(){
	var numSquares = 6;
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color form array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent="New Colors";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		//console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent= "Try Again";
		}
	});
}

function changeColors(clickedColor){
	//loop through all the squares
	for(var i=0; i<squares.length; i++){
		//change each color to match the given color
		//console.log(clickedColor);
		squares[i].style.backgroundColor= clickedColor;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i< num; i++){
		//get random color and push into arr
		 arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}