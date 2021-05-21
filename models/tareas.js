const Tarea = require("./tarea");
const { leerDB } = require("../helpers/guardarDB.js")

const arregloDB = leerDB()


class Tareas {

    _listado = {}

    constructor() {
        this._listado = {};
    }

    get listadoArreglo() {

        let listado = [];
        Object.keys(this._listado).forEach(key => { //con object devolvemos un arreglo con las propiedades del objeto
            //y con forEach recorremos dicho arreglo.. le pasamos el parametro que es el id en este caso
            const tarea = this._listado[key];//asignamos una tarea
            listado.push(tarea)//añadimos al arreglo 
        })
        return listado
    }

    borrarTarea(id=""){
        if (this._listado[id]){
            delete this._listado[id]
         }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(key => {

            this._listado[key.id] = key
        })

        //this._listado=tareas


    }

    crearTarea(desc = "") {//creamos el desc ya que las tareas reciben una descripcion como parametro 

        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea //estamos guardando dentro del listado una nueva tarea con id determinado

    }

    listadoCompleto(){//pasamos el parametro para evaluar la condicion de las 
        //tarea completadas y pendientes 
        /*
        //esta fue la tarea que yo hice pero para fines practicos voy a 
        //usar la del instructor pero voy a dejar las dos versiones xd
        Object.keys(this._listado).forEach((key,index)=>{//convertimos la lista de objetos en un arreglo
            //para recorrer con el forEach cada uno de los arreglos y acceder a sus valores 
            const desc= this._listado[key].descripcion;
            const completo = this._listado[key].completadoEn 
            const idx = `${index+1}`.green //asi hacemos el idx que este en verde
            if(completo!=null){
                console.log(`${idx} ${desc.blue}:: ${"Completada".green}`)

            }else{
            console.log(`${idx} ${desc.blue}:: ${"Pendiente".red}`)
        }
        })
        */
            let contador = 0;
            this.listadoArreglo.forEach((tarea,i)=>{
                const idx= `${i+1}`.green;
                const {descripcion, completadoEn} = tarea;
                const estado = (completadoEn)
                                ? "Completado".green
                                : "Pendiente".red;

              console.log(`${idx} ${descripcion}:: ${estado} `);
               
            })      

       // console.log(this._listado["f575e000-6109-4a0c-814a-5a5ca269c5bb"].descripcion)
    }

    listarPendientesCompletadas(completadas = true){
        let contador = 0;
        this.listadoArreglo.forEach((tarea,i)=>{
            const idx= `${i+1}`.green;
            const {descripcion, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? "Completado".green
                            : "Pendiente".red;

            if (completadas){
                if (completadoEn){

                    contador +=1; 
                    console.log(`${contador.toString().green} ${descripcion} completada en fecha :: ${completadoEn.green} `);
                }
            }else{
                if(!completadoEn){
                    contador +=1; 
                    console.log(`${contador.toString().green} ${descripcion}:: ${estado} `);
                }
            }


           
        })      

    }

    toggleCompletadoen(ids = []) {
        ids.forEach(id=>{ // asi vamos a recorrer todo el arreglo que estamos recibiendo 

            
            const tarea = this._listado[id];//asignamos a la variable tarea todo el arreglo de listado

            if(!tarea.completadoEn){

                tarea.completadoEn = new Date().toISOString() 
                //estamos asignandole completadoEn el valor de la fecha en la que ha sido completada la tarea
                //con toISOString() 

            }
            
        })

        this.listadoArreglo.forEach(tarea=>{
            if(!ids.includes(tarea.id))//includes devuelve un booleano si existe o no lo que estamos preguntando 
                this._listado[tarea.id].completadoEn=null 
    //si la tarea esta completada y la desmarco esta va a pasar a tener el valor de null
    
            {

            }
        })
    }


}

module.exports = Tareas;