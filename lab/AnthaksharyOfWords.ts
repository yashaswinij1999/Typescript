function AnthaksharyOfWords(str: string[]) {
  if (str.length === 0) return [];

  let reArrangeWords: string[] = [];
  let used: Set<string> = new Set();
  let currentElement: string = str[0];
  reArrangeWords.push(currentElement);
  used.add(currentElement);

  while (reArrangeWords.length < str.length) {
    let lastChar = currentElement.slice(-1).toLowerCase();
    let found = false;

    for (let i = 0; i < str.length; i++) {
      if (!used.has(str[i]) && str[i][0].toLowerCase() === lastChar) {
        reArrangeWords.push(str[i]);
        used.add(str[i]);
        currentElement = str[i];
        found = true;
        break;
      }
    }
    if (!found) break;
  }
  return reArrangeWords;
}
console.log(AnthaksharyOfWords(["Java", "excel", "android", "logo", "dbase"]));
