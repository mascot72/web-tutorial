let render = () => {
	let result = document.querySelector('#result');
	
	let btn0 = document.querySelector('#btn0');
	let btn1 = document.querySelector('#btn1');
	let btn2 = document.querySelector('#btn2');
	let btn3 = document.querySelector('#btn3');
	let btn4 = document.querySelector('#btn4');
	let btn5 = document.querySelector('#btn5');
	let btn6 = document.querySelector('#btn6');
	let btn7 = document.querySelector('#btn7');
	let btn8 = document.querySelector('#btn8');
	let btn9 = document.querySelector('#btn9');

	btn0.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn1.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn2.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn3.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn4.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn5.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn6.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn7.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn8.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	btn9.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;
	});
	//...

};

document.onload = function(){render();}