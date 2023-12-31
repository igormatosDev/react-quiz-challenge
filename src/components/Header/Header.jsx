import React from 'react'
import './Header.css'
const Header = ({title, subtitle}) => {
  return (
    <h1 className="header">
      {title}
      {subtitle && <small>{subtitle}</small>}
    </h1>
  )
}

export default Header