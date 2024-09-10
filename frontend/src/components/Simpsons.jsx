import React from 'react';
import useFetchData from './useFetchData';
import DisplayEpisode from './DisplayEpisode';
import Button from './Button';

const Simpsons = () => {
    
    const { data, loading, error } = useFetchData(`getepisodesimpsons`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='bg-simpsons'>
            <div className="container">
                <DisplayEpisode 
                    title={data.title} 
                    season={data.season} 
                    episode={data.episode} 
                    rating={data.rating} 
                    summary={data.summary} 
                />
                <Button />
            </div>
        </div>
    );
};

export default Simpsons;