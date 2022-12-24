import { Curso } from "./curso";

export class Estudiante{
    nombre:string;
    apellidos?:string;
    cursos:Curso[]
    constructor(nombre:string,cursos:Curso[], apellidos?:string ){
        this.nombre = nombre;
        this.apellidos = apellidos?apellidos:undefined;
        this.cursos = cursos
    }

    get horasEstudiadas():number{
        let horas_estudiadas:number = 0
        this.cursos.forEach(curso=>{
            horas_estudiadas += curso.horas
        })
        return horas_estudiadas
    }
    private ID:string = '123456'
   
    get getId():string{
        return this.ID
    }
    set setId(id:string){
        this.ID = id;
    }
}