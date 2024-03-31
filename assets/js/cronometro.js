const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');
const minutoPontos = document.getElementById('minutoPontos');
const horaPontos = document.getElementById('horaPontos');
const iniciarBotao = document.getElementById('iniciar');
const pausarBotao = document.getElementById('pausar');
const reiniciarBotao = document.getElementById('reiniciar');
const aplicarCirculo = document.getElementById('cronometro-circulo');

let somarHora = 0;
let somarMinuto = 0;
let somarSegundo = 0;


iniciarBotao.addEventListener("click", function(){
    console.log('iniciar');
    funcaoHoras = setInterval(contarHoras, 3600000);
    funcaoMinutos = setInterval(contarMinutos, 60000);
    funcaoSegundos = setInterval(contarSegundos, 1000);
    aplicarCirculo.style.background = "url('./assets/img/circuloAcionado.gif')";
    aplicarCirculo.style.backgroundRepeat = 'no-repeat';
    aplicarCirculo.style.backgroundSize = 'cover';
});

pausarBotao.addEventListener("click", function(){
    console.log('pausar');
    clearTimeout(funcaoHoras);
    clearTimeout(funcaoMinutos);
    clearTimeout(funcaoSegundos);
    aplicarCirculo.style.background = "url('./assets/img/circuloParado.gif')";
    aplicarCirculo.style.backgroundRepeat = 'no-repeat';
    aplicarCirculo.style.backgroundSize = 'cover';
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
    aplicarCirculo.style.background = "url('./assets/img/circuloParado.gif')";
    aplicarCirculo.style.backgroundRepeat = 'no-repeat';
    aplicarCirculo.style.backgroundSize = 'cover';
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