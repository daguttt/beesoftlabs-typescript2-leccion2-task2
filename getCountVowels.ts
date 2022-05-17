function getCountVowels(str: string): number {
	// your code here
  const regexp = /[aeiou]/g
  return [...str.matchAll(regexp)].length
}
getCountVowels("abracadabra")