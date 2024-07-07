function removeStringFromList(str: string[], n: number): string[] {
  const result: string[] = str.filter((el) => el.length < n);

  return result;
}
console.log(
  removeStringFromList(["Book", "Pencil", "Pen", "Sharpner", "Eraser"], 6)
);
console.log(removeStringFromList(["mango", "apple", "grapes", "tomato"], 6));
