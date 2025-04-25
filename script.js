window.addEventListener("load", () => {
  document.body.addEventListener("click", () => {
    const audio = new Audio("./audio/safadinhoss.mp3");
    audio.play();
  }, { once: true }); // garante que toca só uma vez
});


//

let hojeTemAula;

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
  { dia: diasDaSemana[1], temAula: false },
  { dia: diasDaSemana[2], temAula: false },
  { dia: diasDaSemana[3], temAula: true },
  { dia: diasDaSemana[4], temAula: true },
  { dia: diasDaSemana[5], temAula: false },
  { dia: diasDaSemana[6], temAula: false },
];

const hoje = new Date().getDay();

for (let i = 0; i <= 5; i++) {
  if (diasDaSemana[hoje] === diasDeAula[i].dia) {
    if (diasDeAula[i].temAula) hojeTemAula = true;
    else hojeTemAula = false;
  }
}

//

document.getElementById("answer").innerText = hojeTemAula ? "SIM" : "NÃO";

//

// prox-aula

if (hojeTemAula) {
  const hrefProxAula = document.getElementById("prox-aula");
  hrefProxAula.style.display = "none";
}
