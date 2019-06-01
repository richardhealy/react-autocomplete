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

  onEscapePress = () => {
    this.setState({ 
      selectedIndex: 0,
      showData:false,
      inputValue:'',
    })
  }

  onEnterPress = (showData, items, selectedIndex) => {

    if(
      showData && // Dropdown is showing
      typeof items[selectedIndex] === 'object' // Item exists
    ) {
      
      this.onItemSelect(items[selectedIndex].attributes.name)

    }
  }

  onDownPress = selectedIndex => {

    if (selectedIndex > 0) {
        this.setState({ 
          selectedIndex: selectedIndex - 1 
        })
      }
  }

  onUpPress = (selectedIndex, items) => {
    if (selectedIndex + 1 !== items.length) {
      this.setState({ 
        selectedIndex: selectedIndex + 1 
      })
    }
  }

  onKeyDown = event => {
    
    const { 
      selectedIndex,
      showData,
    } = this.state

    // If data not showing
    if(!showData) {
      return false
    }

    const items = this.getItems()

    switch(event.keyCode) {
      case 13:
        this.onEnterPress(showData, items, selectedIndex)
        break
      case 38:
        this.onDownPress(selectedIndex)
        break
      case 40: 
        this.onUpPress(selectedIndex, items)
        break
      case 27:
        this.onEscapePress()
        break
      default:
        // Appease the compiler 
        break
    }
  }

  onItemSelect = value => {
    
    this.setState({
      selected:value,
      inputValue:value,
      showData:false,
      selectedIndex:null,
    })

    if(typeof this.props.onChange === 'function') {
      this.props.onChange(value)
    }

  }

	getItems = () => {

  	const {
  		inputValue,
  	} = this.state

  	const {
  		data,
  	} = this.props

  	return filterData(data, inputValue)
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
  data:PropTypes.array.isRequired,
  onChange:PropTypes.func,
}

Autocomplete.defaultProps = {
  data:[],
}

export default Autocomplete
