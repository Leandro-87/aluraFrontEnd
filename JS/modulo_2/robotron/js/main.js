const robotron = document.querySelector(".robo")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
}
)

function dizOi(nome) {
    console.log('Hello ' + nome)
}

dizOi('Joao')