import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {

  return (
    <div className = "navbar">
     <h2>{title} </h2> 
      
    </div>
  )
}
Navbar.defaultProps = {

title:"Daily Help"
}

Navbar.propTypes = {

title:PropTypes.string.isRequired
}


export default Navbar


 