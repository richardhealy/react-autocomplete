import {
	filterData,
	showShouldResults,
} from '../index.helpers'

const originalData = [
	{ attributes: { name: 'John Wick' } },
	{ attributes: { name: 'Neo Matrix' } },
	{ attributes: { name: 'Mario' } },
	{ attributes: { name: 'Jane Doe' } },
]

describe('filterData', () => {

	test('show filter to only include names that include lowercase string', () => {
		

		const expectedData = [
			{ attributes: { name: 'Neo Matrix' } },
			{ attributes: { name: 'Mario' } },
			{ attributes: { name: 'Jane Doe' } },
		]

		expect(filterData(originalData, 'a')).toEqual(expectedData)

	})

	test('returns full data set if query string is empty', () => {

		expect(filterData(originalData, '')).toEqual(originalData)

	})

	test('returns empty array if query not matched', () => {

		expect(filterData(originalData, 'Luke Skywalker')).toEqual([])

	})

})

describe('showShouldResults', () => {
	
	test( 'show return true if showData = true, input is longer than 0 and items length is greater than 0', () => {
		
		expect(showShouldResults(true, 'Mr Bean', originalData)).toBe(true)

	})

	test( 'show return false if showData = false, input is longer than 0 and items length is greater than 0', () => {
		
		expect(showShouldResults(false, 'Mr Bean', originalData)).toBe(false)

	})

	test( 'show return false if showData = true, input is empty and items length is greater than 0', () => {
		
		expect(showShouldResults(true, '', originalData)).toBe(false)

	})

	test( 'show return false if showData = true, input is is longer than 0 and items are empty', () => {
		
		expect(showShouldResults(true, 'Dr Evil', [])).toBe(false)

	})
})


