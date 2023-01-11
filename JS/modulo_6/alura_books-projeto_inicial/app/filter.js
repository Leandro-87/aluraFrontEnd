const categoria = document.querySelectorAll(".btn")
categoria.forEach(btn => btn.addEventListener('click', filtrarLivros))

/*function filtrarLivros(tag) {
    let livrosFiltrados = livros.filter(livro => livro.categoria === tag.target.value)
    exibirLivros(livrosFiltrados)
}*/

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const tag = elementoBtn.value
    let livrosFiltrados = tag == 'disponivel' ? filtroDisponibilidade() : filtroCategoria(tag)

    exibirLivros(livrosFiltrados)

    if(tag == 'disponivel'){
        const valorTotal = calcularLivrosDisponiveis(livrosFiltrados)
        packLivrosFiltrados(valorTotal)
    }
}

function filtroCategoria(tag) {
    return livros.filter(livro => livro.categoria == tag)
}

function filtroDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function packLivrosFiltrados(valorTotal){
    packLivros.innerHTML = `
    <section id="valor_total_livros_disponiveis">
        <div class="livros__disponiveis">
            <h3>O pacote completo com 20% de desconto</h3>
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    </section>
    `
}
