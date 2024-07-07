function multiplyWithoutStarOperator(a: number, b: number) {
  let result: number = 0;
  while (b > 0) {
    if (b & 1) {
      result = result + a;
    }
    a = a << 1;
    b = b >> 1;
  }
  return result;
}
console.log(multiplyWithoutStarOperator(12, 8));
