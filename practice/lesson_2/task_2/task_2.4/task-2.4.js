var firstNum = prompt('Enter the first number', '');
console.log(typeof firstNum);
var secondNum = prompt('Enter the second number', '');
function getRandom () {
alert( (Math.floor(Math.random() * +(secondNum) + +(firstNum) )) );
}
getRandom(firstNum,secondNum );