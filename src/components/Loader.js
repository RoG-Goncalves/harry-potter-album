import React from 'react'

export default function Loader(props) {
  return (
    <div className='container'>
      <img src={props.image} alt='I solemnly swear I am up to no good' />
    </div>
  )
}
