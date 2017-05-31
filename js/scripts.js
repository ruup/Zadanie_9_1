
function winPrompt() {
    var a = prompt('Podaj długośc boku', 'np 4');
    var h = prompt('Podaj wysokość', 'np 5');
    var triangleArea = a*h/2;
    console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
}
document.getElementById('prompt').addEventListener('click', function() {
     winPrompt()
});