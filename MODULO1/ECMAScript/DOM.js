/*
1-DOM
El primer paso es la construcción del DOM (el cual entenderemos a profundidad en esta clase) a 
partir de un documento de HTML guardado en la nube. El DOM es una representación estructurada 
de una página web. Se parece a un árbol, donde cada etiqueta HTML es un nodo, incluyendo textos 
e imágenes. 


2 -CSSOM

En segunda instancia se hace la construcción del CSSOM que es un modelo que representa los estilos
asociados al DOM. El CSSOM es similar al DOM, pero se enfoca en el estilo de la página.

3-RENDER TREE

Lo siguiente es la creación del Render Tree, el cual es una combinación del DOM y el CSSOM 
que se enfoca únicamente en aquellos elementos del documento HTML que son visibles en la página. 
Este árbol representa todos los elementos visuales de la página y sus estilos, y es lo que el navegador 
utiliza para pintar la página en la pantalla. 

4-LAYOUT

El layout de una página determina el tamaño del dispositivo de salida (viewport) dando así contexto a 
los estilos que dependen de él. Este viewport puede ser configurado dentro de la etiqueta <meta> donde 
podemos modificar sus medidas y la escala inicial de mi página. El layout es el cálculo de las posiciones 
y tamaños de los elementos en la página. Antes de pintar los elementos, el navegador necesita saber dónde 
y qué tan grandes deben ser.

¿Qué es el DOM?

Originalmente, los sitios web no eran más que conjuntos de páginas de texto plano con poca interactividad 
con el usuario. A medida que fue surgiendo la necesidad de mejorar la experiencia y la personalización de 
los sitios (diseños más atractivos, funcionalidades más complejas, etc.), se descubrió que era necesario 
tener acceso a los elementos que los componen, así como también permitir la comunicación entre estos, dando 
lugar a la implementación del DOM.

El Document Object Model (DOM), es una estructura jerárquica en forma de árbol que representa todos los 
elementos de una página web. Para crear este objeto DOM, el navegador que lee el documento HTML toma parte 
por parte de este archivo, desde el elemento <html> (también llamado root) hasta las últimas etiquetas, y 
devuelve un objeto basado en su estructura y cuyo comportamiento será controlado a través de scripts JS.

¿Es esta es la única manera de hacerlo? ¿Qué sucede si actualizo la página? ¿Se conservan los cambios?

La respuesta es que no: no es la única forma de hacerlo y, además, los cambios se perderían al actualizar 
la página. Conozcamos entonces una herramienta fundamental que permite interactuar con la estructura y el 
contenido de la página web en tiempo de ejecución: el Objeto Global Document.
*/


/* 

------------------------DOM API---------------------

¿Qué es el DOM API?

El DOM API (Document Object Model Application Programming Interface) es un conjunto de interfaces 
y métodos proporcionados por los navegadores para permitir que los scripts de nuestro código interactúen 
con el DOM.

Es gracias a esta serie de métodos que podemos manipular, transformar y crear elementos dentro 
de un página web.

Acciones que podemos realizar con el DOM API

1-Selección de elementos: Permitir la identificación y selección de elementos en el DOM, 
ya sea por etiqueta, clase, ID u otros selectores CSS.

2-Manipulación de contenido: Crear, modificar o eliminar el contenido de los elementos, 
como atributos, textos, etc.

3-Estilo y presentación: Modificar el estilo de los elementos para cambiar aspectos como 
el color, tamaño, posición, etc.

4-Eventos: Asociar funciones o scripts a eventos del usuario, como clics, teclas presionadas, 
entre otros, para crear interactividad.

5-Navegación: Recorrer la estructura del DOM, accediendo a nodos padres, hijos o hermanos.

La manera que tenemos para conectarnos desde nuestro código al DOM API es mediante algo llamado selectores. 
Estos selectores nos darán acceso a ciertos métodos para manipular los elementos del DOM.

¿Qué es un selector?

Frecuentemente nos referimos bajo el nombre de “selector” a aquellos métodos y propiedades que nos 
permiten seleccionar elementos específicos de una página web, sin necesidad de afectar la naturaleza 
y el comportamiento de otros elementos del DOM.

Algunos ejemplos:

element.firstChild= Obtiene el primer hijo del elemento especificado
getElementById()= Selecciona un elemento por id
getEelementsByClassName()= Selecciona todos los elementos que tengan una clase especifi
querySelector()= Selecciona el primer elemento que coincida con el selector CSS especificado

*/


