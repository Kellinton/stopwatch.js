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
cronometroContainer.style.background = "url('./assets/img/circuloParado.gif')";
cronometroContainer.style.backgroundRepeat = 'no-repeat';
cronometroContainer.style.backgroundSize = 'cover';
cronometroContainer.style.transition = 'background-size 0.5s ease-in-out';
cronometroContainer.style.flexDirection = 'column';
cronometroContainer.style.alignItems = 'center';
cronometroContainer.style.justifyContent = 'center';
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
    

    var windowWidth = window.innerWidth; // obter largura do navegador


    if (windowWidth < 570) {
        video.style.display = 'none'
        body.style.backgroundImage = "url('./assets/img/gutsCelular.jpg')";
        body.style.height = '100vh';
        body.style.backgroundSize = 'cover';
        switch (index) {
            case 0:
                button.style.transform = 'translateY(-50px)';
                break;
            case 1:
                button.style.transform = 'translateY(-50px)';
                break;
            case 2:
                button.style.transform = 'translateY(-50px)';
                break;
            default:
                break;
        }
    } else {

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
    }

});