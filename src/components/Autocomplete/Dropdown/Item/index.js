import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../../Avatar'
import {
  generateEmail
} from './index.helpers'

import './style.css'

class Item extends Component {

  render() {

  	const {
  		item 
  	} = this.props

    const {
      name
    } = item.attributes

    // Email missing from data?
    // Used a work around.
    const email = generateEmail(name, 'kinetar.com')

    return (
      <div className="autocomplete__dropdown__item">
        <Avatar name={name} />
        <div className="autocomplete__dropdown__item-details">
          <div className="autocomplete__dropdown__item-names">{ name }</div>
          <div className="autocomplete__dropdown__item-email">{ email }</div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item:PropTypes.object.isRequired
}

Item.defaultProps = {
  item:{}
}

export default Item
