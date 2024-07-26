function isUnitmatrix(arr: number[][]): boolean {
  let first: number[] = arr[0];
  let second: number[] = arr[1];
  let final: number[] = [...first, ...second];

  for (let i = 0; i < final.length; i++) {
    if (final[i] !== 1) {
      return false;
    }
  }
  return true;
}

console.log(
  isUnitmatrix([
    [1, 1, 1],
    [1, 1, 1],
  ])
);
console.log(
  isUnitmatrix([
    [1, 2, 1],
    [2, 1, 1],
  ])
);
