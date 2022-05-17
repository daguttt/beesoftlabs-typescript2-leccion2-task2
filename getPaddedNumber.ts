function addPad(n: number): string {
  return [...new Array(4).fill(0), n].join("")
}

function getPaddedNumber(value: number): string{
	const paddedNumber = addPad(value)
	return paddedNumber.substring(paddedNumber.length - 5)
}