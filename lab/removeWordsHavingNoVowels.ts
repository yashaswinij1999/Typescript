function removeWordsHavingNoVowels(arr: string[]) {
  const vowelsArr: string[] = arr.filter((el) => {
    return findVowels(el);
  });

  console.log(vowelsArr);

  function findVowels(str: string) {
    for (let i: number = 0; i < str.length; i++) {
      let c: string = str[i];

      if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
        return true;
      }
    }
    return false;
  }
}
removeWordsHavingNoVowels(["book", "pencil", "pen", "sharpner", "myth"]);
