const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Não passando argumentos', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    const actual = getOpeningHours('Thu', '09:00-AM');
    expect(actual).toThrowError('The day must be valid. Example: Monday');
  });

  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM"', () => {
    const actual = getOpeningHours('Friday', '09:00-ZM');
    const msg = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toThrowError(msg);
  });

  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    const actual = getOpeningHours('Saturday', 'C9:00-AM');
    const expected = 'The hour should represent a number';
    expect(actual).toThrowError(expected);
  });

  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    const actual = getOpeningHours('Sunday', '09:c0-AM');
    const expected = 'The minutes should represent a number';
    expect(actual).toThrowError(expected);
  });

  it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    const actual = getOpeningHours('Monday', '13:00-AM');
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrowError(expected);
  });

  it('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    const actual = getOpeningHours('Tuesday', '09:60-AM');
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrowError(expected);
  });
});
