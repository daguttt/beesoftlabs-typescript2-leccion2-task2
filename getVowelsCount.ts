function getVowelsCount(str: string): number {
  const regexp = /[aeiuo]/g;
  return [...str.matchAll(regexp)].length;
}
