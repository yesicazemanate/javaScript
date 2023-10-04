let arrayNumeros = []
let numeros
for (let i = 0; i < 10; i++) {
    numeros = parseInt(prompt("ingrese un numero"))
    arrayNumeros.push(numeros)
}
arrayNumeros.sort((a,b)=>a-b)
console.log(arrayNumeros)
