function evenlySpaced(a: number, b: number, c: number): boolean {
  if (a - b === b - c || a - b === c - a) {
    return true;
  }

  return false;
}
console.log(evenlySpaced(2, 4, 6));
console.log(evenlySpaced(4, 6, 2));
console.log(evenlySpaced(4, 6, 3));
