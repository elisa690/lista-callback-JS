function repetirAcao(vezes, callback) {
    for (let i = 1; i <= vezes; i++) {
        callback(i);
    }
}

function mostrarMensagem(numero) {
    console.log("Execução número: " + numero);
}
repetirAcao(5, mostrarMensagem);