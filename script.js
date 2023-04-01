// Agilidade dos pilotos (%)
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90;

// Continue daqui.
var dict = {
  "slider": { id: "slider", nome: 'slider', agilidade: slider },
  "jester": { id: "jester", nome: 'jester', agilidade: jester },
  "stinger": { id: "stinger", nome: 'stinger', agilidade: stinger },
  "goose": { id: "goose", nome: 'goose', agilidade: goose },
  "iceman": { id: "iceman", nome: 'iceman', agilidade: iceman },
  "maverick": { id: "maverick", nome: 'maverick', agilidade: maverick }
};
const pilotArray = Object.values(dict);

let pilotoUsuario = prompt("Escolha entre: slider, jester, stinger, goose, iceman ou maverick: ");
const randomPilot = pilotArray[Math.floor(Math.random() * pilotArray.length)];

console.log("Sua escolha é: " + pilotoUsuario);
console.log("A agilidade do seu piloto é: " + dict[pilotoUsuario].agilidade);

console.log("O programa escolheu: " + randomPilot.nome);
console.log("A agilidade do piloto do programa é: " + randomPilot.agilidade);

if (randomPilot.agilidade > dict[pilotoUsuario].agilidade) {
  console.log("Você perdeu!");
} else if (randomPilot.agilidade < dict[pilotoUsuario].agilidade) {
  console.log("Voce ganhou");
} else {
  console.log("Empate");
}

