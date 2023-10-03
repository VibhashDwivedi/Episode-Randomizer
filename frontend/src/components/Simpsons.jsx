import React, { useEffect, useState } from 'react'

const Simpsons = () => {
    const api = ' http://127.0.0.1:5000'


    const [friends, setFriends] = useState([])
    
    const getFriends = async () => {
        const response = await fetch(`${api}/getepisodesimpsons`)
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
    
    
    function refreshPage() {
        window.location.reload(false);
      }
      
    
    
    
    const displayFriends = () => {
    
        return (
            <div>
                <h1>{title}</h1>
                <h3>Season {season} Episode {episode}</h3>
                <h4>Rating: {rating}</h4>
                <p>{summary}</p>
            </div>
        )
    }
    
    
      return (
        <div>
    
            {displayFriends()}
    
            <button className=' mx-4 btn btn-light fs-6' onClick={refreshPage} >Generate</button>
        </div>
      )
}

export default Simpsons