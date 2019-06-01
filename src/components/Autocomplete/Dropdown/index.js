import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './style.css'
class Dropdown extends Component {

  constructor(props) {
    super(props)

    this.dropdownRef = React.createRef()
  }


  render() {

  	const {
  		items,
      selectedIndex,
  	} = this.props

    return (
      <div 
        ref={this.dropdownRef}
        className="autocomplete__dropdown"
      >
				{
					items && items.map((item, index) => (
						<div key={index} tabIndex={index}>
							<Item 
                item={item} 
                selected={selectedIndex === index}
                onClick={this.props.onSelect}
                parentRef={this.dropdownRef}
              />
						</div>
					))
				}
      </div>
    )
  }
}

Dropdown.propTypes = {
  items:PropTypes.array.isRequired,
  onSelect:PropTypes.func.isRequired,
  selectedIndex:PropTypes.number
}

Dropdown.defaultProps = {
  items:[]
}

export default Dropdown
