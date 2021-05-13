<inquirer>

const inquirer=require("inquirer")

de esta manera hacemos la importacion al archivo donde lo vamos a trabajar 

para utilizar el inquirer.prompt que es el que nos va a dejar hacer las preguntas. debemos de pasarle un arreglo. 
lo mejor es que como tenemos que pasarle el arreglo lo definamos antes como una constante y esta constante se la pasemos como un valor ejemplo:

const preguntas = [
    {
        type:"list",
        name:"opcion",
        message:"Que desea hacer?",
        choices: ["opt1","opt2","opt3"]
    }
]

aqui definimos el arreglo que luego vamos a pasar al inquirer

 const opt = await inquirer.prompt(preguntas)
 
 lo que sea que devuelva el inquirer lo vamos a almacenar en la variable y lo vamos a devolver en un return 

 return opt

 hay dos maneras de hacer la pausa cuando hago una pregunta 

 const pausa  =async ()=>{
        const question =[
            {type:"input",
             name:"enter",
             message:`Presione ${"ENTER".green} para continuar`
        }

        ]

        await inquirer.prompt(question);
}

en esta caso usamos el inquirer y el otro caso usando el stdin.stdout

const pausa = () =>{
    return new Promise(resolve=>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output:process.stdout
        })
        readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (answer)=>{
            readline.close()
            resolve();
        })
    })
    
    
}