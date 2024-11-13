let timer;
let segundos = 0;
let pausado = true;

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarCronometro() {
    if (pausado) {
        pausado = false;
        timer = setInterval(() => {
            segundos++;
            document.getElementById('cronometro').innerText = criaHoraDosSegundos(segundos);
        }, 1000);
    }
}

function pausarCronometro() {
    pausado = true;
    clearInterval(timer);
}

function zerarCronometro() {
    pausado = true;
    clearInterval(timer);
    segundos = 0;
    document.getElementById('cronometro').innerText = '00:00:00';
}

document.getElementById('start').addEventListener('click', iniciarCronometro);
document.getElementById('pause').addEventListener('click', pausarCronometro);
document.getElementById('reset').addEventListener('click', zerarCronometro);
