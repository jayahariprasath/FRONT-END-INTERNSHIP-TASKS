
var button = document.getElementById('changeColorButton');
button.addEventListener('click', function() {
  var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  document.body.style.backgroundColor = randomColor;
});
