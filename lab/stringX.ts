function stringX(str: string): string {
  let first: string = str[0];
  let last: string = str[str.length - 1];
  let sub: string = str.slice(1, str.length - 1);
  let remove = "";

  for (let i: number = 0; i < sub.length; i++) {
    if (sub[i] !== "x") {
      remove += sub[i];
    }
  }
  return first + remove + last;
}
console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
