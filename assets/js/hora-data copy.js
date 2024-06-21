// Função para iniciar e atualizar a hora
function iniciarHora() {
    const hoje = new Date();  // Obter a data e hora atuais
    let ano = hoje.getFullYear();
    let mes = hoje.getMonth() + 1; // Os meses são baseados em zero
    let dia = hoje.getDate();
    let hora = hoje.getHours();
    let minuto = hoje.getMinutes();
    let segundo = hoje.getSeconds();
    
    // Adicionar zero na frente de números < 10
    mes = adicionarZero(mes);
    dia = adicionarZero(dia);
    minuto = adicionarZero(minuto);
    segundo = adicionarZero(segundo);
    
    // Exibir a data e a hora formatadas
    document.getElementById('txt').innerHTML = ano + "/" + mes + "/" + dia + " - " + hora + ":" + minuto + ":" + segundo;
    
    // Atualizar a cada segundo
    setTimeout(iniciarHora, 1000);
  }
  
  // Função para adicionar zero na frente de números < 10
  function adicionarZero(i) {
    return (i < 10) ? "0" + i : i;
  }