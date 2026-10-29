function prepararPedido(callback) {
    console.log("Preparando o pedido...");

    setTimeout(function() {
        callback();
    }, 2000);

}

function pedidoPronto() {
    console.log("Pedido pronto!");
} 

prepararPedido(pedidoPronto);