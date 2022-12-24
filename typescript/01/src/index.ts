
//console.log("Hola 2");
//console.log("CARLOS 21");

import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Estudiante } from "./models/Estudiante";
import { Trabajador, Jefe } from "./models/Persona";
import { Curso } from "./models/curso";


//Esto es un comentario
/**
 * 
 */ 



//**Variables
let nombre:string = "Carlos";
let correo:string = 'calors@demo.com';
const PI:number = 3.14;
let condition:boolean = true;
let resultado:string = condition?"Verdadero":"False";


console.log(nombre);
console.log(`Hola ${nombre}`);
console.log(`El email de ${nombre} es ${correo}`);
console.log(`El numero PI es: ${PI}`);
console.log(`Si la condition es ${condition} el mensaje es ${resultado}`);

//*Instanciacion multiple de varibles 
let a:string, b:boolean, c:number;
a = "TypeScript";
b = true;
c =8.9; 

//*Built-in types: number, string, boolean, void, null y undefined
let lista_tareas:string[] = ["Tarea1", "Tarea2", "Tarea3"];

//**Cominacion de tipos en listas
let valores:(string | number | boolean)[] = [false, "Hola", true, 56];

//*Enumerados
enum Estados {
    "COMPLETADO" = "C",
    "INCOMPLETO" = "I",
    "PENDIENTE" = "P"
}

enum PuestoCarrera {
    "PRIMERO" = 1,
    "SEGUNDO",
    "TERCERO"
}

let estado_tarea:Estados = Estados.COMPLETADO;
let puesto_maraton = PuestoCarrera.PRIMERO;


//*****Interfaces
interface Tarea {
    nombre:string, 
    estado:Estados,
    urgencia:number
}

//*Podemos crear variables que sigan la interfaz tarea
let tarea_1:Tarea = {
    nombre :"Carlos",
    estado: Estados.COMPLETADO,
    urgencia: 10
}
console.log(`Tarea 1 ${tarea_1.estado}`)


//*Tipos Propios
type Product = {
    precio:number,
    nombre:string,
    anio:number
}

let coche:Product = {
    precio:  45000,
    nombre: "Audio",
    anio:2010
}

//*Conditionales */

//*Ternario
console.log(coche.anio<2010?`Coche: ${coche.nombre}`:`Coche viejo`)

let condition_2:boolean = false
if (condition_2){
    console.log('Es true')
}else{
    console.log('es false')
}

if (coche.anio>2010){

}else if (coche.anio == 2010){
    
}else{

}

switch(tarea_1.estado){
    case Estados.COMPLETADO:
        break;
    case Estados.INCOMPLETO:
        break;
    case Estados.PENDIENTE:
        break;
    default:
        "ALGO";
}


//*Try catch Excepciones
try{
    
}catch(error){
    console.log(error)
}


//* Bucles

let lista_tareas_nueva:Tarea[]= [
    {
        nombre:"Tarea1",
        estado:Estados.COMPLETADO,
        urgencia:2
    },
    {
        nombre:"Tarea2",
        estado:Estados.INCOMPLETO,
        urgencia:10
    },
    {
        nombre:"Tarea3",
        estado:Estados.PENDIENTE,
        urgencia:6
    }
]

lista_tareas_nueva.forEach( (tarea:Tarea, index:number) => {
    console.log(`La tarea es ${tarea.nombre} y su indice es ${index+1}`)
});


let index:number = 0;
while (true){
    if (index%2==0){
        console.log(index);
    }
    if (index == 50){
        break;
    }
    index++;
}


//*Asignacion multiple de variables

let mi_tarea = {
    titulo:"Titulo 1",
    estado: Estados.COMPLETADO,
    urgencia:21
}


let {titulo:string, estado:Estado, urgencia:number } = mi_tarea;

let lista_compra_lunes:string[] = ["Leche", "Patatsas"];
let lista_compra_martes:string[] = [...lista_compra_lunes, "Pan","Manzanas"];
let lista_compra_semana:string[] = [...lista_compra_lunes, ...lista_compra_martes]
//**Funciones
/**
 * Funcion SALUDO
 */
function saludar(){
    let nombre:string = "CARLOS";
    console.log(`Hola ${nombre}`)
}
function saludarPersona(nombre:string = "CARLOS"){
    console.log(`Hola ${nombre}`)
}
function despedirPersona(nombre?:string){
    if (nombre){
        console.log(`Adios ${nombre}`)
    }else{
        console.log('Adios')
    }
    
}
despedirPersona();

function variosParams(nombre:string, apellidos?:string, edad:number = 18){
    console.log(`${nombre} ${apellidos} tiene ${edad}`)
}
variosParams("Carlos", "ZARAGOZA")


function saludoComplejo(a :number | string){
    console.log(typeof(a))
}
saludoComplejo(4);

const funcion_flecha = (nombre:string, apellidos:string):string =>{
    return `${nombre} ${apellidos}`;
}
const nombre_completo = funcion_flecha("Carlos","Zaragoza");
console.log(nombre_completo)


/**
 * 
 * @param nombres es una lista de nombres de tipo string
 */
function ejemploMultiParam(...nombres:string[]){
    nombres.forEach(nomre => {
        console.log(nombre);
    });
}

type Empleado = {
    nombre:string,
    apellidos:string,
    edad:number
}

let empleado:Empleado = {
    nombre:"Carlos",
    apellidos:"Zaragoza Beato",
    edad:23
}

const mostrar_empleado = (empleado:Empleado):string => `${empleado.nombre} tiene ${empleado.edad} años`

const obtener_salario = (empleado:Empleado, cobrar:()=>string)=>{
    if (empleado.edad> 70) {
        return 
    }else{
        cobrar()
    }
}

console.log(obtener_salario(empleado,()=>`Cobrar ${empleado.nombre}`));
console.log(mostrar_empleado(empleado));

/**
 * Async Function
 */
async function ejemploAsync ():Promise<void>{
    await console.log("COSAs")
    console.log("Cosas2")
}
ejemploAsync().then(respuesta => {
    console.log(respuesta)
}).catch(error => {
    console.error(error)
}).finally(()=>{
    console.log("Se termino")
})


/**
 * Generators
 */
function * ejemploGenerator(){
    let index = 0
    while(index <5){
        yield index++;
    }
}
let generadora = ejemploGenerator()

console.log(generadora.next().value)

function* watcher(valor:number){
    yield valor;
    yield* worker(valor);
    yield valor +10;
}

function* worker(valor:number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value)

// ** Clases

const carlos:Estudiante = new Estudiante("Carlos", LISTA_CURSOS, "Zaragoza")

carlos.cursos.forEach((curso:Curso) => {
    console.log(`El estudiante ${carlos.nombre} estudia ${curso} con una duracion de ${curso.horas}`)
})
console.log(carlos.horasEstudiadas)

let fecha_nacimiento = new Date(1991,10,10)

if (fecha_nacimiento instanceof Date){
    console.log("Es funa fecha")  
}
if (carlos instanceof Estudiante){
    console.log("Es un estudiante")
}
let empleado_1 = new Trabajador("Carlos", "Zaragoza",23,8000)
let empleado_2 = new Trabajador("Carlos", "Zaragoza",23,8000)
let empleado_3 = new Trabajador("Carlos", "Zaragoza",23,8000)

