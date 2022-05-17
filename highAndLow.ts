function highAndLow(numbers: string): string {
  // throw new NotImplementedException() ?
  // No, wait, this is TypeScript.
  const splitNumbers: number[] = numbers.split(" ").map(Number);
  const min = Math.min(...splitNumbers)
  const max = Math.max(...splitNumbers)
  return `${max} ${min}`
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")