
async function buscaEndereco(cep){
    const cepErro = document.querySelector('#erro')
    cepErro.innerHTML = '' // Para apagar o mensagem de erro depois que invalida e valida
    try{
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepLeitura = await consultaCep.json()
        if(consultaCepLeitura.erro){
            throw Error('CEP não existe')
        }

        const logradouro = document.querySelector("#endereco")
        const cidade = document.querySelector("#cidade")
        const estado = document.querySelector("#estado")
        const bairro = document.querySelector("#bairro")

        logradouro.value = consultaCepLeitura.logradouro
        cidade.value = consultaCepLeitura.localidade
        bairro.value = consultaCepLeitura.bairro
        estado.value = consultaCepLeitura.uf

        console.log(consultaCepLeitura)
        return consultaCepLeitura
    }
    catch(erro){
        cepErro.innerHTML = '<p>CEP inválido</p>'
        console.log(erro)
    }
}

const cep = document.querySelector("#cep")
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

/*

                MODO .THEN & .CATCH

const consultaCep = fetch('https://viacep.com.br/ws/17012459/json/')
    .then(resposta => resposta.json())
    .then(cep => {
        if (cep.erro){
           throw Error('Este CEP não existe')
        } else 
            console.log(cep)
    })     
    .catch(erro => console.log(erro))
    .finally(fim => console.log('Fim da busca'))
*/