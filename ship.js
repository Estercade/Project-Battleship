export const Ship = function(num) {
  let length = num;
  let hits = 0;
  let sunk = false;

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits >= length) {
      sunk = true;
    }
  }

  return { get length() { return length }, get hits() { return hits }, get sunk() { return sunk }, hit, isSunk }
}