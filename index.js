var numOfSquares  = 9;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

for(var i = 0; i<modeBtn.length; i++){
  modeBtn[i].addEventListener("click", function(){
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "EASY" ? numOfSquares = 3: numOfSquares = 6;
    reset();
  });
}
function reset(){
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function(){
  reset();
})

colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  //add clickListensers to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
     var clickedColor = this.style.backgroundColor;
     //compare color to pickedColor
     if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color){
  //loop through all sqaures
  for(var i = 0; i<squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
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
for(var i = 0; i<num; i++){
  //get random color & push into array
  arr.push(randomColor());

}
//return that array
return arr;
}
function randomColor(){
//pick a "red" from 0-255
var r = Math.floor(Math.random()*256);
//pick a "green" from 0-255
var g = Math.floor(Math.random()*256);
//pick a "blue" from 0-255
var b = Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}


/*
function getRandom(){
  var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber2 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber3 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber4 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber5 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber6 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber7 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber8 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber9 = Math.floor(Math.random() * 9) + 1;

  var firstResult = document.getElementByID('#first').innerHTML(RandomNumber1);
  var secondResult = document.getElementByID('#second').innerHTML(RandomNumber2);
  var firstResult = document.getElementByID('#third').innerHTML(RandomNumber3);
  var secondResult = document.getElementByID('#fourth').innerHTML(RandomNumber4);
  var firstResult = document.getElementByID('#fifth').innerHTML(RandomNumber5);
  var secondResult = document.getElementByID('#sexth').innerHTML(RandomNumber6);
  var secondResult = document.getElementByID('#seven').innerHTML(RandomNumber7);
  var secondResult = document.getElementByID('#eight').innerHTML(RandomNumber8);
  var secondResult = document.getElementByID('#nine').innerHTML(RandomNumber9);
}
*/
