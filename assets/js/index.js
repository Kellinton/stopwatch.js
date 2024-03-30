const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');
const minutoPontos = document.getElementById('minutoPontos');
const horaPontos = document.getElementById('horaPontos');
const iniciarBotao = document.getElementById('iniciar');
const pausarBotao = document.getElementById('pausar');
const reiniciarBotao = document.getElementById('reiniciar');

let somarHora = 0;
let somarMinuto = 0;
let somarSegundo = 0;


iniciarBotao.addEventListener("click", function(){
    console.log('iniciar');
    funcaoHoras = setInterval(contarHoras, 3600000);
    funcaoMinutos = setInterval(contarMinutos, 60000);
    funcaoSegundos = setInterval(contarSegundos, 1000);
});

pausarBotao.addEventListener("click", function(){
    console.log('pausar');
    clearTimeout(funcaoHoras);
    clearTimeout(funcaoMinutos);
    clearTimeout(funcaoSegundos);
});

reiniciarBotao.addEventListener("click", function(){
    console.log('reiniciar');
    clearTimeout(funcaoHoras);
    clearTimeout(funcaoMinutos);
    clearTimeout(funcaoSegundos);
    horaPonto.innerHTML = '';
    minutoPonto.innerHTML = '';
    hora.innerHTML = '';
    minuto.innerHTML = '';
    segundo.innerHTML = '00';
    somarHora = 0;
    somarMinuto = 0;
    somarSegundo = 0;
});



function contarHoras() {
    horaPonto.innerHTML = ':';

    if(somarHora < 9){
        somarHora = Number(somarHora) + 1;
        hora.innerHTML = `0${somarHora}`;
    }else{
        somarHora = Number(somarHora) + 1;
        hora.innerHTML = somarHora;
    }

    if(somarSegundo == 25){
        somarSegundo = '00';
        segundo.innerHTML = somarSegundo;
    }
}


function contarMinutos() {
    minutoPonto.innerHTML = ':';

    if(somarMinuto < 9){
        somarMinuto = Number(somarMinuto) + 1;
        minuto.innerHTML = `0${somarMinuto}`;
    }else{
        somarMinuto = Number(somarMinuto) + 1;
        minuto.innerHTML = somarMinuto;
    }

    if(somarSegundo == 60){
        somarSegundo = '00';
        segundo.innerHTML = somarSegundo;
    }
}

function contarSegundos() {

    if(somarSegundo < 9){
        somarSegundo = Number(somarSegundo) + 1;
        segundo.innerHTML = `0${somarSegundo}`;
    }else{
        somarSegundo = Number(somarSegundo) + 1;
        segundo.innerHTML = somarSegundo;
    }

    if(somarSegundo == 60){
        somarSegundo = '00';
        segundo.innerHTML = somarSegundo;
    }
}



// estilizando
const body = document.body;
const container = document.querySelector('#container');
const img = document.getElementById('img');
const link = document.getElementById('link');
const video = document.querySelector('video');
const cronometroContainer = document.getElementById('cronometro-circulo');
const cronometroTempo = document.getElementById('cronometro-tempo');
const paragrafos = document.querySelectorAll('body div p');
const botoes = document.getElementById('botoes');
const buttons = document.querySelectorAll('button');

// estilizando body
body.style.display = 'grid';
body.style.width = '100%';
body.style.height = '100vh';
body.style.overflow = 'hidden';
body.style.placeItems = 'center';
body.style.backgroundColor = 'black';
body.style.fontFamily = '"Orbitron", sans-serif';

// estilizando container 
container.style.position = 'relative';

// estiliando video de fundo
video.style.position = 'absolute';
video.style.width = '100%';
video.style.top = '0';
video.style.zIndex = '-1';

// estilizando circulo cronômetro
cronometroContainer.style.display = 'flex';
cronometroContainer.style.background = '#00000096';
cronometroContainer.style.flexDirection = 'column';
cronometroContainer.style.alignItems = 'center';
cronometroContainer.style.justifyContent = 'center';
cronometroContainer.style.border = 'solid 10px #fff';
cronometroContainer.style.borderRadius = '9999px';
cronometroContainer.style.width = '350px';
cronometroContainer.style.height = '350px';

// estilizando tempo 
cronometroTempo.style.display = 'flex';
// estilizando a imagem
img.src = 'assets/img/icone-github.png';
img.style.width = '50px';
img.alt = 'Github by; Kellinton';

// estilizando o link
link.href = 'https://github.com/Kellinton/';
link.style.cursor = 'pointer';
link.target = '_blank';

// estilizando paragrafos
paragrafos.forEach(paragrafo => {
    paragrafo.style.fontSize = '4rem';
    paragrafo.style.color = '#fff';
});

// estilizando botões
botoes.style.position = 'absolute';
botoes.style.display = 'flex';
botoes.style.flexDirection = 'column';
botoes.style.gap = '20px';
botoes.style.right = '0';
botoes.style.bottom = '0';

// estilizando button

buttons.forEach((button, index) => {
    button.style.backgroundColor = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '9999px';
    button.style.width = '70px';
    button.style.height = '70px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1.8rem';
    button.style.color = '#000';
  
    switch (index) {
        case 0:
            button.style.transform = 'translateX(85px)';
            break;
        case 1:
            button.style.transform = 'translateX(80px)';
            break;
        case 2:
            button.style.transform = 'translateX(35px)';
            break;
        default:
            break;
    }
});