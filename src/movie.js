import React from "react";
import './movie.css';
import {Button} from '@material-ui/core';

const MovieCard = props => {
  return (
    <div className="medicine__det">
      <h3><div className="medicine__head">Generic Name:</div> {props.item.generic_name}</h3>
      <h3><div className="medicine__head">Therapeutic Category: </div>{props.item.therapy}</h3>
      <h3><div className="medicine__head">Uses: </div>{props.item.uses}</h3>
      <div className="cost"><b>Price: </b> Rs.{props.item.mrp} <b> Units:</b>{props.item.units}</div>
      <Button>View more details...</Button>
    </div>
  );
};

export default MovieCard;