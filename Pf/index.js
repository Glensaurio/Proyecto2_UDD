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





function iniciarVotacion() {
  let tituloEncuesta = prompt("Ingrese el título de la encuesta que desea responder:");
  const encuesta = encuestas.find(e => e.titulo === tituloEncuesta);
  if (!encuesta) {
    alert("Encuesta no encontrada. Asegúrate de que el título sea correcto.");
    return;
  }

  alert(`Comenzando la encuesta: ${encuesta.titulo}`);
  encuesta.preguntas.forEach((pregunta, indexPregunta) => {
    let opcionesTexto = pregunta.opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join('\n');
    let respuesta = parseInt(prompt(`Pregunta ${indexPregunta + 1}: ${pregunta.pregunta}\n${opcionesTexto}\nElige el número de tu respuesta:`));
    if (respuesta && respuesta > 0 && respuesta <= pregunta.opciones.length) {
      votar(tituloEncuesta, indexPregunta, respuesta - 1);
      alert("Tu voto ha sido registrado.");
    } else {
      alert("Respuesta no válida. Inténtalo de nuevo.");
    }
  });

  mostrarResultados(tituloEncuesta);
}

