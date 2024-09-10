import React from "react";
import DisplayEpisode from "./DisplayEpisode";
import useFetchData from "./useFetchData";
import Button from "./Button";

const Friends = () => {
  const { data, loading, error } = useFetchData(`getepisode`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-friends">
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

export default Friends;
