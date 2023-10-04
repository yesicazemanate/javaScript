let numero = prompt("ingrese numero")
let numeros=1
for (let i = 1; i <= numero; i++){
    if (i == numeros) {
        let multi1 = numeros + numeros
        if (multi1 < numero) {
            numeros = multi1 
        }
    }
    console.log(numeros)
}

