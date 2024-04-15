### Proyecto2 Sistema de Votación en JavaScript

Este proyecto implementa un sistema de encuestas interactivo usando JavaScript, ofreciendo dos enfoques distintos: Programación Orientada a Objetos (POO) y Programación Funcional (PF). Permite a los usuarios crear encuestas con múltiples opciones, votar en ellas y ver los resultados en tiempo real.

### Características
1. **Creación de encuestas:** Los usuarios pueden crear encuestas con varias opciones de respuesta.
2. **Votación:** Los usuarios pueden votar en las encuestas creadas.
3. **Visualización de resultados:** Se muestran los resultados de las encuestas en tiempo real.
4. **Almacenamiento de datos:** Las encuestas y los votos se almacenan en estructuras de datos en memoria.

### Tecnologías Utilizadas
JavaScript: Todo el código está escrito en JavaScript puro.
HTML/CSS: Para la interfaz de usuario

### Estructura del Proyecto
El proyecto está dividido en dos principales directorios de código:

POO: Contiene las implementaciones utilizando programación orientada a objetos.
PF: Contiene las implementaciones utilizando programación funcional.
Cada directorio tiene su propio conjunto de archivos que implementan la lógica de las encuestas.

### Instalación
Para utilizar este proyecto, simplemente clona el repositorio y abre los archivos HTML en tu navegador, o ejecuta los scripts de JavaScript directamente desde tu entorno de desarrollo.


### Uso
Crear una Encuesta
Para crear una encuesta, debes llamar a la función crearEncuesta con el título de la encuesta y un arreglo de preguntas y opciones.

### Votar
Para votar, usa la función votar proporcionando el título de la encuesta, el índice de la pregunta y el índice de la opción elegida.
En el caso del archivo POO "gestion.encuestas[0].votar(0, 1);" dentro del parentesis el primer parámetro la pregunta a responder en el arreglo y el segungo respuesta a escoger.
En el caso del archivo PF "votar("Encuesta", 0, 1);" entro del parentesis el primer parámetro la pregunta a responder en el arreglo y el segundo respuesta a escoger.

### Mostrar Resultados
Para ver los resultados, llama a la función mostrarResultados con el título de la encuesta.