/*
-------------------EVENTOS-------------------------------

Trabajando con eventos

Hasta el momento aprendimos a seleccionar elementos del DOM. Ahora es el momento de dar un paso 
más adelante y descubrir cómo podemos interactuar con esos elementos que ya seleccionamos. Estas 
interacciones/acciones se denominan eventos.

Un ejemplo sencillo de analizar es por ejemplo cuando le damos click en la pantalla y algo sucede. 
También podría ser un doble click. Otro evento muy común es el de hacer scroll sobre un elemento, 
o presionar una tecla, o llenar un campo de texto.

--Event listener------------------------------------------

De la misma forma que podemos asociar un elemento del DOM con un evento, 
también vamos a poder asociarlo con un event listener. Estos son simplemente 
métodos que se complementan con los eventos. Estas funciones son las disparadoras 
de una lógica al momento de realizarse un evento.

EJEMPLO
Supongamos que tenemos un botón en nuestro DOM con el que podemos iniciar sesión. Vamos a 
acceder a este botón desde nuestro código mediante un selector. Luego vamos a crear una función 
que nos permita iniciar sesión. Por último, vamos a agregar un evento en ese botón para que, al 
hacerle click, se ejecute la función de inicio de sesión.

La callback que se da dentro de un addEventListener recibe como parametro predeterminado un 
"event". "event.target" da como resultado el elemento que disparo ese evento


--METODOS MAS COMUNES----------------

document.getElementById(id) = 	Retorna una referencia al elemento del DOM que tiene el id especificado.
document.getElementsByClassName(className) = Retorna una colección de elementos del DOM que tienen la clase CSS especificada.
document.querySelector(selector)= Retorna el primer elemento del DOM que coincide con el selector CSS especificado.
document.querySelectorAll(selector)= Retorna todos los elementos del DOM que coinciden con el selector CSS especificado.
element.textContent= Permite acceder o modificar el contenido de texto de un elemento.
element.appendChild(childElement) = Agrega un nuevo hijo al final de la lista de hijos de un elemento.

lINK CON MAS METODOS: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model

*/


/* ------------------------------Meta Prompting--------------------------------


Continuemos con lo que veníamos aprendiendo sobre el uso de inteligencia artificial.

El término metaprompt fue por primera vez utilizado el 19 de septiembre de 2022 por David 
Shapiro(opens in a new tab). Este investigador de IA define al metaprompt como “todos aquellos 
prompts que sirven para generar nuevos prompts”. Es decir, utilizar la IA para que genere sus 
propios prompts

En lugar de diseñar un prompt específico para una tarea en particular, este método se centra en 
obtener un prompt general para la tarea que facilita una adaptación más rápida y efectiva a nuevas 
tareas de prompting. Podríamos pensarlo como un prompting recursivo.

El metaprompting es una estrategia que nos permite obtener información más precisa, y mucho más rápida.


Hiperparámetros

Durante tu cursada en Henry hasta ahora has utilizado el concepto de parámetro. Esto también lo podremos 
integrar en ChatGPT. ¡Así es! Puedes incluir hiperparámetros en tus prompts.


Los hiperparámetros son configuraciones ajustables que determinan cómo funciona el modelo. 

Temperature...

El uso del híper parámetro tempertature tiene un papel importante en la naturaleza de la respuesta que obtendrás.


Valores de temperature: El valor que peude recibir este hiper parametro wes un numero que va del 0 al 1
Cuand oel valro es bajo(cerca del 0) hara que las respuestas sean mas enfocadas y consistentes, auqnue tambien
con menos creatividad y variedad
Cuando el valor es mas alto (cerca del 1) aumentara la diversidad y la creatividad de los outputs, pero tambien
llevara a resultados mas impredecibles y posiblemente menos precisos. 

Algunos hiperparámetros

1
max_tokens: define el número máximo de tokens que una respuesta puede contener. Limitar este valor puede ayudar a evitar respuestas demasiado largas o garantizar respuestas más concisas.

2
top_p: controla la diversidad y la selectividad de las respuestas generadas. Un valor bajo (por ejemplo, 0.2) hace que el modelo se centre en las opciones más probables, mientras que un valor alto (por ejemplo, 0.8) permite opciones más diversas y menos probables. 

3
frequency_penalty: penaliza las respuestas que repiten palabras o frases utilizadas anteriormente en la conversación. Un valor más alto (por ejemplo, 0.6) hará que el modelo evite repetir con mayor frecuencia las palabras utilizadas previamente.

4
num_return_sequences: define el número de respuestas alternativas que se generan para una única solicitud. Puedes establecer este valor en 1 para obtener una única respuesta o aumentarlo para obtener múltiples respuestas.


*/