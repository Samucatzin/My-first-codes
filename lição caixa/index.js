var a = window.document.getElementById('butao')
a.addEventListener('mousedown', clicar)
a.addEventListener('mouseup', desclicar)
function clicar(){
    a.style.background = '#17335e';
    a.style.fontSize = '15pt';
    a.style.paddingBottom = '4px';
    a.style.border = '3px';
    a.style.borderStyle = 'solid';
    a.style.borderColor = 'white';
}
function desclicar(){
    a.style.background = '#3273d4';
    a.style.fontSize = '17pt';
    a.style.border = '2px';
    a.style.borderStyle = 'solid';
    a.style.borderColor = 'white';
}
var b = window.document.getElementById('sebola')
b.addEventListener('click', foco)
function foco(){
    b.style.color = 'white';
}
a.addEventListener('click', function(e){
    e.preventDefault();
    const texto = document.getElementById('sebola')
    const value = texto.value;
    document.getElementById('m').innerHTML = value
    document.getElementById('sebola').value = ''
    document.getElementById('m').style.textAlign = 'center'
    document.getElementById('m').style.color = 'white'
})