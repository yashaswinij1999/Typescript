function stringSplosion(str: String) {
  let s: String = "";

  for (let i: number = 0; i < str.length; i++) {
    for (let j: number = 0; j <= i; j++) {
      s = s + "" + str[j];
    }
  }
  console.log(s);
}
stringSplosion("ab");
stringSplosion("Code");
stringSplosion("abc");
