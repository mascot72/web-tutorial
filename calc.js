window.onload = () => {
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
	let multiple = document.querySelector('#btnX');

	//event binding
	//숫자버튼
	btn0.addEventListener('click', function(e) {				
		result.innerHTML = e.target.innerHTML;
	});
	btn1.addEventListener('click', function(e) {		
		result.innerHTML = e.target.innerHTML;		
	});
	btn2.addEventListener('click', function(e) {
		let thisValue = e.target.innerHTML;

		if (currentValue[0] === -1) {
			currentValue[0] = parseInt(thisValue);
		} else {
			currentValue[1] = parseInt(thisValue);
		}
		console.log('thisValue:', thisValue);
		console.log('currentValue:', currentValue);

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

	let previousValue = parseInt(result.innerHTML);	//누적값
	let currentValue = [-1, -1];	//계산값
	let prevExec = '';	//계산종류 X, /, -, +,

	//event binding
	//실행버튼 (클릭시 계산한다, 앞의 숫자을 누적값에 실행 버튼 종류를 수행한다.)
	multiple.addEventListener('click', function(e) {		
		prevExec = e.target.innerHTML;
		console.log('prevExec innner:', prevExec);
		//다시 클릭시 이전 값에 현재값을 계산한다.
		//누적값에 계산값을 저장한다
		//결과 숫자에 보여준다
		calculator();		
		
	});
	//...2 * 2 */=
	//.........4

	function calculator() {

		let calcResult = 0;
		switch (prevExec) {
			case "X":
				calcResult = currentValue[0] * currentValue[1];
				break;
			case "=":
				calcResult = previousValue;
				break;
		}
	
		previousValue = calcResult;
		result.innerHTML = calcResult;
		currentValue[0] = -1;
		currentValue[1] = -1;
	
		console.log('prevExec: ', prevExec);
		console.log('previousValue: ', previousValue);
		console.log('currentValue: ', currentValue);
	
		return calcResult;
	}

}; 

//계산 함수
