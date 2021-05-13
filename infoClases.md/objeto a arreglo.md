Object.keys()

este es el metodo nuevo que vemos dentro de la leccion, forma parte natural de javascript y es importante estudiarlo 

Resumen
El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal

Sintaxis
Object.keys(obj)
Parámetros
obj
El objeto cuyas propiedades enumerables serán devueltas.
Valor de retorno
Un array de strings que representan toda las propiedades  del objeto

Descripción
Object.keys devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades del objeto.

forEach()

El método forEach() ejecuta la función indicada una vez por cada elemento del array.


Object.keys(this._listado).forEach(key =>{
    console.log(key)
})
