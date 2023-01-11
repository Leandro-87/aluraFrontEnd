function addDesconto(livros){
    const desconto = 0.5
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosDesconto

}