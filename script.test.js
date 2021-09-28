const { sum, summationOf } = require('./script');

describe('The function sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('adds 5.1 + 6.55 to equal 11.65', () => {
    // Dá uma espiadinha neste matcher aqui! 🙃
    // Experimente substituir por .toBe() para ver o que acontece. 😉
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });
  
  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it('adds -5 + (-39) to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });
  
  it('adds 0 + (-10) to equal -10', () => {
    expect(sum(-0, -10)).toBe(-10);
  });
});

describe('The function summationOf', () => {
  it('Espera que a função summationOf exista', () => {
    expect(typeof summationOf).toBe('function');
  });
  
  it('Espera que o somatório de 1 seja igual a 1', () => {
    expect(summationOf(1)).toBe(1);
  });
  
  it('Espera que o somatório de 3 seja igual a 6', () => {
    expect(summationOf(3)).toBe(6);
  });
  
  it('Espera que o somatório de 5 seja igual a 15', () => {
    expect(summationOf(5)).toBe(15);
  });  
});
