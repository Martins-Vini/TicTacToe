let botaoComecar = document.querySelector("button#startGame");
let principal = document.getElementsByTagName("main")[0];

function estruturaJogo() {
    debugger;
    principal.innerHTML = ` `

    let containerVelha = document.createElement("div");
    containerVelha.setAttribute('id', 'container_velha');

    principal.appendChild(containerVelha);
    console.log(principal);

    let tabelaVelha = document.createElement("table");
    tabelaVelha.setAttribute('id', 'tabela_velha');

    containerVelha.appendChild(tabelaVelha);
    let corpoTabela = document.createElement("tbody");
    corpoTabela.setAttribute('id', 'corpo_velha');
    tabelaVelha.appendChild(corpoTabela);

    let linhasTabela = []

    for (let i = 0; i < 3; i++) {
        let linha = document.createElement("tr");
        linhasTabela.push(linha)
    }

    console.log(linhasTabela)

    linhasTabela.forEach(a => {
        corpoTabela.appendChild(a)
    })

    let posicoesTbl = []

    for (let i = 0; i < 9; i++) {
        let clDado = document.createElement("td");
        clDado.classList.add("celula", "pos" + i)
        posicoesTbl.push(clDado)
    }

    let idx = 0;
    for (let linha = 0; linha < 3; linha++) {
        for (let col = 0; col < 3; col++) {
            linhasTabela[linha].appendChild(posicoesTbl[idx]);
            idx++;
        }
    }

    console.log(corpoTabela);

    let turnoP = document.createElement("p");
    turnoP.setAttribute('id', 'turno_jogador');
    turnoP.style.fontSize = "24px";
    turnoP.style.fontWeight = "bold";
    turnoP.style.textAlign = "center";
    turnoP.style.marginBottom = "20px";
    principal.insertBefore(turnoP, containerVelha);

    let turno = "X";
    turnoP.innerText = `Vez do jogador: ${turno}`;

    for (let i = 0; i < 9; i++) {
        let cell = principal.querySelector(".pos" + i);

        cell.addEventListener('click', function turnos() {
            if (this.textContent.trim() !== '') return;
            //O return aqui funciona como um "break", ou seja, se a célula já estiver preenchida, a função termina aqui.
            //A função trim() remove espaços em branco no início e no fim da string
            this.textContent = turno;
            turno = (turno === "X") ? "O" : "X";
            turnoP.innerText = `Vez do jogador: ${turno}`;

            validarVitoria(turnoP, tabelaVelha);
        });
    }

    let botaoVoltar = document.createElement("button");
    botaoVoltar.setAttribute('id', 'botao_voltar');
    botaoVoltar.setAttribute('target', '_blank');
    botaoVoltar.textContent = "Ver tutorial";
    principal.appendChild(botaoVoltar);
    botaoVoltar.addEventListener('click', function voltarMenu() {
        window.location.href = `https://www.computersciencemaster.com.br/jogo-da-velha/#google_vignette`
    })
}

export function validarVitoria(turno, conteudo) {
    let posicoes = [];
    for (let i = 0; i < 9; i++) {
        let cell = principal.querySelector(".pos" + i);
        posicoes.push(cell.textContent);
    }

    let padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //Vitórias nas horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //Vitórias nas verticais
        [0, 4, 8], [2, 4, 6] //Vitórias nas diagonais
    ];

    //for específico para percorrer os padrões de vitória (Todo o array)
    for (let padrao of padroesVitoria) {
        if (posicoes[padrao[0]] !== '' && posicoes[padrao[0]] === posicoes[padrao[1]] && posicoes[padrao[1]] === posicoes[padrao[2]]) {
            turno.innerText = `O jogador ${posicoes[padrao[0]]} venceu!`;
            turno.style.fontSize = "32px";
            turno.style.color = "green";
            conteudo.innerHTML = ""
            return;
        } else if (!posicoes.includes('')) { //Vê se não há mais espaços vazios mas ao mesmo tempo que não há sequência vencedora
            turno.innerText = `Empate entre os dois jogadores!`;
            turno.style.fontSize = "32px";
            turno.style.color = "blue";
            conteudo.innerHTML = ""
            return;
        }
    }
}

//A verificação da vitória funciona com um for of que percorre toda a matriz, ele verifica se tanto horizontalmente, verticalmente ou diagonalmente há três símbolos iguais em sequência e se a célula não está vazia.

botaoComecar.addEventListener('click', estruturaJogo);

