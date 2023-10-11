/*function Primo(numero) { 
    let contador=0
    if (numero>1){
        for(let i=1;i<=numero;i++){
            if(numero%i==0){
                contador+=1
            }
        }
        if (contador===2){
            return numero
        }else if(contador>2){
            contador=0
        }
    }    

function listaPrimos(numero){
    let lista=[]
    for(let i=1;i<=numero;i++){
         lista.push(Primo(i))
    }  
    return lista 
}
let arrayPrimos=listaPrimos(numeros)
let filtro = arrayPrimos.filter(function(x) {
    return x !== undefined;
});
}*/
let numeros=parseInt(prompt("ingrese un numero"))
let factoresPrimos=[]
let factoPrimos = []
let resultado=[]
let divisores=2
while (numeros != 1) {
        if (numeros % divisores == 0) {
            factoresPrimos += divisores + " "
            numeros /= divisores
            resultado.push(numeros)
        } else {
            divisores+=1
        }
}
factoPrimos.push(factoresPrimos)

console.log(factoPrimos)
console.log(resultado)
/*function esPrimo(numero) {
    let contador = 0;
    if (numero > 1) {
        for (let i = 1; i <= numero; i++) {
            if (numero % i == 0) {
                contador += 1;
            }
        }
        if (contador === 2) {
            return true;
        }
    }
    return false;
}

let numeros = parseInt(prompt("Ingrese un número"));

function listaPrimos(numero) {
    let lista = [];
    for (let i = 1; i <= numero; i++) {
        if (esPrimo(i)) {
            lista.push(i);
        }
    }
    return lista;
}

let arrayPrimos = listaPrimos(numeros);

let factoresPrimos = [];
let resultado = [];


while (numeros != 1) {
    for (let i = 0; i < arrayPrimos.length; i++) {
        if (numeros % arrayPrimos[i] == 0) {
            factoresPrimos.push(arrayPrimos[i]);
            numeros /= arrayPrimos[i];
        }
    }
}

resultado.push(numeros);

console.log("Factores primos:", factoresPrimos);
console.log("Resultado:", resultado);*/
