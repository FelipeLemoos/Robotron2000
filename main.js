/*var robo = document.querySelector('img.robo')
robo.addEventListener("click", (evento) => {
    console.log(evento)
})

dizOi("Felipe")

function dizOi(nome) {
    console.log("Oi " + nome + ", Bem-vindo ao Robotron 2000!")
}

const subtrair = document.querySelector('buttom#subtrair')
const somar = document.querySelector('buttom#somar')
const braco = document.querySelector('input#braco')

somar.addEventListener("click", () => {manipulaDados("somar")} )

subtrair.addEventListener("click", () => {manipulaDados("subtrair")} )

function manipulaDados(operação) {
    if(operação === "subtrair") {
        braco.value = Number(braco.value) - 1
    } else {
        braco.value = Number(braco.value) + 1
    }
}
*/
//const braco = document.querySelector('input#braco')


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')


controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento)=> {
       manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
       atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function manipulaDados(operação, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operação === "-") {
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}

function atualizaEstatisticas (peca, operação) {
    if(operação === "+") {
        estatistica.forEach((elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    } else {
        estatistica.forEach((elemento) => {
        elemento.textContent = Number(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    }
        
}
