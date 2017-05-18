var screen = document.getElementById("screen");
var operator = [];
var stored_number = [];
var buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => button.addEventListener('click', function(e){ 
	console.log(e.target.value);
	screen.innerHTML += e.target.value;

	if (e.target.value === "+") {
		number = screen.innerHTML;
		number = number.slice(0, -1);
		stored_number = number
		operator.push("+");
		clearN();
	} else if (e.target.value === "-") {
		number = screen.innerHTML;
		number = number.slice(0, -1);
		stored_number = number
		operator.push("-");
		clearN();
	} else if (e.target.value === "*") {
		number = screen.innerHTML;
		number = number.slice(0, -1);
		stored_number = number
		operator.push("*");
		clearN();
	} else if (e.target.value === "/") {
		number = screen.innerHTML;
		number = number.slice(0, -1);
		stored_number = number
		operator.push("/");
		clearN();
	} else if (e.target.value === "=") {
		calculate();
	} else if (e.target.value === "CE") {
		clearN();
	}
}))

function clearN() {
	screen.innerHTML = "";
}

function add(a, b) {
	var c = parseInt(a) + parseInt(b);
	return c;
}

function subtract(a, b) {
	var c = parseInt(a) - parseInt(b);
	return c;
}

function multiply(a, b) {
	var c = parseInt(a) * parseInt(b);
	return c;
}

function divide(a, b) {
	var c = parseInt(a) / parseInt(b);
	return c;
}

function calculate() {
	if (operator.includes("+")) {
		result = add(stored_number, this.screen.innerHTML)
		screen.innerHTML = result;
	} else if (operator.includes("-")) {
		result = subtract(stored_number, this.screen.innerHTML)
		screen.innerHTML = result;
	} else if (operator.includes("*")) {
		result = multiply(stored_number, this.screen.innerHTML)
		screen.innerHTML = result;
	} else if (operator.includes("/")) {
		result = divide(stored_number, this.screen.innerHTML)
		screen.innerHTML = result;
	}
}
