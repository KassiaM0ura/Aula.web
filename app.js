
const busca = document.getElementById("busca");
const livros = document.querySelectorAll("article");

busca.addEventListener("input", function () {
  const termo = busca.value.toLocaleLowerCase();

  livros.forEach(function (livro) {
    const titulo = livro.querySelector("h3").textContent.toLocaleLowerCase();

    if (titulo.includes(termo)) {
      livro.hidden = false;
    } else {
      livro.hidden = true;
    }
  });
});


const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoTitulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const titulo = campoTitulo.value.trim();

  if (titulo.length < 3) {
    mensagem.textContent = "Erro: o título deve ter pelo menos 3 caracteres.";
  } else {
    mensagem.textContent = "Sucesso! " + nome + " sugeriu: " + titulo;
  }
});