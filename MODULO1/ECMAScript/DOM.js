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
