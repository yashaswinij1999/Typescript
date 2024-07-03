function removeDuplicates(arr: String[]) {
  const s: Set<String> = new Set<String>(arr);
  console.log(s);
}
removeDuplicates([
  "Computer",
  "Book",
  "Calculator",
  "Book",
  "Pencil",
  "pen",
  "bottles",
  "pen",
]);
