function notString(str: string): string {
  if (str.includes("not")) {
    return str;
  }
  return "not " + str;
}
console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
