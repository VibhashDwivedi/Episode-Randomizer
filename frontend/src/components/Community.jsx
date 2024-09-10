import React, { useEffect, useState } from 'react'
import Button from './Button'

const Community = () => {

    const api = 'https://episode-randomizer-8ij4.onrender.com'


    const [friends, setFriends] = useState([])
    
    const getFriends = async () => {
        const response = await fetch(`${api}/getepisodecommunity`)
        const data = await response.json()
        console.log(data)
        setFriends(data)
    
    }
    
    useEffect(() => {
        getFriends()
    }
    , [])
    
    
    
    if (friends.Season === undefined) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    const season = Object.values(friends.Season)
    
    const episode = Object.values(friends.Episode)
    
    const title = Object.values(friends.Title)
    
    const summary = Object.values(friends.Summary)
    
    
    const rating = Object.values(friends.Stars)
    
    
   
    
    
    
    const displayFriends = () => {
    
        return (
            <div className=''>
                <h1 className='pt-5'>{title}</h1>
                <h3>Season {season} Episode {episode}</h3>
                <h4>Rating: {rating}</h4>
                <h5 className='fw-lighter'>{summary}</h5>
            </div>
        )
    }
    
    
      return (
        <div className='bg-community '>
    <div className="container">
            {displayFriends()}
    
           <Button />
            </div>
        </div>
      )

  
}

export default Community