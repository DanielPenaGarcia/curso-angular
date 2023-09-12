
export class Empleado{

    nombre = "";
    apellidos = "";
    cargo = "";
    salario : number = 0;

    constructor(nombre:string, apellidos:string, cargo:string, salario:number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cargo = cargo;
        this.salario = salario;
    }

    getNombreCompleto():string{
        return this.nombre + " " + this.apellidos+ " " + this.cargo+ " $" + this.salario;
    }
}