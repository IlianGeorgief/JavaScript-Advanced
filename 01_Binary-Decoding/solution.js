// let temp = '0100011011010111100100100000011011100110000101101101011001010010000001101001011100110010';

function solve() {
	let input = document.getElementById('input').value;
	let res = document.getElementById('resultOutput');

	let num = input.split('').map(Number).reduce((acc, x) => acc + x, 0);
	while (num > 9) {
		num = num.toString().split('').map(Number).reduce((acc, x) => acc + x, 0);
	}
	let parsedNumber = input.slice(num, input.length - num);

	let chars = [];
	for (let i = 0; i < Math.ceil(parsedNumber.length / 8); i++) {
		chars.push(String.fromCharCode(parseInt(parsedNumber.slice(i * 8, (i + 1) * 8), 2)));
	}

	let result = chars.filter(x => x.match(/[A-Za-z ]/)).join('');
	res.innerHTML = result;

}

