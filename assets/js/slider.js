let slideIndex = 1;  //inicializa o índicce do slide atual
showSlides(slideIndex); //mostra o primeiro slide 


// função para mover os slides para a esquerda (-1) ou direita (1)
function plusSlides(n) {
  showSlides(slideIndex += n);  //atualiza o índice do slide e mostra o slide correspondente
}


//função para exibir um slide expecífico
function currentSlide(n) {
  showSlides(slideIndex = n);  //define o índice do slide e mostra o slide correspondente 
}


//função principal para exibir os slides
function showSlides(n) {
  let i;
  // recolha dos elementos com a classe "mySlides" e "dot"
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");


  //verifica se o índice é maior que o número de slides e ajusta
  if (n > slides.length) {slideIndex = 1}
  //verifica se o índice é menor que 1 e ajusta
  if (n < 1) {slideIndex = slides.length}


  //oculta todos os slides 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }


  //remove a classe "active" de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  

  //exibe o slide atual atual e addiciona a classe "active" ao ponto correspondente
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//adiciona  o intervalo para trocar os slides automaticamente a cada 5 segundos 
setInterval(function() {
  plusSlides(1);  //avança  para o próximo slide
}, 5000);  //intervalo de 5000 milissegundos (5 segundos)