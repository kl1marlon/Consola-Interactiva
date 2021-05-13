primero creamos un metodo llamado crearTarea en este metodo dentro de la clase tareas es donde ejecutaremos la creacion de las tareas 

*nota=el metodo.push es utilizado para crear nuevos valores dentro de UN ARREGLO 
*nota=para crear una nueva instancia dentro de un objeto usamos [] y dentro de esas llaves especificamos lo que queremos crear por ejemplo 

crearTarea (desc=""){ //creamos el desc ya que las tareas reciben una descripcion como parametro 

const tarea = new Tarea ( desc )

this._listado[tarea.id] = tarea


}

dentreo de _listado vamos a guardar el id que estamos generando a traves del uuid que siempre va a ser unico de otra manera se ejecutaria y se borraria si consigue un id igual 


#Inquirer

ahora nos vamos al archivo del inquirer, para crear una funcion que nos sirva para que el usuario pueda colocar un valor 

primero ocupamos crear un question que es lo que vamos a mandar de parametro al inquirer.prompt

const leerInput =async(message)=>{

const question =[{

    type :"input" ,
    name:"desc",
    message,
    validate(value){//aqui estamos validando q se ingrese un valor
        if(value.length===0){
            return "por favor ingrese un valor"
        }
        return true ;
    }  
}]
    const {desc} = await inquirer.prompt(question);

    // en esta linea de codigo estamos llamando al prompt 
    
    return desc;
    //hacemos el return de desc ya que siendo un objeto es lo que en realidad quiero que me muestre en pantalla luego de ejecutarse 

}

IMPORTANTE 
para crear una tarea 

const desc = await leerInput("descripcion:")//recordando que leerInput()  me va a devolver la descripcion de la tarea 

tareas.crearTarea(desc);