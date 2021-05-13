const { log } = require("console");
const fs=require("fs")
const archivo  = "./db/data.json";
const guardarDB=(data)=>{
    
    fs.writeFileSync(archivo,JSON.stringify(data))
    //JSON.stringify  hacemos string la data que estamos recibiendo
}

const leerDB=()=>{
   if( !fs.existsSync(archivo)){//si dentro del path no existe el archivo no vamos a leer nada 
       return null 
   }

   const info= fs.readFileSync(archivo,{encoding:"utf-8"})//hay que hacer el encoding para que no devuelva los bytes
   const data= JSON.parse(info);
   return data;
   //console.log(data);
   //console.log(info);
   //return info;
}

module.exports={guardarDB, leerDB}