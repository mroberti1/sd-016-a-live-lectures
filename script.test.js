const { sum, summationOf } = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5.1 + 6.55 to equal 11.65', () => {
  // Dá uma espiadinha neste matcher aqui! 🙃
  // Experimente substituir por .toBe() para ver o que acontece. 😉
  expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds -5 + (-39) to equal -44', () => {
  expect(sum(-5, -39)).toBe(-44);
});

test('adds 0 + (-10) to equal -10', () => {
  expect(sum(-0, -10)).toBe(-10);
});

test('Espera que a função summationOf exista', () => {
  expect(typeof summationOf).toBe('function');
});

test('Espera que o somatório de 1 seja igual a 1', () => {
  expect(summationOf(1)).toBe(1);
});