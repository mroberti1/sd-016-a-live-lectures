// 1. Gerar um número aleatório
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  return randomNumber;
}

// 2. Gerar um jogo (sortear os números)
function generateGame() {
  let megaSenaDraw = [];

  // Mecanismo para sortear SEIS números
  for (let index = 1; index <= 6; index += 1) {
    // pegar um número aleatório
    let randomNumber = generateRandomNumber();
    // colocar esse número aleatório no array megaSenaDraw
    megaSenaDraw.push(randomNumber);
  }

  return megaSenaDraw;
}

// 3. Conferir um jogo e compará-lo com o resultado da mega sena
// Eu preciso do meu jogo
// Eu preciso do resultado da mega sena
// Contar quantos números eu acertei no meu jogo
function checkMegaSenaResult(result, game) {
  let numberOfHits = 0;

  for (let index = 0; index < result.length; index = index + 1) {
    let drawnNumber = result[index];

    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
      let priscilaNumber = game[gameIndex];

      if (drawnNumber === priscilaNumber) {
        numberOfHits += 1;
      }
    }
  }
  return numberOfHits;
}

// Nosso jogo
let priscilaGame = [7, 21, 33, 45, 56, 60];

// Armazenou os números sorteados
let megaSenaNumbers = generateGame();

let bernardoGame = generateGame();

console.log('Jogo da Mega Sena: ' + megaSenaNumbers);
console.log('Jogo da Pri: ' + priscilaGame);
console.log('Jogo do Bê: ' + bernardoGame);
console.log('A Pri teve ' + checkMegaSenaResult(megaSenaNumbers, priscilaGame) + ' acertos.');
console.log('O Bê teve ' + checkMegaSenaResult(megaSenaNumbers, bernardoGame) + ' acertos.');

