const array = [
	{ year: '2016', result: 'N/A' },
	{ year: '2015', result: 'W' },
	{ year: '2014', result: 'N/A' }
]
const superbowlWin = (record) => {
	const result = record.find((element) => element.result === 'W')
	return !!result ? result.year : undefined
}
