let sp = "São Paulo Futebol Clube é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 25 de janeiro de 1930,[1] tendo interrompido suas atividades em maio de 1935, e as retomado em dezembro do mesmo ano.[5]"
let co = "Sport Club Corinthians Paulista é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado de São Paulo. Foi fundado como uma equipe de futebol no dia 1 de setembro de 1910 por um grupo de operários do bairro Bom Retiro. Seu nome foi inspirado no Corinthian FC de Londres, que excursionava pelo Brasil.";
let pa = "Sociedade Esportiva Palmeiras é um clube poliesportivo brasileiro da cidade de São Paulo, capital do estado homônimo. Foi fundado em 26 de agosto de 1914 e suas cores, presentes no escudo e bandeira oficial, são o verde e branco.[4] O vermelho, presente desde sua fundação em 1914, foi excluído durante a Segunda Guerra Mundial, por pressão do governo nacional, na mesma reunião que formalizou a mudança de nome de Palestra Itália para Palmeiras.[5]";
var s = document.getElementById('SP');
s.addEventListener('mouseenter', cima1);
s.addEventListener('mouseout', saiu1);
var c = document.getElementById('CO');
c.addEventListener('mouseenter', cima2);
c.addEventListener('mouseout', saiu2);
var p = document.getElementById('PA');
p.addEventListener('mouseenter', cima3);
p.addEventListener('mouseout', saiu3);
function saiu3(){
    p.style.font = 'normal 16pt Arial';
}
function cima3(){
    p.style.font = 'bold 20.21px Arial';
    
}
function saiu2(){
    c.style.font = 'normal 16pt Arial';
}
function cima2(){
    c.style.font = 'bold 19.74px Arial';
}
function saiu1(){
    s.style.font = 'normal 16pt Arial';
};
function cima1(){
    s.style.font = 'bold 20.21px Arial';
};

document.getElementById('SP').onclick = function(){
    document.getElementById('text').innerHTML = `${sp}`
    document.getElementById('noti').innerHTML = "São Paulo!"
}
document.getElementById('CO').onclick = function(){
    document.getElementById('text').innerHTML = `${co}`
    document.getElementById('noti').innerHTML = "Corinthians!"
}
document.getElementById('PA').onclick = function(){
    document.getElementById('text').innerHTML = `${pa}`
    document.getElementById('noti').innerHTML = "Palmeiras!"
}