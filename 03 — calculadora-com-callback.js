function  somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function calcular(a, b, operacao) {
    return operacao(a, b);
}

const resultadoSoma = calcular(5, 3, somar);
console.log("Resultado da soma:", resultadoSoma);

const resultadoMultiplicacao = calcular(5, 3, multiplicar);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);