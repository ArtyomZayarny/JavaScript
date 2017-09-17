var myPlanet = planetFunc();
 function planetFunc() {
	 return 'Earth <br>';
 }

var user = userFunc();
function  userFunc(){
	return 'Terminator';
}
document.write('The name of my planet is - ' + myPlanet);
document.write('Hello ' + user + ' you just login');