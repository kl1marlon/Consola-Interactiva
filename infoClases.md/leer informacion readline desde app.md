<Promesa>

Es importante destacar que las promesas devuelven un valor cuando son resueltas
yo pense en resolver el problema con un return de la funcion pero me daba error, asi que la manera de resolver dicho problema fue de la siguiente manera 

primero se define la funcion mostrar menu como una promesa, al tener la promesa un resolve, este resolve le vamos a pasar el valor de la opt que haya sido seleccionada dentro de la funcion.
como la funcion devuelve el valor del resolve, este valor lo vamos a guardar en una variable ya que esta variale va a ser la que utilicemos en el ciclo que vamos a crear, para repetir el menu en loop hasta que esta condicion sea completada. 

nota=el await no se puede leer si la funcion no se define como una promesa 