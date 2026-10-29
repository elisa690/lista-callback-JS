function mostrarBoasVindas() {
console.log("Bem vindo!");
}

function mostrarDespedida() {
console.log("Até mais!");
}  

function executarMensagem(callback) {
callback();
}

executarMensagem(mostrarBoasVindas);
executarMensagem(mostrarDespedida);