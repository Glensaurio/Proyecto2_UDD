class Encuesta {
  constructor(titulo, preguntas) {
    this.titulo = titulo;
    this.preguntas = preguntas; // Array de objetos pregunta
    this.resultados = preguntas.map(p => ({
      pregunta: p.pregunta,
      opciones: p.opciones,
      votos: p.opciones.map(() => 0)
    }));
  }

  votar(indexPregunta, indexOpcion) {
    this.resultados[indexPregunta].votos[indexOpcion]++;
  }

  mostrarResultados() {
    console.log(`Resultados de la encuesta: ${this.titulo}`);
    this.resultados.forEach((r, index) => {
      console.log(`Pregunta ${index + 1}: ${r.pregunta}`);
      r.opciones.forEach((opcion, i) => {
        console.log(` ${opcion}: ${r.votos[i]} votos`);
      });
    });
  }
}

class GestionEncuestas {
  constructor() {
    this.encuestas = [];
  }

  crearEncuesta(titulo, preguntas) {
    const nuevaEncuesta = new Encuesta(titulo, preguntas);
    this.encuestas.push(nuevaEncuesta);
    console.log(`Encuesta '${titulo}' creada con éxito.`);
  }

  encontrarEncuesta(tituloEncuesta) {
    return this.encuestas.find(encuesta => encuesta.titulo === tituloEncuesta);
  }

  iniciarVotacion() {
    let tituloEncuesta = prompt("Ingrese el título de la encuesta que desea responder:");
    const encuesta = this.encontrarEncuesta(tituloEncuesta);
    if (!encuesta) {
      alert("Encuesta no encontrada. Asegúrate de que el título sea correcto.");
      return;
    }

    alert(`Comenzando la encuesta: ${encuesta.titulo}`);
    encuesta.preguntas.forEach((pregunta, indexPregunta) => {
      let opcionesTexto = pregunta.opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join('\n');
      let respuesta = parseInt(prompt(`Pregunta ${indexPregunta + 1}: ${pregunta.pregunta}\n${opcionesTexto}\nElige el número de tu respuesta:`));
      if (respuesta && respuesta > 0 && respuesta <= pregunta.opciones.length) {
        encuesta.votar(indexPregunta, respuesta - 1);
        alert("Tu voto ha sido registrado.");
      } else {
        alert("Respuesta no válida. Inténtalo de nuevo.");
      }
    });

    encuesta.mostrarResultados();
  }
}

const encuestaTotal = [
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
];

const gestion = new GestionEncuestas();
gestion.crearEncuesta("Encuesta", encuestaTotal);
