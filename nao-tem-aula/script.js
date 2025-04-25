window.addEventListener("load", () => {
  document.body.addEventListener("click", () => {
    const audio = new Audio("./audio/safadinhoss.mp3");
    audio.play();
  }, { once: true }); // garante que toca só uma vez
});

//

let hojeTemAula = false;

const diasDaSemana = [
  "domingo", // 0
  "segunda-feira", // 1
  "terça-feira", // 2
  "quarta-feira", // 3
  "quinta-feira", // 4
  "sexta-feira", // 5
  "sábado", // 6
];

const diasDeAula = [
  { dia: diasDaSemana[0], temAula: false }, //domingo
  { dia: diasDaSemana[1], temAula: false }, //segunda
  { dia: diasDaSemana[2], temAula: false }, //terca
  { dia: diasDaSemana[3], temAula: true }, //quarta
  { dia: diasDaSemana[4], temAula: true }, //quinta
  { dia: diasDaSemana[5], temAula: false }, //sexta
  { dia: diasDaSemana[6], temAula: false }, //sabado
];

let hoje = new Date().getDay();

//

let diasRestantesParaAulaDoWindson = 0;

while (!diasDeAula[hoje].temAula) {
  if (hoje === 6) {
    hoje = 0;
    diasRestantesParaAulaDoWindson++;
  }

  if (!diasDeAula[hoje].temAula) {
    hoje++;
    diasRestantesParaAulaDoWindson++;
  }
}

document.getElementById("answer").innerText =
  diasRestantesParaAulaDoWindson + " dia(s)";
