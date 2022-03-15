const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return '<p>' + pregunta.titulo + '</p>'
}

function imprimeTodasLasRespuestas(pregunta) {
  return imprimeUnaRespuesta(pregunta)
}

function imprimeUnaRespuesta(respuesta) {
  
  
  let newHTML = ''
  for (let i = 0; i < respuesta.respuestas.length; i++) {

    newHTML += imprimeLabel(respuesta.respuestas[i])
    newHTML += imprimeInput(respuesta.respuestas[i])

  }

  return newHTML
}

function imprimeLabel(respuesta) {
  return '<label for = "' + respuesta.id + '">' + respuesta.label + '</label>'
}

function imprimeInput(respuesta) {
  return '<input type="radio" id ="' + respuesta.id + '" name ="' + respuesta.name + '" value = "' + respuesta.value + '">'
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);