
// // document.addEventListener('DOMContentLoaded', function() {
// //   // Seu código JavaScript aqui
// //   function scrollToElement(elementSelector, instance = 0) {
// //   // Select all elements that match the given selector
// //   const elements = document.querySelectorAll(elementSelector);
// //   // Check if there are elements matching the selector and if the requested instance exists
// //   if (elements.length > instance) {
// //       // Scroll to the specified instance of the element
// //       elements[instance].scrollIntoView({ behavior: 'smooth' });
// //   }
// // }

// // const link1 = document.getElementById("link1");
// // const link2 = document.getElementById("link2");
// // const link3 = document.getElementById("link3");

// // link1.addEventListener('click', () => {
// //   scrollToElement('.header');
// // });

// // link2.addEventListener('click', () => {
// //   // Scroll to the second element with "header" class
// //   scrollToElement('.header', 1);
// // });

// // link3.addEventListener('click', () => {
// //   scrollToElement('.column');
// // });
// // });

// // Função para rolar suavemente até um elemento
// function scrollToElement(elementSelector, instance = 0) {
//   // Seleciona todos os elementos que correspondem ao seletor
//   const elements = document.querySelectorAll(elementSelector);

//   // Verifica se há elementos e se a instância solicitada existe
//   if (elements.length > instance) {
//     // Rola até a instância específica do elemento
//     elements[instance].scrollIntoView({ behavior: "smooth" });
//   }
// }

// // Adiciona eventos de clique aos links
// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
// const link3 = document.getElementById("link3");

// link1.addEventListener("click", () => {
//   // Rola para o primeiro elemento com classe "header"
//   scrollToElement(".header");
// });

// link2.addEventListener("click", () => {
//   // Rola para o segundo elemento com classe "header"
//   scrollToElement(".header", 1);
// });

// link3.addEventListener("click", () => {
//   // Rola para o primeiro elemento com classe "column"
//   scrollToElement(".column");
// });

// // Garante que o script seja executado após o carregamento da página
// document.addEventListener("DOMContentLoaded", function() {
//   // Seu código JavaScript adicional aqui
// });

// Função alternativa para rolar suavemente até um elemento
function smoothScrollTo(element) {
  // Verifica se o elemento existe
  if (!element) {
    return;
  }

  // Obtém a posição do topo do elemento
  const elementTop = element.getBoundingClientRect().top;

  // Rola suavemente até a posição do elemento
  window.scrollTo({
    top: elementTop,
    behavior: "smooth",
  });
}

// Adiciona eventos de clique aos links
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  // Rola para o primeiro elemento com classe "header"
  const headerElement = document.querySelector(".header");
  smoothScrollTo(headerElement);
});

link2.addEventListener("click", () => {
  // Rola para o segundo elemento com classe "header"
  const headerElements = document.querySelectorAll(".header");
  if (headerElements.length > 1) {
    smoothScrollTo(headerElements[1]);
  }
});

link3.addEventListener("click", () => {
  // Rola para o primeiro elemento com classe "column"
  const columnElement = document.querySelector(".column");
  smoothScrollTo(columnElement);
});



