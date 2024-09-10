export const api='https://episode-randomizer-8ij4.onrender.com';

export const fetchAndConvertData = async (endpoint) => {
    try {
        const response = await fetch(`${api}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Convert nested objects to arrays
        const season = data.Season ? Object.values(data.Season) : [];
        const episode = data.Episode ? Object.values(data.Episode) : [];
        const title = data.Title ? Object.values(data.Title) : [];
        const summary = data.Summary ? Object.values(data.Summary) : [];
        const rating = data.Stars ? Object.values(data.Stars) : [];

        return { season, episode, title, summary, rating };
    } catch (error) {
        console.error(`Error fetching data from ${api}/${endpoint}:`, error);
        throw error;
    }
};