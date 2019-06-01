export const filterData = (data, value) => {

	if(!Array.isArray(data)) {
		return data
	}

	return data.filter(item => {
		const name = item.attributes.name.toLowerCase()
		return name.includes(value.toLowerCase())
	})

}

export const showShouldResults = (showData, inputValue, items) => {
  return (showData && items.length > 0 && inputValue.length > 0) ? true : false
}
