import React from "react";
import DisplayEpisode from "./DisplayEpisode";
import Button from "./Button";
import useFetchData from "./useFetchData";
import { useParams } from "react-router-dom";

const Show = () => {
  const { api } = useParams();

  const { data, loading, error } = useFetchData(decodeURIComponent(api));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`bg-${decodeURIComponent(api)}`}>
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

export default Show;
