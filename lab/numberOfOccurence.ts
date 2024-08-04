function numberOfOccurence(arr: string[], word: string) {
  let count: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}
numberOfOccurence(
  ["Word", "Java", "Computer", "Object", "Software", "Computer"],
  "Computer"
);
