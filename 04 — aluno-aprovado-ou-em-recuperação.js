function verificarNota(nota, callback) {
  if (nota >= 6) {
    callback("Aprovado");
  } else {
    callback("Reprovado");
  }
}

function exibirResultado(resultado) {
  console.log("Resultado: " + resultado);
}

verificarNota(8, exibirResultado);
verificarNota(5, exibirResultado);