// Função para iniciar e atualizar a hora
function starttime() {
  // recolha da data de hoje
  const hoje = new Date();
  //recolha do aho 
  let ano = hoje.getFullYear();
  // recolha do mes
  let mes = hoje.getMonth() + 1; // Os meses são baseados em zero
  // recolha do dia
  let dia = hoje.getDate();
  //recolha das horas  
  let hora = hoje.getHours();
  //recolha dos minutos
  let minutos = hoje.getMinutes();
  //recolha dos segundos 
  let segundos = hoje.getSeconds();
  // se o mes e o dia for menor que 10 então adiciona um 0 a frente usando a funcão adicionarZero
  minutos = adicionarZero(minutos);
  segundos = adicionarZero(segundos);
  // apresentaão do resultado no ecrã
  document.getElementById('txt').innerHTML =  dia + "/" + mes + "/" + ano + " - " + hora + ":" + minutos + ":" + segundos;
  // espera 1000 mili segundos ou 1 segundo 
  setTimeout(starttime, 1000);
}

// Função para adicionar zero na frente de números < 10
function adicionarZero(i) {
  return (i < 10) ? "0" + i : i;
}

starttime();