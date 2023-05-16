const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se count retorna 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('Testa se names retorna array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('AverageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('o argumento location deve retornar a string NW', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });

  it('o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBeGreaterThanOrEqual(expected);
  });

  it('o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
});
