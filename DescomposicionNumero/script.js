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
   
    
}
let numeros=prompt("ingrese un numero")
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
});*/
let numero = parseInt(prompt("Ingrese un número"));

function decomposicion(numero) {
    let multiplicadores = '';
    let factorial = 1;

    // Calcula el factorial del número ingresado
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    // Guarda el valor original del factorial
    const numeros = factorial;

    for (let j = 2; j <= numeros; j++) {
        let contador = 0;
        while (factorial % j === 0) {
            factorial /= j;
            contador++;
        }
        if (contador === 1) {
            multiplicadores += `${j} * `;
        }
        if (contador > 1) {
            multiplicadores += `${j}^${contador} * `;
        }
    }
    
    multiplicadores = multiplicadores.slice(0, -3); // Elimina el último "* "

    return `La descomposición de ${numero} = ${multiplicadores}`;
}

console.log(decomposicion(numero));

   





