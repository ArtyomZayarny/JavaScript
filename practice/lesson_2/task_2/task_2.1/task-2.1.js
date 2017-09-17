
function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}
alert( 'На первой кости выпало : '+Math.floor(getRandomInt(1,6) ));
alert( 'На второй кости выпало : '+Math.floor(getRandomInt(1,6) ));