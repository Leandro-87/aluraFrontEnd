let btnOrndenar = document.querySelector('#btnOrdenarPorPreco')

btnOrndenar.addEventListener('click', ordenarPreco)

function ordenarPreco(){
    let livrosPorPreco = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosPorPreco)
}