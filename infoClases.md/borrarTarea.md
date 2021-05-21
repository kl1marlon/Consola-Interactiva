para borrar tarea ocupamos un metodo que reciba un argumento y ese argumento (id) es el que vamos a terminar borrando 

borrarTarea(id=""){
        if (this._listado[id]){
            delete this._listado[id]
         }
    }



luego de esto nos vamos al inquirer que es donde vamos a preparar las preguntas para borrar determinado archivo


"metodo map" 
lo que hace es trasnformar los valores del arreglo 

 const choices = tareas.map(tarea=>{
            return {
                msg:"hola"
            }
        })
        console.log(choices)

    
por ejemplo este es .map lo que hara es transformar los arreglos con el mensaje hola


notas 
unshift:
propiedad utilizada para añadir una propiedad al principio del arreglo 



