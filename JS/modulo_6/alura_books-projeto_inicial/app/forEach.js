const inserirLivros = document.querySelector('#livros')
const packLivros = document.querySelector("#valor_total_livros_disponiveis")

function exibirLivros(listaLivros) {
    packLivros.innerHTML = ''

    inserirLivros.innerHTML = ""
    listaLivros.forEach(livro => {
        let estoque = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        inserirLivros.innerHTML += `
            <div class="livro">
                <img class="${estoque}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    });
}
