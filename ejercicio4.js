/*
Programamos a un Robot en preparar Sopas.
Si hay Verduras, Carne ó Pollo, Agua y Condimentos 
En caso no haya Condimentos pero Sí un Cubo de Caldo,
entonces se prepara igual...
Además informa el resultado...  
*/
/* SE ASUME QUE EL ROBOT CUENTA CON AGUA DESDE UNA CONEXIÓN DIRECTA */
/*
let str = "Hola Mundo";
let strMayus = str.toUpperCase();
console.log(strMayus); // HOLA MUNDO
*/
let respSiNo = "no";
let hayVerduras = false;
let hayCarne = false;
let hayPollo = false;
let hayCondimentos = false;
let hayCuboDeCaldo = false;

respSiNo = prompt("Quiere Hacer una Sopa? sino ingrese 'no'");
if (respSiNo.toUpperCase() == "NO"){
    document.write("OK! será en otra oportunidad...");
} 
else{
    respSiNo = prompt ("Agrega Verduras? sino ingrese 'no'");
    if (respSiNo.toUpperCase() == "NO"){hayVerduras = false} else {hayVerduras = true};
    respSiNo = prompt ("Agrega Carne? sino ingrese 'no'");
    if (respSiNo.toUpperCase() == "NO"){hayCarne = false} else {hayCarne = true};
    respSiNo = prompt ("Agrega Pollo? sino ingrese 'no'");
    if (respSiNo.toUpperCase() == "NO"){hayPollo = false} else {hayPollo = true};
    respSiNo = prompt ("Agrega Condimentos? sino ingrese 'no'");
    if (respSiNo.toUpperCase() == "NO"){hayCondimentos = false} else {hayCondimentos = true};
    respSiNo = prompt ("Agrega Cubo de Caldo? sino ingrese 'no'");
    if (respSiNo.toUpperCase() == "NO"){hayCuboDeCaldo = false} else {hayCuboDeCaldo = true};
    /* Verificamos si podemos hacer Sopa o no */
    if (hayVerduras&&(hayCarne||hayPollo)&&hayCondimentos){
        document.write("Hay SOPA con Carne o Pollo mas Condimentos");
    }
    else if (hayVerduras&&(hayCarne||hayPollo)&&hayCuboDeCaldo){
        document.write("Hay SOPA con Carne o Pollo y Cubo de Caldo");
    }
    else{ document.write("Lo siento FALTAN INGREDIENTES..."); }

};




