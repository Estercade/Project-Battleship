export const Ship = function(num) {
  let length = num;
  let damage = 0;
  let sunk = false;

  function hit() {
    damage++;
  }

  function isSunk() {
    if (damage >= length) {
      sunk = true;
    }
  }

  return { get length() { return length }, get damage() { return damage }, get sunk() { return sunk }, hit, isSunk }
}