let numero
let acumulado=""
let contador=0
while (numero != 0) {
    numero = prompt("ingrese un numeros")
    if (numero != 0) { 
        acumulado += numero + " "
        contador += 1
    }

}
console.log(`la lista de numero es ${acumulado} y la cantidad de numeros es ${contador}`)