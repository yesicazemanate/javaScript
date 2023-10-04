let frase = prompt("ingrese frase")
let arregloFrase=[]
let letra = prompt("ingrese letra")
let contador=0
arregloFrase = Array.from(frase)
if (letra.length == 1) {
    for (let i = 0; i < arregloFrase.length; i++) {
        if (letra == arregloFrase[i]) {
contador++
        }
} 
} else {
    alert("solo es una letra")
}

console.log(`la frase tiene ${contador} letras ${letra}`)