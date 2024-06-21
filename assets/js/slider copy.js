// Índice inicial do slide
let indiceSlide = 1;

// Função para mostrar os slides
function mostrarSlides(n) {
  let i;
  let slides = document.getElementsByClassName("minhasSlides");  // Obter todos os slides
  let pontos = document.getElementsByClassName("ponto");  // Obter todos os pontos/indicadores
  
  // Ajustar o índice do slide se for maior que o número de slides
  if (n > slides.length) { indiceSlide = 1 }
  
  // Ajustar o índice do slide se for menor que 1
  if (n < 1) { indiceSlide = slides.length }
  
  // Ocultar todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remover a classe "ativo" de todos os pontos
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ativo", "");
  }
  
  // Exibir o slide atual e adicionar a classe "ativo" ao ponto correspondente
  slides[indiceSlide - 1].style.display = "block";
  pontos[indiceSlide - 1].className += " ativo";
}

// Função para mudar para o próximo slide
function maisSlides(n) {
  mostrarSlides(indiceSlide += n);
}

// Função para definir o slide atual
function slideAtual(n) {
  mostrarSlides(indiceSlide = n);
}

// Inicializa o slideshow mostrando o primeiro slide
mostrarSlides(indiceSlide);