import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

class Dropdown extends Component {
  render() {

  	const {
  		items
  	} = this.props

    return (
      <div className="autocomplete__dropdown">
				{
					items && items.map((item, key) => (
						<div key={key}>
							<Item item={item} />
						</div>
					))
				}
      </div>
    )
  }
}

Dropdown.propTypes = {
  items:PropTypes.array.isRequired
}

Dropdown.defaultProps = {
  items:[]
}

export default Dropdown
