import React from 'react'

const DisplayEpisode = (props) => {
  return (
    <div className=''>
    <h1 className='pt-5'>{props.title}</h1>
    <h3>Season {props.season} Episode {props.episode}</h3>
    <h4>Rating: {props.rating}</h4>
    <h5 className='fw-lighter'>{props.summary}</h5>
</div>
  )
}

export default DisplayEpisode