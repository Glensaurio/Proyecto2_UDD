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

//Votación Usuario 1
gestion.encuestas[0].votar(0, 1);
gestion.encuestas[0].votar(1, 1);
gestion.encuestas[0].votar(2, 1);
gestion.encuestas[0].votar(3, 1);
gestion.encuestas[0].votar(4, 1);
gestion.encuestas[0].votar(5, 1);
gestion.encuestas[0].votar(6, 1);
gestion.encuestas[0].votar(7, 1);

//Votación Usuario 2
gestion.encuestas[0].votar(0, 1);
gestion.encuestas[0].votar(1, 1);
gestion.encuestas[0].votar(2, 1);
gestion.encuestas[0].votar(3, 1);
gestion.encuestas[0].votar(4, 1);
gestion.encuestas[0].votar(5, 1);
gestion.encuestas[0].votar(6, 1);
gestion.encuestas[0].votar(7, 1);

gestion.encuestas[0].mostrarResultados();


