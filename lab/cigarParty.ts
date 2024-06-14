function cigarParty(cigars: number, isWeekend: boolean): boolean {
  if (cigars >= 40 && cigars <= 60) {
    return true;
  } else if (isWeekend === true && cigars >= 40) {
    return true;
  }
  return false;
}
console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));
