/*     
--------- QUE ES UN FUNCION FLECHA? ---------

Las Arrow functions son una manera de escribir funciones, 
pero con una sintaxis simplificada. Si bien estas actúan como cualquier función, 
veremos que tienen algunos comportamientos específicos respecto al manejo del contexto con this, 
diferente al de las funciones tradicionales.

CUERPO DE LA FUNCION-----------

Esta contenido entre llaves { }. En el ejemplo, el cuerpo de la funcion
es return a+b;, que en este ejemplo devuwelve la suma de los dos parametros.

PARAMETROS----------------

Se colocan entre parenteses. EN el ejemplo, (a,b) son los parametros de la funcion

FLECHA------------

La flecha sigue a los parametros y precede el cuerpo de la funcion. En esencia, la flecha reemplaza
la palabra clave funcion en las funciones tradicionales

*/
const suma=(a,b)=>{
    return a+b;
}

const sumar= (a,b)=> a+b;

/*
VENTAJAS ARROW FUNCTION:
-Simpleza de su sintaxis
-Se puede obviar el uso de la palabra return

CONTEXTO

Cuando trabajamos con funciones tradicionales, la palabra reservada this se encuentra 
determinada por el contexto de la función que la contiene. Sin embargo, este comportamiento 
no es igual en las arrow functions, ya que, en este caso, la referencia de this 
se hereda del contexto léxico. Es decir, la referencia se toma del ámbito que contiene 
a la arrow function en el momento de su definición y no dentro de la función como tal.
*/

// --------------------------Ejemplo-------------------------------------------------------

const persona={
    nombre:"Juan",
    amigos: ["Maria", "Pedro", "Juana"],

    saludar: function(){
        console.log("Hola soy", this.nombre); //Esto arroja "Hola soy Juan"
    },

    despedirse:()=>{
        console.log("Me despido", this.nombre); //Esto arroja "Me despido, undefined"
    }
};

/*
ARROW FUNCTIONS VENTAJAS:

THIS: Si necesitas mantener el valro de this del ambito circundante, las funcinones flecha
heredan el valor de this del contexto lexico en el que fueron creadas. Es util en 
callbacks, funciones anidadas y cuando buscas evitar problemas relacuionados con el cambio de contexto

CALLBACKS: En funciones callbacks donde la concision y la captura del contexto son beneficiosas, 
las funciones flecha son utiles al trabajar con metodos como map, filter y reduce. Reducen la necesidad de
funciones anonimas adicionales y brindan un codigo mas limpio

HERENCIA: Cuando se desea evitar problemas relacionados con el bindn de this, las funciones tradicionales 
pueden tener problemas cuando se utilizan en situaciones donde el valor de this cambia (por ejemplo, los 
eventos de DOM). Las funciones flecha eliminan este problema al heredad this del ambito circulante. 
*/



/*----------------------------------------------------CLASES-----------------------------------------------------------------*/

/*

---------------------------------------¿De dónde vienen las clases?---------------------------------------

En un comienzo las clases comenzaron con el desarrollo de la programación orientada 
a objetos (POO). La POO fue una revolución en la forma de pensar y estructurar los programas, 
introduciendo el concepto de "objetos" como entidades que contienen tanto datos como funciones. 
Las "clases" son esencialmente plantillas para crear estos objetos, definiendo sus atributos y 
comportamientos. Originalmente, lenguajes como Smalltalk y C++ popularizaron el uso de clases y 
la POO en la década de 1980.

JavaScript inicialmente no adoptó el concepto de clases. Esto se debió a su enfoque en la programación 
funcional y de scripting. Sin embargo, con el paso del tiempo y la evolución de las necesidades de
desarrollo web, JavaScript comenzó a adoptar características de POO. Finalmente con la introducción 
de ES6, las clases se incorporaron oficialmente a JavaScript, permitiendo una sintaxis más clara y
familiar para los programadores acostumbrados a la POO.


---------------------------------------¿Qué es una clase?---------------------------------------

En términos generales, podemos definir a una clase como una plantilla que se utiliza para 
la creación de objetos definidos a partir de una misma estructura base. Los objetos que 
provienen de dicha plantilla se conocen como instancias de clase (objetos). 


---------------------------------------FUNDAMENTOS-----------------------------------------------------------


Encapsulamiento

Imagina que tienes una cuenta bancaria en la que guardas dinero. Solo puedes acceder
a ella mediante tus credenciales (contraseña). De esta forma puedes mantener tu dinero seguro. 
Esta cuenta es un sistema (clase) que ofrece algunos métodos, como por ejemplo, 
depositar o retirar información, pero en la cual no conoceremos el funcionamiento o los detalles internos.
*/ 

