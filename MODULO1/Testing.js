// -----------------TESTING

/*
El  testing  es un área que se enfoca en evaluar el comportamiento del código de forma controlada. 
Los tests son ejecutados de forma aislada.


-----------------Testing Driven Development--------------------

Una de las metodologías de desarrollo de software más populares es conocida 
como Test Driven Development (TDD). Por lo general, a la hora de desarrollar el 
código nos enfocamos en que este resuelva un problema. Una vez desarrollado, generamos un 
test asociado para corroborar que siempre funcione.

El TDD apunta a todo lo contrario. Esta metodología nos dice que primero debemos desarrollar 
un test que facilite la solución de un problema. Y luego, hay que comenzar a desarrollar el 
código a partir de los tests.

-----TRES TIPOS DE TEST-----------

-Unit:
    -Son los mas sencillos y simples de implementar
    -Evaluan proporciones o pequeñas partes de codigo de forma indvidual
    -Trabajan con funciones puras, es decir, que para un mismo input siempre van a devolver el mismo outpu
    
-Intregation:
    -Se enfocan en la integracion del codigo
    -Evalua como funcionan de forma conjunta varios bloques o implementaciones de codigo de nuestra app y la
    interaccion entre estas
    -Por ejemplo, lacomunicacion de mi server con la base de datos
    
-Automation:
    -UI Test: Se enfocna en evaluar todo el comportamiento de las interacciones del cliente con nuestra interfaz
    -End-to-end: Se enfocan en el flujo completo de nuestra aplicacion. 

.


------COMO IMPLEMENTAR TEST UNITARIOS?-------------

1-Unidad de prueba: Un test unitario se centra en evaluar una "unidad" especifica de codigo. Esta unidad puede ser una 
funcion, metodo o clase, y la idea es aislarla del resto del sistema para validar su comportamiento de manera independiente.

2-Escribir el test: El desarrollador escribe un test que verifica un aspecto especifico de una pieza de codigo. Establece
condiciones iniciales, llama ala unidad que se esta probando y evalua el resutlado en funcion de las expectativas

3-Ejecucion del Test: Los test unitarios se ejecutan de manera automatica. Este proceso puede ser parte de un flujo de construccion
mas amplio o ejecutarse por separado, dependiendo de la configuracion del proyecto.

4-Resultado del test: Su la unidad de codigo funciona correctamente, el test pasa satisfactioriamente. Si hay algun error o el comportamiento
no cumple con las expectativas, el test fallara y debera reescribirse para luego volver a probar. La salida del test proporciona informacion
sobre que parte especifica del codigo no esta funcionando como se esperaba. 
 
5-Refactorizacion: Luego del test, los desarrolladores pueden refactorizar el codigo para mejorarlo sin cambiar su comportamiento externo. La
existencia de test unitariso solidos facilita la refactorizacion, ya que cualquier cambio no deseado se desctacara a traves de los test. 
    

-------------------------¿Cómo podemos escribir tests?----------------

Existen varios herramientas para desarrollar testing. Cada herramienta tiene sus propias características. Algunas herramientas comúnmente empleadas con el lenguaje de
JavaScript son:

+Mocha: Es una herramienta mas versatil que admite tanto BDD como TDD. Ofrece flexibilidad y puede ser utilizado con bibliotecas de aserciones como Chai.
+Jasmine: Se centra en la legibilidad y esta orientada a comportamientos BDD(Behavior Driven Develpment). Su metodologia esta enfocadaen el trabajo colaborativo
entre distintas areas de desarrollo.
+Jest: Esta es una herramienta desarrrollada por la empresa Meta. Es especifica para javascript ya que se destaca por su facilidad de uso y configuracion minima

-----------------------------------------¿Qué es un framework?-------------------------------------------

Cuando desarrollamos código nos encontraremos algunas herramientas denominadas frameworks (marco de trabajo). Los frameworks son tecnologías ya desarrolladas 
(con código, ¡claro!) que nos permitirán desarrollar una aplicación de manera más sencilla y eficiente.

Metodos: Nuevos metodos ya diseñados para que le demos un uso adecuado a la herramienta
Estructura: Una arquitectura predefinida para que nuestra aplicacion sea prolija y escalable
Buenas practicas: Permite que otros devs que usen esta herramienta puedan comprender lo que hemos escrito




*/ 