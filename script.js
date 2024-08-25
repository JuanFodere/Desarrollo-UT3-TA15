const lista = document.getElementById("lista")
const boton = document.getElementById("boton")
const boton2 = document.getElementById("boton2")

function agregar(){
    let valor = document.getElementById("elemento").value
    if(valor){
        let elementoNuevo = document.createElement("li")
        elementoNuevo.textContent = valor
        lista.appendChild(elementoNuevo)
        document.getElementById("elemento").value = ""
    }
}

function quitar(){
    lista.lastElementChild.remove()
}

boton2.addEventListener("click", () => {quitar()})

boton.addEventListener("click", () => {agregar()})