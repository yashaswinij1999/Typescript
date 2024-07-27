function comboString(s1: string, s2: string): string {
  if (s1.length > s2.length) {
    return s2 + s1 + s2;
  }
  return s1 + s2 + s1;
}
console.log(comboString("Hello", "hi"));
console.log(comboString("hi", "Hello"));
console.log(comboString("aaa", "b"));
