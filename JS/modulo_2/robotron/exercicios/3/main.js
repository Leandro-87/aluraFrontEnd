const botao = document.querySelector('#botao')
botao.textContent = 'Esconder tintas'

botao.addEventListener('click', () =>{
    const cores = document.querySelector("[data-lista]");
    if(botao.textContent == 'Esconder tintas'){
        cores.style.display = 'none';
        botao.textContent = 'Mostrar tintas'
    }
    else if(botao.textContent == 'Mostrar tintas'){
        cores.style.display = 'block';
        botao.textContent = 'Esconder tintas'
    }
})

