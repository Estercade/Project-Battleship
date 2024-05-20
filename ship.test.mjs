const Ship = require('./ship');

// Create newShip object
beforeEach(() => {
  let newShip = new Ship(3);
})

describe('Ship is hit', () => {
  newShip.hit();

  test('Tests whether a ship properly sustains a hit', () => {
    expect(newShip.hits).toBe(1);
  });
})

