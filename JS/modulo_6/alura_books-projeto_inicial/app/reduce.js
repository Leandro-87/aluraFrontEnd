function calcularLivrosDisponiveis(livros){
    let somaLivros = livros.reduce((acc, livro) => acc + livro.preco, 0)
    somaLivros = somaLivros * 0.8
    return somaLivros.toFixed(2)
}