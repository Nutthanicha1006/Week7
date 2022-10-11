window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById('start');
	startButton.onclick = startGame;
}

function startGame(){
	var boxValue = document.getElementById('numbox');
	if(boxValue.value >= 1){
		alert("ARE YOU READY!!");	
		addBox();
		timeStart();
	}
	else{
		alert("Invaild value input , Please try again!");
		boxValue.value = "";
	}
}

function timeStart(){
	var TIMER_TICK = 1000;
	var min = 0.5; 
	var second = min*60; 
	var timer = second;
	var x = document.getElementById('clock');
	document.getElementById('clock').textContent = timer;
	var timer_interval = setInterval(timeCount , TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		timer = timer - 1; 
		x.innerHTML = timer;
		if(timer <= 0 && allbox.length > 0){
			alert("GAME OVER");
			document.getElementById('clock').textContent = "";
			document.getElementById("numbox").value="";
			clearInterval(timer_interval);
			clearScreen();
		}
		else if (timer > 0 && allbox.length == 0){
			alert("YOU WIN!!");
			document.getElementById('clock').textContent = "";
			document.getElementById("numbox").value="";
			clearInterval(timer_interval);
			clearScreen();
		}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.classList.add('square' , colorDrop);
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){

	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
 	for(var i=0;i<allbox.length;i++){
	allbox[i].parentNode.removeChild(allbox[i]);
 }
}



