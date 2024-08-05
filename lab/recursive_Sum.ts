function recursive_Sum(n: number): number {
  if (n <= 0) {
    return 0;
  } else {
    return n + recursive_Sum(n - 1);
  }
}
console.log(recursive_Sum(3));
console.log(recursive_Sum(5));
console.log(recursive_Sum(7));
