class Persona{
    name:string = ""
    apellidos:string = ""
    edad:number = 0
    constructor(name:string,apellidos:string, edad:number){
        this.name = name
        this.apellidos = apellidos
        this.edad = edad
    }

    saludar():void{
        console.log(`Hola me llamo ${this.name}`)
    }
}

export class Trabajador extends Persona{
    sueldo:number = 0
    
    constructor(nombre:string, apellidos:string, edad:number,sueldo:number){
        super(nombre, apellidos, edad)
        this.sueldo = sueldo
    } 
}

export class Jefe extends Persona{
    empleados:Trabajador[] = [];

    constructor(nombre:string, apellidos:string, edad:number,sueldo:number, empleados:Empleado[]){
            super(nombre, apellidos, edad)
            this.empleados = empleados
        
    }
}