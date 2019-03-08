# PokeData

![PokeData logo](logo.png)

## Índice

* [Presentación](#presentación)
* [Url Página web](#link)
* [Modo de uso](#modo-de-uso)
* [Historias de usuarios](#historias-de-usuarios)
* [Diseño de la Interfaz del usuario](#Consideraciones-para-el-diseño-de-la-interfaz-del-usuario)
* [Implementación de la Interfaz del usuario](#Implementación-de-la-Interfaz-del-usuario)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Planificación](#planificación)
* [Contenido de referencia](#contenido-de-referencia)

***

## Presentación

PokeData es una aplicación web con contenido relacionado a los 151 pokemones de la región de Kanto.

Este sitio ha sido diseñado para facilitar la búsqueda y visualización de la información principal de los pokemones del juego [Pokémon GO](pokemongolive.com).


## 👀 Esta página web es posible visualizarla en el siguiente link
https://danielaestrada.github.io/SCL008-data-lovers/index.html

## 💡 Modo de uso

Para comenzar a utilizar la aplicación es recomendable,pero no excluyente, ingresar el nombre de usuario asociado a la cuenta de Pokemon Go.

Luego de ingresar, es posible vizualizar las categorías relacionadas con los tipos de Pokemones que existen. Y al seleccionar una categoría se cargan todos los Pokemones correspondientes al tipo seleccionado.

Y al seleccionar cada tarjeta de cada Pokemón es posible vizualizar en detalle sus características.

También es posible ordenar los Pokemones alfabéticamente y conocer el total por cada tipo.


### Barra de navegación y menú del sitio

 La manera más fácil de buscar datos es usando los seleccionadores de parámetros como el tipo y orden alfabético ubicados en la parte central de la página.

### Flujo

![Flujo](flujo.png)

## 👦👧 Estudio de usuarios

### Historias de usuarios

1. **Valentina** 
  
2. **Joaquín**   
  
3. **Rodrigo** 
  
4. **Eduardo** 

### Encuestas

Se realizó una encuesta a través de las redes sociales para obtener información acerca de lo que buscan los posibles usuarios. 

Es posible ver los resultados en el siguiente [link](https://docs.google.com/forms/d/1K9kFWy7V_mZWLgKt9crNcOjpo6ab0Opt6n5Ynb1Oh-s/edit#responses)


## 📋 Consideraciones para el diseño de la interfaz del usuario

Esta página contiene un logo propio que fue creado considerando el diseño del logo oficial del juego Pokémon Go, que hace referencia al mismo.

Imagen de background utilizada siguiendo el diseño visual del juego Pokemon Go.

LogIn de ingreso.

Cartas de cada uno de los tipos de Pokemon que existen.

Barra de búsqueda. Y visualizacón de los 151 Pokemones de la región de Kanto.

Una vez creado este diseño simple se realiza el primer testeo.


#### Prototipo de baja fidelidad

![]()
![]()
![]()
![]()

#### Testeos de usabilidad

Se realiza pruebas con seis usuarios, quienes prueban la página y:

Usuario1: No es jugador de Pokemon Go, y no tiene una cuenta creada y/o nombre de usuario asociado al juego. Por lo tanto el input de ingreso queda abierto para poder ingresar sin registrarse.

Usuario2: Es jugador de Pokemon Go y sugiere poder vizualizar las mismas imágenes del juego para cada categoría. Entonces, agregamos tarjetas con imágenes de cada categoría correspondiente al tipo de Pokemón. 

Y procedemos a realizar las modificaciones correspondientes con las sugerencias de los usuarios testeados, y los cambios generados son los siguientes:

Máximo 8 años (https://www.useloom.com/share/e6f6bbd892e4446cba27eadb615cdf05)

Pablo 36 años (https://www.useloom.com/share/82cdb481f937405193167e6651b60cc8)


#### Prototipo de alta fidelidad

[Figma](https://www.figma.com/proto/TRXMLNAnAjV03KKYUbFxaNol/Prototipo?node-id=1%3A4&viewport=216%2C323%2C0.25&scaling=scale-down)

[Zeplin] (zpl.io/2jQP5mx)

## Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Muestra la data en una interfaz a través de una tarjeta.
2. Permite al usuario filtrar y ordenar la data.
3. Calcula estadísticas de la colección: Total de Pokemones de cada tipo seleccionado.
4. Se puede visualizar sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

## Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript(ES6), HTML y CSS.   


## Resúmen del código

El código creado en JavaScript(ES6) es una fórmula que permite visualizar la data, filtrarla, ordenarla, y realizar cálculos específicos como el promedio, el máximo y/o el mínimo, que permiten mostrar información aún más relevante a los usuarios.

También fueron incorporados estilos de *Boostrap* (barra de navegación y modales).


## Pruebas unitarias

Pruebas unitarias para las funciones encargadas de _procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Estas funciones están presentes en la carpeta data.js y son llamadas desde la carpeta main.js, donde también están presentes las tarjetas tipo y de cada uno de los 151 Pokemon de la región de Kanto.



##  ✏️ Planificación

Es posible ver la planificación del proyecto en el siguiente [link](https://github.com/DanielaEstrada/SCL008-data-lovers/projects)

## Contenido de referencia

http://www.pokemon.com/

