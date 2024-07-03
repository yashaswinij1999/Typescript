function reArrangeWords(arr: string[]): string[] {
  let digitsArr: string[] = [];
  let charArr: string[] = [];

  for (let ar of arr) {
    if (/\d/.test(ar)) {
      digitsArr.push(ar);
    } else {
      charArr.push(ar);
    }
  }
  return charArr.concat(digitsArr);
}
console.log(reArrangeWords(["Maruthy800", "Santro", "I20", "Scoda"]));
