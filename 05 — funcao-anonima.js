function  executarTarefa(callback) {
  callback();
}

executarTarefa(function() {
  console.log("tarefa concluída!");
});