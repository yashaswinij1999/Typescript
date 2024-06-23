function doubleChar(str: String) {
  let s: string = "";

  let i: number = 0;
  for (i = 0; i < str.length; i++) {
    s += str[i] + str[i];
  }
  console.log(s);
}
doubleChar("ab");
