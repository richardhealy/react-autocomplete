import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../../Avatar'
import {
  generateEmail
} from './index.helpers'

import './style.css'

class Item extends Component {


  constructor(props) {
    super(props)
    this.itemRef = React.createRef()
  }

  shouldComponentUpdate(nextProps) {
    
    if(nextProps.parentRef && nextProps.selected === true) {

      nextProps.parentRef.current.scrollTo(0, this.itemRef.current.offsetTop)
    }

    return true
  }

  // This would be an uuid, but as we don't have 
  // that in the data, this will have to be name for now
  onClick = name => {
    if(typeof this.props.onClick === 'function') {
      this.props.onClick(name)
    }
  }

  render() {

  	const {
  		item,
      selected, 
  	} = this.props

    const {
      name,
    } = item.attributes

    // Email missing from data?
    // Used a work around.
    const email = generateEmail(name, 'kinetar.com')

    return (
      <div 
        ref={this.itemRef}
        className={`autocomplete__dropdown__item  ${selected ? 'selected' : ''}`} 
        onClick={() => this.onClick(name)}
      >
        <Avatar name={name} />
        <div className="autocomplete__dropdown__item-details">
          <div className="autocomplete__dropdown__item-name">{ name }</div>
          <div className="autocomplete__dropdown__item-email">{ email }</div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  item:PropTypes.object.isRequired,
  selected:PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

Item.defaultProps = {
  item:{},
  selected:'',
}

export default Item
