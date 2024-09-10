import React from "react";
import Button from "./Button";
import DisplayEpisode from "./DisplayEpisode";
import useFetchData from "./useFetchData";

const B99 = () => {
  const { data, loading, error } = useFetchData(`getepisodebrooklyn99`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-b99">
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

export default B99;
