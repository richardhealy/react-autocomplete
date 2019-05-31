import React from 'react'
import './style.css'

const Avatar = ({name, index}) => {
	
	const initials = name
		.split(' ')
		.map(word => word.charAt(0))
		.join('')

	const colorClass = `avatar__color${index || '1'}`

	return (
		<div className={`avatar ${colorClass}`}>
  		<span className="avatar__initials">{initials}</span>
		</div>
	)
}

export default Avatar
