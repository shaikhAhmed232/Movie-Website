import React from "react"
import DisplayMovie from "../DisplayMovie";
const Movies = ({fetchingUrl}) => {
  return (<div>
      <DisplayMovie fetchingUrl={fetchingUrl} />
  </div>);
};

export default Movies;

