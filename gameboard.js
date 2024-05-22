import { Ship } from './ship.js';

export const Gameboard = function(width, height) {
  // let arr = new Array(height).fill().map(() => new Array(width).fill(0));
  let hitboxes = [];
  let misses = [];
  let ships = 0;

  function _coordinatesToIndex(x, y) {
    return y * width + x;
  }

  function placeShip(x, y, length) {
    // add to ship count
    ships++;
    let newShip = new Ship(length);
    // add hit markers
    hitboxes[_coordinatesToIndex(x, y)] = newShip;
  }

  function receiveAttack(x, y) {
    let attackIndex = _coordinatesToIndex(x, y);
    // check if ship exists at the coordinates
    if (hitboxes[attackIndex]) {
      hitboxes[attackIndex].hit();
      hitboxes[attackIndex].isSunk();
      if (hitboxes[attackIndex].sunk) {
        ships--;
      };
    } else {
      // if not, add coordinates to misses
      misses.push(attackIndex);
    }
  }

  function allSunk() {
    return ships === 0;
  }

  return { placeShip, receiveAttack, allSunk, get hitboxes() { return hitboxes }, get misses() { return misses }, get ships() { return ships} };
}