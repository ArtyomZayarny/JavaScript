var login = prompt('Enter the login', '');


if (login =='admin'){
var password = prompt('Please enter your passsword', '');
	(password == 'Black Overlord')?alert('Welcome Black Overlord!'):(password == null)?alert('The enter was cancel'):alert('Wrong password!');
}else if(login == null) {
   alert('See you later, bye!');
}
else if(login == '') {
	alert('Are you a joking? I see you entered nothing in thу field.');
}
else {
	alert('Who are you? I don\'t know you....');
}