function teclaSom(id){
    document.querySelector(id).play();
}

const teclas = document.querySelectorAll('.tecla');

for(let i = 0; i < teclas.length; i++){
    const tecla = teclas[i]
    const som = teclas[i].classList[1]
    
    tecla.onclick = function(){
        teclaSom('#som_' + som);
        
    }
    
    tecla.onkeydown = function (e) {
        if(e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
/*
let contador = 0;
while(contador < teclas.length){
    const tecla = teclas[contador]
    const som = teclas[contador].classList[1]
      
    tecla.onclick = function(){
        teclaSom('#som_' + som);
    }
    contador++

}

*/