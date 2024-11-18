document.addEventListener('DOMContentLoaded', () => {
    const inputParticipante = document.querySelector('.input-participante');
    const btnAdicionar = document.querySelector('.btn-adicionar');
    const btnIniciar = document.querySelector('.btn-iniciar');
    const listaParticipantes = document.querySelector('.lista-participantes');
    const jogoContainer = document.querySelector('.jogo');
    const btnGirar = document.querySelector('.btn-girar');
    const nomesSelecionados = document.querySelector('.nomes-selecionados');
    const escolha = document.querySelector('.escolha');

    let participantes = [];

    btnAdicionar.addEventListener('click', () => {
        const nome = inputParticipante.value.trim();
        if (nome && !participantes.includes(nome)) {
            participantes.push(nome);
            const li = document.createElement('li');
            li.textContent = nome;
            listaParticipantes.appendChild(li);
            inputParticipante.value = '';
            btnIniciar.disabled = false;
        }
    });

    btnIniciar.addEventListener('click', () => {
        if (participantes.length >= 2) {
            document.querySelector('.container').style.display = 'none';
            jogoContainer.style.display = 'block';
        } else {
            alert('Adicione pelo menos 2 participantes para iniciar o jogo.');
        }
    });

    btnGirar.addEventListener('click', () => {
        if (participantes.length >= 2) {
            const random1 = participantes[Math.floor(Math.random() * participantes.length)];
            let random2;
            do {
                random2 = participantes[Math.floor(Math.random() * participantes.length)];
            } while (random1 === random2);

            const opcoes = ['Verdade', 'Desafio'];
            const escolhaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];

            nomesSelecionados.textContent = `${random1} escolhe para ${random2}`;
            escolha.textContent = `Escolha: ${escolhaAleatoria}`;
        } else {
            alert('Participantes insuficientes para girar.');
        }
    });
});
