import { Gameboard } from './gameboard.js';

describe('Gameboard is created', () => {
  let gameboard = new Gameboard(10, 10);

  gameboard.placeShip(1, 1, 1);
  gameboard.receiveAttack(1, 1);
  test('Tests that a placed ship properly receives an attack', () => {
    expect(gameboard.hitboxes[11].damage).toBe(1);
  });

  test('Tests that a received attack is not improperly recorded', () => {
    expect(gameboard.misses[11]).toBeFalsy;
  });

  gameboard.receiveAttack(1, 2);
  test('Tests that a missed attack is properly recorded', () => {
    expect(gameboard.misses[21]).toBeTruthy;
  });

  test('Tests report that all ships have been sunk', () => {
    expect(gameboard.allSunk()).toBe(true);
  });
})