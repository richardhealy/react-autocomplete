export const filterData = (data, value) => {

	if(!Array.isArray(data)) {
		return data
	}

	return data.filter(item => {
		const name = item.attributes.name.toLowerCase()
		return name.includes(value.toLowerCase())
	})

}