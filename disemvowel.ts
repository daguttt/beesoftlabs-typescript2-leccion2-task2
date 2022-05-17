function disemvowel(str: string): string {
	const regexp = /[aeiouAEIOU]/g
	return str.replace(regexp, "");
}
disemvowel("This website is for losers LOL!")