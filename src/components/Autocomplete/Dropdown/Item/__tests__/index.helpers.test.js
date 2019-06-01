import {
	generateEmail,
} from '../index.helpers'

describe('filterData', () => {

	test('should generate an email from a first and last name', () => {
		
		expect(generateEmail('Richard Fernandez', 'test.com')).toEqual('richard.fernandez@test.com')

	})

	test('should generate an email from just a first name', () => {
		
		expect(generateEmail('Richard', 'test.com')).toEqual('richard@test.com')

	})

})