//---------------------------------------------EJEMPLO-------------------------------------------

class CajaFuerte{
    constructor(){
        this._dinero=0; //Detalle interno oculto
    }

    depositar(cantidad){this._dinero += cantidad}
    retirar(cantidad){
        if(catntidad <= this._dinero){
            this._dinero -=cantidad;
            return cantidad;
        }
        return 0;
    }
}
//-------------------------------------------------------------------------------------------------

/*

El  encapsulamiento  en es el principio de ocultar los detalles internos 
de la implementación de un objeto, exponiendo solo las interfaces necesarias 
para interactuar con él. Esto asegura la integridad de los datos y la seguridad 
de la implementación.


-----------------------------------------------HERENCIA----------------------------------------------

La herencia permite que una clase (hijo) adopte propiedades y métodos de otra clase (padre). 
Por ejemplo, si tenemos una clase Padre que sabe caminar y una clase Hijo que hereda de Padre, 
Hijo también sabrá caminar sin necesidad de redefinir ese comportamiento. 

*/ 

class Padre{
    caminar(){
        console.log("Caminando...");
    }
}

class Hijo extends Padre{
    //Hijo tendra la capacidad de caminar de Padre
}

let hijo= new Hijo();
hijo.caminar(); // Esto muestra "Caminando..."

/*
La  herencia  es un principio que le permite a una clase derivar propiedades y métodos de 
otra clase, promoviendo la reutilización de código y la jerarquía en la estructuración de clases. 

----------------------------------------POLIMORFISMO----------------------------------------------

Piensa en un control remoto universal que puede interactuar con diferentes dispositivos 
(TV, radio, etc.). Aunque el método de interacción (botones) es el mismo, la forma en que 
cada dispositivo responde es diferente. En programación, el polimorfismo permite que métodos 
con el mismo nombre actúen de manera diferente en distintos objetos. Por ejemplo, una función
dibujar podría comportarse de manera diferente si se aplica a un círculo o a un cuadrado. 
*/

class Forma{
    dibujar(){
        console.log("dibujo una forma generica")
    }
}

class Circulo extends Forma{
    dibujar(){
        console.log("Dibujo un circulo");
    }
}

class Cuadrado extends Forma{
    dibujar(){
        console.log("Dibujo un Cuadrado");
    }
}

/*
El  polimorfismo  es una capacidad que permite que objetos de diferentes clases 
respondan a métodos con el mismo nombre, cada uno según su propia implementación.


------------------------------------ABRSTACCION----------------------------------------------

Considera un bicicleta. No necesitas entender la complejidad de sus engranajes; 
solo utilizas el volante y los pedales. De forma similar, la abstracción es el proceso 
de ocultar los detalles complejos y mostrar solo lo necesario. Por ejemplo, en una clase 
Coche, puedes tener métodos como encender, acelerar y frenar, sin necesidad de mostrar 
cómo se implementan internamente estos procesos. 

*/

class Coche {
    constructor(){
        this._motorEncendido = false; //Propiedad privada
    }

    _encenderMotor(){
        //Metodo privado: Detalle de como se enciende el motor
        this._motorEncendido=true;
        console.log("Motor encendido")
    }
    _apagarMotor(){
        //Metodo privado: Detalle interno sobre como se apaga el motor
        this._motorEncendido= false;
        console.log("Motor apagado");
    }

    //El _ antes de una funcion se utiliza para saber que funcion es privada
}

/*

La  abstracción  es el proceso de ocultar los detalles complejos de la implementación 
y exponer solo las características esenciales y las funcionalidades de un objeto.

*/