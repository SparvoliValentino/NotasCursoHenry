// ¿Qué es ECMA? ------------------------------------------------------
/*
Las siglas ECMA hacen referencia a European Computer Manufacturers Association. 
Se trata de una organización internacional dedicada a la creación de estándares para la comunicación 
y la información fundada en 1960 por algunas de las compañías de tecnología más grandes a nivel mundial
 como, por ejemplo, IBM.
*/

// LET && CONST ------------------------------------------------------

/*
¿Por qué fue una adición tan game changer? Esto ayudó a la modernización de JavaScript, 
alineándolo con lenguajes más avanzados y respondiendo a las necesidades de aplicaciones 
complejas. Estas nuevas declaraciones de variables mejoraron la seguridad y previsibilidad 
en la gestión de datos.
*/

let  //-----------------------------------
/* 
Permite declarar variables con alcance limitado al bloque de codigo 
donde se definen, en lugar del alcance completo como el var
*/

const ejemplo="ejemplo"; //--------------------------------------------
/* 
Permite declarar constantes cuyo valor no puede ser reasignado una vez
establecido. Indica algunos valores que deben permanecer inmutables.
*/


// SCOPE GLOBAl ----------------------------------------------------

var globalVariable = "Soy global";

function ejemplo(){
    console.log(globalVariable);
}
console.log(globalVariable + "2" );
ejemplo();
// En este ejemplo tenemos acceso a la variable dentro y fuera de la funcion

// SCOPE LOCAL -----------------------------------------------

function ejemploScopeLocal(){
    var variableLocal = "Soy local";
    console.log(variableLocal);
}

ejemploScopeLocal(); //Esto arroja soy local
console.log(variableLocal); // Esto arroja ERROR
// variableLocal no esta definida fuera de la funcion por lo que no se puede acceder 

