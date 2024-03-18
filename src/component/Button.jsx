import React from 'react'

function Button({name,type}) {
  return (
    <button className={`bg-${type}`}>{name}</button>
  )
}

export default Button