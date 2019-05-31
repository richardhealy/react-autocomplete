import React, { Component } from 'react'

class Input extends Component {
  
  render() {

  	const {
  		value,
  		onChange,
  	} = this.props

    return (
      <div className="autocomplete__input">
				<input type="text" value={value} onChange={onChange} />
      </div>
    )
  }
}

export default Input
