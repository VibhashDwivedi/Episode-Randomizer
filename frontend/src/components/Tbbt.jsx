import React, { useEffect, useState } from 'react'

const Tbbt = () => {
    const api = ' http://127.0.0.1:5000'


    const [friends, setFriends] = useState([])
    
    const getFriends = async () => {
        const response = await fetch(`${api}/getepisodetbbt`)
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
            <div className=''>
                <h1 className='pt-5'>{title}</h1>
                <h3>Season {season} Episode {episode}</h3>
                <h4>Rating: {rating}</h4>
                <h5 className='fw-lighter'>{summary}</h5>
            </div>
        )
    }
    
    
      return (
        <div className='bg-tbbt'>
        <div className='container'>
            {displayFriends()}
    
            <button className=' btn btn-light fs-6' onClick={refreshPage} >Generate</button>
            </div>
        </div>
      )
}

export default Tbbt