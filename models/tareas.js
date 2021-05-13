const Tarea = require("./tarea");


class Tareas {

    _listado = {} 

    constructor(){
        this._listado = {};
    }

    get listadoArreglo(){

        let listado=[];
        Object.keys(this._listado).forEach(key =>{ //con object devolvemos un arreglo con las propiedades del objeto
            //y con forEach recorremos dicho arreglo.. le pasamos el parametro que es el id en este caso
           const tarea=this._listado[key];//asignamos una tarea
           listado.push(tarea)//añadimos al arreglo 
        })
        return listado
    }

    crearTarea(desc=""){//creamos el desc ya que las tareas reciben una descripcion como parametro 

        const tarea=new Tarea(desc)

        this._listado[tarea.id]=tarea //estamos guardando dentro del listado una nueva tarea con id determinado
        
    }
}

module.exports=Tareas;