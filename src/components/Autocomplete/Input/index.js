import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Input extends Component {
  
  render() {

  	const {
  		value,
  		onChange,
      onKeyDown,
      placeholder,
  	} = this.props

    return (
      <div className="form-group autocomplete__input">
				<input 
          className="form-control" 
          type="text" 
          value={value} 
          onChange={event => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

Input.propTypes = {
  value:PropTypes.string,
  placeholder:PropTypes.string,
  onChange:PropTypes.func,
  onKeyDown:PropTypes.func,
}

Input.defaultProps = {
  value:'',
  placeholder:'',
}

export default Input
