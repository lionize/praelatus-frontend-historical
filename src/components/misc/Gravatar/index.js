import React from 'react'
import md5 from 'crypto-js/md5'

const Gravatar = ({ email }) => {
  const hash = md5(email)
  const src = `https://www.gravatar.com/avatar/${hash}`

  return (
    <img 
      src={src} 
      className="gravatar"
    />
  )
}

export default Gravatar
