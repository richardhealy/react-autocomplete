export const generateEmail = (fullName, domain) => {
	return fullName
		.toLowerCase()
		.split(' ')
		.join('.')
		.concat('@', domain)
}