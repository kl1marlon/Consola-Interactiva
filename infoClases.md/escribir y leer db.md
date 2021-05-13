para escribir y leer desde nuestra base de datos vamos a usar el fs

primero debemos importarlo

const fs= require("fs")

con esto hecho procedemos a aplicar la logica 
const archivo  = "./db/data.json";
const guardarDB=(data)=>{
    
    fs.writeFileSync(archivo,JSON.stringify(data))
    //JSON.stringify  hacemos string la data que estamos recibiendo
}

const leerDB=()=>{
   if( !fs.readFileSync(archivo)){//si dentro del path no existe el archivo no vamos a leer nada 
       return null 
   }

}
module.exports={guardarDB}