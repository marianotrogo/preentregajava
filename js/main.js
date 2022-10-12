
let usuario = prompt("Ingrese Usuario");
function saludo(nombre){
    console.log("Hola "+ " "+ nombre);
}
saludo(usuario);

class suscripcion{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

const netflix= new suscripcion("Netflix", 1000);
const primeVideo= new suscripcion("Prime Video", 300);
const hbo= new suscripcion("Hbo Go", 400);
const psnNow= new suscripcion("Psn Now", 2000);
const youtube= new suscripcion("YouTube Premium", 250);

const arraySusc = [netflix,primeVideo,hbo,psnNow,youtube];
console.log("Listado de Suscripciones");
console.log(arraySusc);

//----- Agregar un nuevo servicio-------------

const starPlus= new suscripcion("Star + ", 600);
arraySusc.push(starPlus);
console.log("Suscripcion Agregada ");
console.log(starPlus);

