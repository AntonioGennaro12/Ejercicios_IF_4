/*
Programamos a un Robot en preparar Sopas.
Si hay Verduras, Carne ó Pollo, Agua y Condimentos 
En caso no haya Condimentos pero Sí un Cubo de Caldo,
entonces se prepara igual...
Además informa el resultado...  
*/
/* SE ASUME QUE EL ROBOT CUENTA CON AGUA DESDE UNA CONEXIÓN DIRECTA
   Y QUE SE LE DEBEN AGREGAR LOS DEMÁS INGREDIENTES
*/

/*
En la Versión 2 uso la función "confirm()"
*/
let quiereSopa      = false;
let hayVerduras     = false;
let hayCarne        = false;
let hayPollo        = false;
let hayCondimentos  = false;
let hayCuboDeCaldo  = false;

if (!(quiereSopa = confirm("Quiere Hacer una Sopa?"))) {
    document.write("OK! será en otra oportunidad...");
} 
else{
    hayVerduras     = confirm ("Agrega Verduras?");
    hayCarne        = confirm ("Agrega Carne?");
    hayPollo        = confirm ("Agrega Pollo?");
    hayCondimentos  = confirm ("Agrega Condimentos?");
    hayCuboDeCaldo  = confirm ("Agrega Cubo de Caldo?");
    
    /* Verificamos si podemos hacer Sopa o no */
    if (hayVerduras&&(hayCarne||hayPollo)&&hayCondimentos){
        document.write("Hay SOPA con Carne o Pollo mas Condimentos");
    }
    else if (hayVerduras&&(hayCarne||hayPollo)&&hayCuboDeCaldo){
        document.write("Hay SOPA con Carne o Pollo y Cubo de Caldo");
    }
    else{ document.write("Lo siento FALTAN INGREDIENTES..."); }

};




