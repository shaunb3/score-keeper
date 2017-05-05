// score keeper



var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var resetBtn =document.getElementById("resetBtn"); 
var numInput =document.querySelector("input");
var p1Score =0;
var p2Score =0;

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var scoreLimit =5;
var gameOver = false;

var playingTo = document.getElementById('playingTo');

playingTo.textContent = scoreLimit;

p1Btn.addEventListener('click',function(){
	
	if(gameOver===false){
		p1Score++;
		
		if(p1Score === scoreLimit){
			gameOver = true;
			p1Display.classList.add("winner");
		}
	
	p1Display.textContent = p1Score;
	}
	
	
});

p2Btn.addEventListener('click',function(){
	if(gameOver===false){
		p2Score++;
		
		if(p2Score === scoreLimit){
			gameOver = true;
			p2Display.classList.add("winner");
		}
	
	p2Display.textContent = p2Score;
	}
});

resetBtn.addEventListener('click', function(){
	reset();
});

function reset(){
gameOver =false;
	p1Score=0;
	p2Score=0;

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
};

numInput.addEventListener("change", function(){
	playingTo.textContent=numInput.value;
	scoreLimit = Number (numInput.value);
	reset();
});