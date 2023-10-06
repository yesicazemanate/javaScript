function Primo(numero) { 
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
});
console.log(filtro)

