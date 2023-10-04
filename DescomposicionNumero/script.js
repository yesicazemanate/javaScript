let numero = prompt("ingrese un numero") 
let contador = 0
let primos=""
for (let i = 1; i < numero.length; i++){
    for (let j; j < i.length; j++){
        if (i % j == 0) {
            contador += 1
            if (contador == 2) {
                primos += i
            }

        }
    }
    
   console.log(primos)
   
}




