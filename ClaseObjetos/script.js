//objeto 1
const cuidad = {
    nombre:"popayan",
    departamento: "cauca",
    numeroPoblacion: 4000000,
    gentilicio: ["payanes", "popayanejo"],
    codigoPostal: 190001,
    lugaresTuristicos :{
        parque: "parqueCaldas",
        iglesias: ["iglesia San franciasco ", "iglesia Ermita ", "iglesia nuestra señora de la encarnacion ", "iglesia de santo domingo"],
        museo:["museo nacional Guillermo Valencia"," museo Negret"," museo de historia natural"]
    }
}
function iglesia() {
     let iglesias= ["iglesia San franciasco ", "iglesia Ermita ", "iglesia nuestra señora de la encarnacion ", "iglesia de santo domingo"]
    return iglesias
}
function museo() {
    let museo= ["museo nacional Guillermo Valencia", " museo Negret", " museo de historia natural"]
return museo
}

class Ciudad{
    constructor(nombre, departamento, numeroPoblacion, gentilicio, codigoPostal) {
        this.nombre = nombre
        this.departamento = departamento
        this.numeroPoblacion = numeroPoblacion
        this.gentilicio = gentilicio
        this.codigoPostal = codigoPostal
    }
    mostrarCiudad() {
       console.log("la ciudad blanca "+this.nombre) 
    }
}

let city1 = new Ciudad("popayan", "cauca", 4000000, "payanes", 190001)
let city2 = new Ciudad("cali","valle del cauca",5000000,"caleños", 190002)
let ciudades = [city1, city2]



console.log(ciudades)

//console.log(cuidad.lugaresTuristicos.iglesias[2])
//objeto2

const animalTigre = {
    nombreCientifico: "panthera tigris",
    peso: 160,
    especie : "felino",
    habitad: ["selvas tropicales", "pastizales", "sabanas e incluso manglares"],
    subespecie: {
        existentes: ["el tigre de Bengala", "el tigre de Amur", "el del Sur de China", "el de Sumatra", "el de Indochina ", "el malayo"],
        extintos: ["el tigre balinés"," el del Caspio"," el de Java"]
    }
}
class Animal {
    constructor(nombreCientifico, peso, especie) {
        this.nombreCientifico = nombreCientifico
        this.peso = peso
        this.especie=especie
    }
    mostrarAnimal() {
        console.log( this.nombreCientifico)
    }
}

let animal1 = new Animal("panthera tigris", 160, "felino")
let animal2 = new Animal("perro",20, "canino")
let animales = [animal1, animal2]
console.log( animales)
//objeto3

const estudiante = {
    nombre: "felipe",
    apellido: "gonzales",
    edad: 15,
    grado: "noveno",
    materias: ["matematicas", "español", "ingles", "sociales", "biologia"],
    docentes:["andres","carlos","maria","monica"]
}


class Estudiante {
    constructor(nombre,apellido,edad,grado) {
        this.nombre=nombre
        this.apellido=apellido
        this.edad = edad
        this.grado=grado
    }
    mostrarEstudiante() {
        console.log(this.nombre)
    }
}

let estudiante1 = new Estudiante("camilo","gonzales", 16, "noveno")
let estudiante2 = new Estudiante("maria", "pinto",14,"octavo")
let estudiantes = [estudiante1, estudiante2]
console.log(estudiantes)
//objeto3

