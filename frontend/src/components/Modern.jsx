import React, { useEffect, useState } from 'react'

const Modern = () => {
    const api = 'https://episode-randomizer-8ij4.onrender.com'


    const [friends, setFriends] = useState([])
    
    const getFriends = async () => {
        const response = await fetch(`${api}/getepisodemodernfamily`)
        const data = await response.json()
        console.log(data)
        setFriends(data)
    
    }
    
    useEffect(() => {
        getFriends()
    }
    , [])
    
    
    
    if (friends.Title === undefined) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    const season_epi = Object.values(friends.Season)

    const str = season_epi.toString()
    const season = str.slice(0, str.indexOf('-'));
    const episode = str.slice(str.indexOf('-') + 1);
    
    const title = Object.values(friends.Title)
    
    const summary = Object.values(friends.Summary)
    
    
    const rating = Object.values(friends.Stars)
    
    
    function refreshPage() {
        window.location.reload(false);
      }
      
    
    
    
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
        <div className='bg-modern'>
            <div className="container">
            {displayFriends()}
    
            <button className=' btn btn-light fs-6' onClick={refreshPage} >Generate Next Episode</button>
            </div>
        </div>
      )
}

export default Modern