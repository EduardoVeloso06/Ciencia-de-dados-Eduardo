const url = 'https://raw.githubusercontent.com/EduardoVeloso06/Ciencia-de-dados-Eduardo/refs/heads/main/dados-globais.json';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);

    const dados = await res.json();
}

visualizarInformacoesGlobais ();