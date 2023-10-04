let numeroInicio=prompt ("dijite numero de inicio de secuencia")
let numeroFinal = prompt("dijite numero de final de secuencia")
if (numeroInicio < numeroFinal) {
    for (let i = numeroInicio; i <= numeroFinal;i++) {
console.log (i)
    }

} else {
    for (let i = numeroInicio; i >= numeroFinal; i--) {
        console.log(i)
    }
}