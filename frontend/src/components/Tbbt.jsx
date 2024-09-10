import React from "react";
import DisplayEpisode from "./DisplayEpisode";
import Button from "./Button";
import useFetchData from "./useFetchData";

const Tbbt = () => {
  const { data, loading, error } = useFetchData(`getepisodetbbt`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-tbbt">
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

export default Tbbt;
