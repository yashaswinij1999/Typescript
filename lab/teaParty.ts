function teaParty(tea: number, candy: number): number {
  const bad: number = 0;
  const good: number = 1;
  const great: number = 2;

  if (tea >= candy * 2 || candy >= tea * 2) {
    return great;
  } else if (tea >= 5 && candy >= 5) {
    return good;
  }
  return bad;
}
console.log(teaParty(6, 8));
console.log(teaParty(3, 8));
console.log(teaParty(20, 6));
