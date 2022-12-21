const form = document.querySelector("#novoItem")
const lista = document.querySelector("#lista")
const minhaLista =  JSON.parse(localStorage.getItem('itens')) || []

minhaLista.forEach((elemento) => {
    criaLembrete(elemento)
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade']

    const existe = minhaLista.find(elemento => elemento.nome === nome.value )
    
    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe){
        item.id = existe.id
        atualizaElemento(item)
        
        minhaLista[existe.id] = item

    } else if (item.nome.length < 40){
        item.id = minhaLista[minhaLista.length -1] ? (minhaLista[minhaLista.length -1]).id + 1 : 0
        criaLembrete(item)
        minhaLista.push(item)
    } else if (item.nome.length > 5){
        alert('seu item deve conter no máximo 40 caracteres')
    }

    localStorage.setItem('itens', JSON.stringify(minhaLista))

    nome.value = ""
    quantidade.value = ""
})

function criaLembrete(item){
    const novoItem = document.createElement('li')
    const qntItem = document.createElement('strong')

    novoItem.classList.add('item')
    qntItem.innerHTML = item.quantidade
    qntItem.dataset.id = item.id
    
    novoItem.appendChild(qntItem) 
    novoItem.innerHTML += `<span>${item.nome}</span>`
    
    lista.appendChild(novoItem)
    
    novoItem.appendChild(botaoDeleta(item.id))
    
  
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'x'

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id){
    tag.remove()

    minhaLista.splice(minhaLista.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(minhaLista))
}