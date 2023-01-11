let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosApi()

async function getBuscarLivrosApi(){
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosDesconto = addDesconto(livros)
    exibirLivros(livrosDesconto)
}
