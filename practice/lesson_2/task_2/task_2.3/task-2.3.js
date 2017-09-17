var num = prompt('Enter the number', '');
function getRandom () {
alert( (Math.floor(Math.random() * num +1)) );
}
getRandom(num);