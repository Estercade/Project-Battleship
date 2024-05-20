import { Ship } from './ship.js';

describe('Ship is created', () => {
  let newShip = new Ship(1);
  test('Tests whether ship was created successfully', () => {
    expect(newShip.length).toBe(1);
  });

  newShip.hit();
  test('Tests whether a ship properly sustains a hit', () => {
    expect(newShip.hits).toBe(1);
  });

  newShip.isSunk();
  test('Tests whether a ship properly sinks', () => {
    expect(newShip.sunk).toBe(true)
  })
})