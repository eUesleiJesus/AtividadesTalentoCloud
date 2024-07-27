// Método simples:

// Criando o título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Meu Site';
document.body.appendChild(titulo);

// Método complexo:

// Criando o elemento produto
const produto = document.createElement('div');
produto.classList.add('produto');

// Adicionando o nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Nome do Produto';
produto.appendChild(nomeProduto);

// Adicionando a descrição do produto
const descricao = document.createElement('p');
descricao.textContent = 'Descrição detalhada do produto.';
produto.appendChild(descricao);

// Adicionando o preço do produto
const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 99,90';
produto.appendChild(preco);

// Adicionando a imagem (opcional)
const imagem = document.createElement('img');
imagem.src = 'imagem-do-produto.jpg'; // Substitua pelo caminho da sua imagem
imagem.alt = 'Imagem do produto';
produto.appendChild(imagem);

// Adicionando o elemento produto ao corpo da página
document.body.appendChild(produto);