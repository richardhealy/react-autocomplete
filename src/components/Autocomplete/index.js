import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Dropdown from './Dropdown'

import {
	filterData
} from './index.helpers'

class Autocomplete extends Component {
  
	constructor(props) {
		super(props)

		this.state = {
			inputValue:'',
		}
	}

	onInputValueChange = event => {
		
		const {
			value
		} = event.target

		this.setState({
			inputValue:value
		})

	}

	getItems = () => {

  	const {
  		inputValue
  	} = this.state

  	const {
  		apiData
  	} = this.props

  	return filterData(apiData, inputValue)
	}

  render() {

  	const {
  		inputValue
  	} = this.state

  	const items = this.getItems()

    return (
      <div className="autocomplete">
      	<Input value={inputValue} onChange={this.onInputValueChange} />
        {
				  inputValue.length > 0 && <Dropdown items={items} />
        }
      </div>
    )
  }
}

Autocomplete.propTypes = {
  apiData:PropTypes.array.isRequired
}

Autocomplete.defaultProps = {
  apiData:[]
}

export default Autocomplete
