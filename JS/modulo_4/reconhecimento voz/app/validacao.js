function validaChute(chute) {
    const numero = +chute

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += '<div>Chute inválido</div>'
        return
    }

    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>O chute precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numeroSecreto === numero){
        document.body.innerHTML = `
            <h1>Adivinhou, Fia Da Mãe</h1><h2>O número secreto é <strong>${numeroSecreto}</strong></h2>
            <button onClick="(document.location.reload(true))">Jogar novamente</button>
        `
    
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

recognition.addEventListener('end', () => recognition.start() )