require("colors");
const Tareas = require('./models/tareas.js')
const { guardarDB, leerDB } = require('./helpers/guardarDB.js')
const { inquirerMenu, pausa, leerInput,listarBorrarTarea, seguroBorrar } = require('./helpers/inquirer')


const main = async () => {

    let opt = "";

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
    }

    
    do {
        //Imprimir el menu 
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput('Descripcion:')//leer input del usuario
                if(desc!=0){
                tareas.crearTarea(desc);//guardar el input del usuario como una nueva tarea
            }
                break;

            case "2":
                // tareas.cargarTareasFromArray(tareasDB)
                tareas.listadoCompleto()
                break;
            case '3': //listar completadas
                    tareas.listarPendientesCompletadas(true)
            break;
            case '4': //listar pendientes
                tareas.listarPendientesCompletadas(false)
            break;

            case '6': //borrar
               const id = await listarBorrarTarea(tareas.listadoArreglo)
               //el await es importante dejarlo ya que es asi q vamos a poder seleccionar una tarea
               if(id!=="0"){
                const answer = await seguroBorrar()
                //este inquirer es de tipo confirm y el mismo recibe un valor booleano
                
                if(answer){tareas.borrarTarea(id)
                     console.log("Tarea Borrada");
               }
             
            }
               
                break;

        }


        guardarDB(tareas.listadoArreglo)

        await pausa();

    } while (opt !== "0")


}

main();

