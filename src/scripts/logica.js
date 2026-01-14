export function validarVitoria(posicoes) {
    let padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //Vitórias nas horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //Vitórias nas verticais
        [0, 4, 8], [2, 4, 6] //Vitórias nas diagonais
    ];

    //for específico para percorrer os padrões de vitória (Todo o array)
    for (let padrao of padroesVitoria) {
        if (posicoes[padrao[0]] !== '' && posicoes[padrao[0]] === posicoes[padrao[1]] && posicoes[padrao[1]] === posicoes[padrao[2]]) {
            return `Vitória de ${posicoes[padrao[0]]}`;
        } else if (!posicoes.includes('')) { //Vê se não há mais espaços vazios mas ao mesmo tempo que não há sequência vencedora
            return 'Empate';
        }
    }
}
