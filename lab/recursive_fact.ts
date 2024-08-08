function recursive_fact(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return n * recursive_fact(n - 1);
  }
}
console.log(recursive_fact(4));
