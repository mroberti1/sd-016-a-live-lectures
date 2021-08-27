/**
 * Problema: Dada a posição da rainha e a posição da peça oponente, devemos verificar se a rainha
 * PODE ou NÃO PODE atacar essa peça oponente.
 * OBS: NÃO iremos EFETIVAMENTE movimentar a rainha, apenas verificar se o ataque é possível!!!
 */

// Posição original da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

// Posição da peça oponente
let opponentRowPosition = 4;
let opponentColumnPosition = 5;

// Alguma variável que armazene se é possível ou não ocorrer o ataque
let canAttack = false;

// Cálculo para entender se o ataque pode ser realizado

// Se a rainha está na mesma linha que a peça oponente OU a rainha está na mesma coluna que a peça oponente, significa que o ataque pode ser realizado!
if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
  canAttack = true;
  console.log('pode atacar na mesma linha OU coluna!');
}

// Identificar se a peça oponente está na diagonal superior direita
for (let upperRight = 1; upperRight < 8; upperRight += 1) {
  let currentQueenRow = queenRowPosition + upperRight;
  let currentQueenColumn = queenColumnPosition + upperRight;

  // Se a posição da linha for maior 8 OU a coluna for maior do que 8 eu tenho que parar o loop
  if (currentQueenRow > 8 || currentQueenColumn > 8) {
    break;
  }

  // Se a linha atual da rainha E a coluna atual da rainha estiverem na mesma posição que a peça oponente, significa que ela pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('pode atacar na diagonal superior direita!');
    break;
  }
}

// Identificar se a peça oponente está na diagonal inferior esquerda
for (let lowerLeft = 1; lowerLeft < 8; lowerLeft += 1) {
  let currentQueenRow = queenRowPosition - lowerLeft;
  let currentQueenColumn = queenColumnPosition - lowerLeft;

  // Se a linha atual da rainha for igual a zero OU a coluna atual for igual a zero, eu paro o loop
  if (currentQueenRow === 0 || currentQueenColumn === 0) {
    break;
  }

  // Se a linha atual da rainha E a coluna atual da rainha estiverem na mesma posição que a peça oponente, significa que ela pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('pode atacar na diagonal inferior esquerda!');
    break;
  }
}

// Identificar se a peça oponente está na diagonal superior esquerda
for (let upperLeft = 1; upperLeft < 8; upperLeft += 1) {
  let currentQueenRow = queenRowPosition + upperLeft;
  let currentQueenColumn = queenColumnPosition - upperLeft;

  // Se a linha atual da rainha for maior que 8 OU a coluna atual da rainha for igual a 0, eu paro o loop
  if (currentQueenRow > 8 || currentQueenColumn === 0) {
    break;
  }

  // Se a linha atual da rainha E a coluna atual da rainha estiverem na mesma posição que a peça oponente, significa que ela pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('pode atacar na diagonal superior esquerda!');
    break;
  }
}

// Identificar se a peça oponente está na diagonal inferior direita
for (let lowerRight = 1; lowerRight < 8; lowerRight += 1) {
  let currentQueenRow = queenRowPosition - lowerRight;
  let currentQueenColumn = queenColumnPosition + lowerRight;

  // Se a linha atual da rainha for igual a 0 OU a coluna atual da rainha for maior que 8, eu paro o loop
  if (currentQueenRow === 0 || currentQueenColumn > 8) {
    break;
  }

  // Se a linha atual da rainha E a coluna atual da rainha estiverem na mesma posição que a peça oponente, significa que ela pode atacar!
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    canAttack = true;
    console.log('pode atacar na diagonal inferior direita!');
    break;
  }
}

console.log('Pode atacar? ' + canAttack);