const {v4:uuidv4}=require ("uuid");

class Tarea{
    id="";
    descripcion="";
    completadoEn= null;

    constructor( descripcion ){
        this.descripcion = descripcion;
        this.id=uuidv4(); // asi generamos el indentificador de manera asincrona

    }

}


module.exports=Tarea;