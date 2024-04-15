let encuestas = [];

function crearEncuesta(titulo, preguntas) {
  const nuevaEncuesta = {
    titulo,
    preguntas,
    resultados: preguntas.map(p => ({
      pregunta: p.pregunta,
      opciones: p.opciones,
      votos: p.opciones.map(() => 0)
    }))
  };
  encuestas.push(nuevaEncuesta);
  console.log(`Encuesta '${titulo}' creada con éxito.`);
}

function votar(tituloEncuesta, indexPregunta, indexOpcion) {
  const encuesta = encuestas.find(e => e.titulo === tituloEncuesta);
  if (encuesta) {
    encuesta.resultados[indexPregunta].votos[indexOpcion]++;
  }
}

function mostrarResultados(tituloEncuesta) {
  const encuesta = encuestas.find(e => e.titulo === tituloEncuesta);
  if (encuesta) {
    console.log(`Resultados de la encuesta: ${encuesta.titulo}`);
    encuesta.resultados.forEach((r, index) => {
      console.log(`Pregunta ${index + 1}: ${r.pregunta}`);
      r.opciones.forEach((opcion, i) => {
        console.log(` ${opcion}: ${r.votos[i]} votos`);
      });
    });
  }
}

// Preguntas de la encuesta
crearEncuesta("Encuesta", [
  {
    pregunta: "¿Cuál es tu color favorito?",
    opciones: ["Rojo", "Verde", "Azul"]
  },
  {
    pregunta: "¿Cuál es tu Animal favorito?",
    opciones: ["Gato", "Perro", "Ratón"]
  },
  {
    pregunta: "¿Tienes auto?",
    opciones: ["Sí", "No"]
  },
  {
    pregunta: "¿Tienes alguna enfermedad?",
    opciones: ["Sí", "No"]
  },
  {
    pregunta: "¿Estás casado?",
    opciones: ["Sí", "No"]
  },
  {
    pregunta: "¿Tienes trabajo?",
    opciones: ["Sí", "No"]
  },
  {
    pregunta: "¿Posee una carrera profesional?",
    opciones: ["Sí", "No"]
  },
  {
    pregunta: "¿Tiene nacionalidad Chilena?",
    opciones: ["Sí", "No"]
  }
]);


// Votación usuario 1
votar("Encuesta", 0, 1);
votar("Encuesta", 1, 1);
votar("Encuesta", 2, 1);
votar("Encuesta", 3, 1);
votar("Encuesta", 4, 1);
votar("Encuesta", 5, 1);
votar("Encuesta", 6, 1);
votar("Encuesta", 7, 1);



// Votación usuario 2
votar("Encuesta", 0, 0);
votar("Encuesta", 1, 2);
votar("Encuesta", 2, 1);
votar("Encuesta", 3, 1);
votar("Encuesta", 4, 0);
votar("Encuesta", 5, 1);
votar("Encuesta", 6, 0);
votar("Encuesta", 7, 1);


mostrarResultados("Encuesta");


