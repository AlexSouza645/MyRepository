

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
const link4 = document.getElementById("link4");

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

// link3.addEventListener("click", () => {
//   // Rola para o primeiro elemento com classe "column"
//   const columnElement = document.querySelector(".column");
//   smoothScrollTo(columnElement);
// });

link4.addEventListener("click", () => {
  // Rola para o primeiro elemento com classe "header"
  const headerElement = document.querySelector(".column");
  smoothScrollTo(headerElement);
});



