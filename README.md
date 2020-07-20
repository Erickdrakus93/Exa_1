# Análisis de las funciones.

En cada uno de los ejercicios se uso una lógica sobre la estructurad de datos que se presenta.

##Análisis del primer ejercicio
Estamos haciendo una operación sobre un arreglo de longitud constante, así que lo que haremos
es declarar un nuevo arreglo, con la propiedad de que el valor del
anterior es menor que el que le sigue, así que por la estructura iterativa de la subrutina, esta nos arrojara el sub-arreglo mas grande con esa propiedad.
**Sketch de análisis temporal**
La complejidad de esta subrutina tiene complejidad temporal es $O(n)$, donde $n$, es el tamaño de la cadena- mientras que la complejidad espacial es $O(1)$, es decir tiene complejidad constante.

##Análisis del segundo ejercicio.
Este problema es solucionado creando una subrutina de acumulación, con la restricción de que el valor inicial se actualizara con cada iteración hasta que sea menor igual que la segunda entrada que consume la función.
**Sketch de complejidad temporal como de espacio**
Esta tendrá complejidad la distancia que tenga del primer termino,hasta el final, digamos
$s=m-n$, entonces su complejidad temporal es $O(s^2)$.
El costo de memoria sera el  stack de memoria de lo que consume, entonce su complejidad temporal es O(n*m);

##Análisis del tercer ejercicio.
Este ejercicio, es básicamente hacer una llamada de "sort", con una función de orden internamente,
en orden descendente,tal que cuando hagamos el subscript nos de el correspondiente mayor en ese orden.
**Complejidad temporal y espacial**
Es el costo de hacer el ordenamiento, luego de hacer el "subscript", entonces es a lo mas $O(n^2)$.
En cuestión del análisis de memoria(espacial), este sera el tamaño de la cadena, i.e $O(r)$.



##Análisis del cuarto ejercicio.
Este problema se reduce a hacer arreglos locales, es decir comparar cada uno de los elementos del arreglo, y quitar sin dejar espacios los que estén repetidos.

**Complejidad temporal y espacial**
En este caso es un costo de crecimiento de $O(1)$.
Y el costo de memoria es el costo del tamaño de la cadana con repeticiones $O(n)$.

##Análisis del quinto ejercicio.
Básicamente lo que se hace es usar una estructura de dato stack, para ir colocando los caracteres de apertura y después hacer llamados de pop(), para su respectivo carácter de cerrada, si no es el caso, o el stack es vació nos regresara un false.
En otro caso al final de hacer las coincidencias, este nos regresara true.

**Análisis temporal y espacial**
Por el tamaño de la cadena que le demos de comer a esta subrutina, entonces el orden de crecimiento de tiempo sera $O(n^2)$.
En cuestión de la memoria, esta tendrá un costo del Stack(heap) de tamaño $O(n^2).

##Análisis del sexto ejercicio.
En este ejercicio se hace un diseño de compatibilidad de salones por clase, entonces lo que se hace es hacer una lógica,
pues cada clase tiene un rango de duración, así que diremos que una clase tiene compatibilidad con un salón de clases, si no interfiere con las clases ya asignados, en otro caso, se usa otro salón de clases, todo esto teniendo una estructura iterativa.
Observación:Este es un diseño de algoritmos con técnicas tipo Greedy.
