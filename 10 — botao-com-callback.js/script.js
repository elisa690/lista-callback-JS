function confirmarAcao() {
    document.querySelector("#mensagem").textContent = "Ação confirmada!";
}

let botao = document.querySelector("botao");

botao.addEventListener("click", confirmarAcao);