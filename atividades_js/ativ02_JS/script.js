// Capturando os elementos
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo textual
titulo.innerText = "Manipulação de Elementos com JavaScript";
link.innerText = "Acesse o ProZEducação";

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://www.google.com">Google</a></li>
  <li><a href="https://www.facebook.com">Facebook</a></li>
  <li><a href="https://www.twitter.com">Twitter</a></li>
`;