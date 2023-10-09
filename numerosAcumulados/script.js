let numero
let acumulado=0
let contador=0
while (numero != 0) {
    numero = parseInt(prompt("ingrese un numeros"))
    if (numero != 0) { 
        acumulado += numero
        contador += 1
    }

}
console.log(`la lista de numero es ${acumulado} y la cantidad de numeros es ${contador}`)