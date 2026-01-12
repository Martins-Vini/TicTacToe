# Copilot instructions — TicTacToe 🎮

**Resumo rápido**
- Projeto estático, jogo da velha (Tic-Tac-Toe) implementado com HTML, CSS e JavaScript puro (ES modules).
- Executar abrindo `index.html` no navegador. Não há sistema de build, testes ou CI detectáveis.

## Arquivos-chave 🔧
- `index.html` — ponto de entrada. Contém o botão `#startGame` e importa `src/scripts/main.js` como `type="module"`.
- `src/scripts/main.js` — toda a lógica atual: geração dinâmica do tabuleiro, alternância de turno e listeners por célula.
- `src/styles/style.css` — estilos principais; classes/IDs usados pelo script estão aqui (`.celula`, `#tabela_velha`, etc.).
- `src/images/` e `src/audios/` — assets estáticos usados pela interface.

## Padrões e convenções que um agente deve seguir ✅
- Linguagem e texto: o código e `README.md` usam PT-BR (variáveis/IDs em português). Preserve a consistência de idioma ao editar textos visíveis.
- Seletores e estrutura DOM:
  - O tabuleiro é criado pela função `estruturaJogo()` (em `main.js`) usando `document.createElement` / `appendChild`.
  - Células têm classes `celula` e `pos{index}` (ex.: `.pos0` .. `.pos8`). Use esse padrão para localizar/atualizar células.
  - IDs relevantes: `#container_velha`, `#tabela_velha`, `#corpo_velha`, `#turno_jogador`.
- Lógica de turno e bloqueio de jogada:
  - O alternador de turno é a variável `turno` (`"X"` / `"O"`).
  - A proteção para não sobrescrever uma célula usa `this.textContent.trim() !== ''` dentro do handler atual.
- Importante: o script é importado como módulo (`<script type="module" src="src/scripts/main.js"></script>`), então alterações que exportem/importem devem manter compatibilidade de módulo.

## Comportamento atual (observável) ⚠️
- Não há detecção de vitória/empate implementada — apenas alternância visual de X/O.
- Não existe botão de reset/restart persistente; jogar novamente chama `estruturaJogo()` ao clicar em `#startGame`.
- Sem testes automatizados nem pipeline — qualquer alteração importante deve incluir instruções no `README.md`.

## Exemplos úteis para edições (copiar/colar) ✂️
- Seleção de célula usada no código:
  - `let cell = principal.querySelector('.pos' + i);`
  - Verificação de ocupação: `if (this.textContent.trim() !== '') return;`
- Para implementar verificação de vitória, use índices das classes `pos0..pos8` e combine com um array de padrões vencedores: `[[0,1,2],[3,4,5],[6,7,8],[0,3,6],...]`.

## Fluxo de desenvolvimento sugerido (apenas fatos detectáveis) 🔁
- Testar localmente abrindo `index.html` em um navegador moderno.
- Durante desenvolvimento iterativo, um servidor de arquivo (ex.: Live Server) melhora recarregamento, mas não é obrigatório.
- Ao alterar comportamento do jogo, atualize `README.md` com como jogar/novas funcionalidades e descreva manualmente como validar as mudanças.

> Nota: não há configuração de lint/test/CI no repositório — crie/registre tais ferramentas se você adicionar um fluxo de testes.

---

Se quiser, eu posso:
- Adicionar um checklist de PR (ex.: incluir atualização do `README.md`, passo a passo de teste manual).
- Incluir um snippet template para a verificação de vitória e testes básicos (unitários ou e2e).

Por favor, diga se deseja que eu ajuste o idioma do arquivo para EN ou adicione exemplos de PR/checklist. Vou iterar conforme seu feedback. ✅