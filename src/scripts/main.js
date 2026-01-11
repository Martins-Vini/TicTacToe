let botaoComecar = document.querySelector("button#startGame");
let principal = document.getElementsByTagName("main")[0];

function estruturaJogo() {
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

            this.textContent = turno;
            turno = (turno === "X") ? "O" : "X";
            turnoP.innerText = `Vez do jogador: ${turno}`;
        });
    }
}



botaoComecar.addEventListener('click', estruturaJogo);