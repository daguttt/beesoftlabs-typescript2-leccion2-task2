function getRangeExtraction(numberList: number[]) {
  // 1. Get ranges
  const numberListWithRanges = numberList.reduce((acc: number[][], number, index, array) => {
    const previousNumber = array[index - 1]
    const lastRange = acc[acc.length - 1];
    if (number - 1 === previousNumber) {
    	lastRange.push(number)
      return acc
    }
    acc.push([number])
    return acc
  } , [])
  // 2. Format ranges with dash '-'
  const rangesSeparatedByDash = numberListWithRanges.map((range) => {
    return range.length > 2 ? `${range[0]}-${range[range.length - 1]}` : range
  })
  return rangesSeparatedByDash.join()
}
getRangeExtraction([-7, -6, -5, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);