import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Dropdown from './Dropdown'
import './style.css'
import {
	filterData,
  showShouldResults,
} from './index.helpers'

class Autocomplete extends Component {
  
	constructor(props) {
		super(props)

		this.state = {
			inputValue:'',
      selected:null,
      showData:false,
      selectedIndex:0,
		}
	}

	onInputValueChange = value => {
	
		this.setState({
			inputValue:value,
      showData:true,
      selectedIndex:0,
		})

	}

  onKeyDown = event => {
    
    const { 
      selectedIndex,
      showData,
    } = this.state

    const items = this.getItems()

    // If data not showing
    if(!showData) {
      return false
    }

    // Pressed Enter
    if (event.keyCode === 13 && showData) {
      this.onInputValueChange(items[selectedIndex].attributes.name)
      this.setState({ 
        selectedIndex: 0,
        showData:false,
      })
    } 
    // Pressed Down
    else if (event.keyCode === 38) {
      if (selectedIndex > 0) {

        this.setState({ 
          selectedIndex: selectedIndex - 1 
        })
      }
    } 
    // Pressed Up
    else if (event.keyCode === 40) {
      if (selectedIndex + 1 !== items.length) {
        this.setState({ 
          selectedIndex: selectedIndex + 1 
        })
      }
    }
  }

  onItemSelect = name => {
    
    this.setState({
      selected:name,
      inputValue:name,
      showData:false,
      selectedIndex:null,
    })

  }

	getItems = () => {

  	const {
  		inputValue,
  	} = this.state

  	const {
  		apiData,
  	} = this.props

  	return filterData(apiData, inputValue)
	}

  render() {

  	const {
  		inputValue,
      showData,
      selectedIndex,
  	} = this.state

  	const items = this.getItems()
    const showResults = showShouldResults(showData, inputValue, items)
    const className = `autocomplete  ${showResults ? 'has-data' : ''}`

    return (
      <div className={className}>
      	<Input value={inputValue} 
          onChange={this.onInputValueChange}
          placeholder={'Choose Manager'}
          onKeyDown={this.onKeyDown}
        />
        {
          showResults && <Dropdown 
            items={items} 
            onSelect={this.onItemSelect}
            selectedIndex={selectedIndex}
          />
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
