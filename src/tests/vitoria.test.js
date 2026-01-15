import {validarVitoria} from '../scripts/logica.js';

//Verificar de todos os símbolos em todas as posições

test("deve detectar vitória de X na horizontal", () => {
    let posicoes = ['X','X','X','','','','','',''];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe(`Vitória de ${posicoes[0]}`);
});

test("Deve detectar vitória de X na vertical", ()=>{
    let posicoes = ['X','','','X','','','X','',''];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe(`Vitória de ${posicoes[0]}`);
})

test("Deve detectar vitória de X na diagonal", ()=>{
    let posicoes = ['X','','','','X','','','','X'];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe(`Vitória de ${posicoes[0]}`);
})

test("Deve detectar vitória de O na horizontal", ()=>{
    let posicoes = ['O','O','O','','','','','',''];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe(`Vitória de ${posicoes[0]}`);
})

test("Deve detectar vitória de O na vertical", ()=>{
    let posicoes = ['O','','','O','','','O','',''];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe(`Vitória de ${posicoes[0]}`);
})

test("Deve detectar vitória de O na diagonal", ()=>{
    let posicoes = ['O','','','','O','','','','O'];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toEqual(`Vitória de ${posicoes[0]}`);
})

test("deve detectar empate", () => {
    const posicoes = ['X','O','X','O','X','O','O','X','O'];
    const resultado = validarVitoria(posicoes);
    expect(resultado).toBe('Empate');
});