import React from "react";
import './movie.css'
import Movie from "./movie";
// import classes from "./Movies.module.css";

const Movies = ({ list }) => {
  let medicines = <h3>Loading...</h3>;

  if (list) {
    medicines = list.map((m, i) => <Movie key={i} item={m} />);
    } 

  return (
    <div>
      <div className="medicine__container">{medicines}</div>
    </div>
  );
  };

export default Movies;