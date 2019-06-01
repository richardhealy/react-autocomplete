import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './style.css'
class Dropdown extends Component {
  render() {

  	const {
  		items,
      selectedIndex,
  	} = this.props

    return (
      <div className="autocomplete__dropdown">
				{
					items && items.map((item, index) => (
						<div key={index}>
							<Item 
                item={item} 
                selected={selectedIndex === index}
                onClick={this.props.onSelect}
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
