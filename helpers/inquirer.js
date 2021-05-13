const inquirer = require('inquirer');

const preguntas = [
    {
        type:"list",
        name:"opcion",
        message:"Que desea hacer?",
        choices: [
            {
                value:"1",
                name:`${"1".green}.Crear Tarea`
            },
            {
                value:"2",
                name:`${"2".green}.Listar tarea`
            },
            {
                value:"3",
                name:`${"3".green}.Listar tareas Completadas`
            },
            {
                value:"4",
                name:`${"4".green}.Listar tareas pendientes`
            },{
                value:"5",
                name:`${"5".green}.Completar tarea`
            },{
                value:"6",
                name:`${"6".green}.Borrar tarea`
            },{
                value:"0",
                name:`${"0".green}.Salir`
            }
        ]
    }
]

const inquirerMenu=async()=>{
    process.stdout.write("\033c")

    console.log(`${"====================".green}`)
    console.log(`${"Seleccione una opcion".white}`)
    console.log(`${"====================".green}\n`)

   const {opcion} = await inquirer.prompt(preguntas)
    return opcion   
}


const pausa  =async ()=>{
        const question =[
            {type:"input",
             name:"enter",
             message:`Presione ${"ENTER".green} para continuar`
        }

        ]

        console.log("\n");

        await inquirer.prompt(question);
}

const leerInput =async(message)=>{

    const question =[{
    
        type :"input" ,
        name:"desc",
        message,
        validate(value){//aqui estamos validando q se ingrese un valor
            if(value.length===0){
                return "Por favor ingrese un valor"
            }
            return true ;
        }  
    }]
        const {desc} = await inquirer.prompt(question);
    
        // en esta linea de codigo estamos llamando al prompt 
        
        return desc;
        //hacemos el return de desc ya que siendo un objeto es lo que en realidad quiero que me muestre en pantalla luego de ejecutarse 
    
    }

module.exports={
    inquirerMenu,
    pausa,
    leerInput
}