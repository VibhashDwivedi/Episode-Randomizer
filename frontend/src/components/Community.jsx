import React from "react";
import Button from "./Button";
import useFetchData from "./useFetchData";
import DisplayEpisode from "./DisplayEpisode";

const Community = () => {
  const { data, loading, error } = useFetchData(`getepisodecommunity`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-community">
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

export default Community;
