import React from 'react'
import PropTypes from 'prop-types'

function ComponentWithProps(props) {
  return (
    <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>{props.number} number</p>
        <p>{props.nonexistent}</p>
    </>
  )
}

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

ComponentWithProps.defaultProps = {
    header: "Default Header",
    content: "Default Content",
    number: 100
}

export default ComponentWithProps
