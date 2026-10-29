function  processarNumero(numero, callback)  {
 console.log(callback(numero));
}

processarNumero(5, function(numero) {
return numero * 3;
});

processarNumero(10, function(numero) {
 return numero * 3;
}); 

processarNumero(15, function(numero) {
 return numero * 3;
});