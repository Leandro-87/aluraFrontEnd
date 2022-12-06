const form = document.querySelector("#novoItem")
const lista = document.querySelector("#lista")
const minhaLista =  JSON.parse(localStorage.getItem('itens')) || []

minhaLista.forEach((elemento) => {
    console.log(elemento)
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade']

    criaLembrete(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaLembrete(nome, qnt){
    const novoItem = document.createElement('li')
    const qntItem = document.createElement('strong')

    if(nome != '' && qnt != ""){
        novoItem.classList.add('item')
        qntItem.innerHTML = qnt
       
        novoItem.appendChild(qntItem) 
        novoItem.innerHTML += nome
        
        lista.appendChild(novoItem)
    }
    else {
        alert('preencha os dois campos')
    }

    const item = {
        "nome": nome,
        "quantidade": qnt
    }

    minhaLista.push(item)

    localStorage.setItem('itens', JSON.stringify(minhaLista))
    
    
}