require("colors");
const Tareas = require ('./models/tareas.js')
const {guardarDB,leerDB}=require('./helpers/guardarDB.js')
const {inquirerMenu , pausa , leerInput} = require ('./helpers/inquirer')


const main = async()=>{

    let opt="";

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
       tareas.cargarTareasFromArray(tareasDB)
    }

    await pausa();//para hacer ua pausa dandole al enter continuaremos 

    do{
        //Imprimir el menu 
        opt= await inquirerMenu();
        
        switch (opt){
            case "1": 
            const desc = await leerInput('Descripcion:')//leer input del usuario
            tareas.crearTarea(desc);//guardar el input del usuario como una nueva tarea
            break;

            case "2":
                tareas.cargarTareasFromArray(tareasDB)
                console.log(tareas._listado)
            break;

        }


        guardarDB(tareas.listadoArreglo)

        await pausa();

    }while(opt!=="0")


}

main();

