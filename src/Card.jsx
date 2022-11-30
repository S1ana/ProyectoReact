import React from "react";
import Foto from "./Avatar";
import Details from "./Details";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">
          {props.name} {props.id}
        </h2>
        <Foto url={props.url} />
      </div>
      <div className="bottom">
        <Details tel={props.tel} email={props.email} />
      </div>
      <Fab onClick={props.deleteCard}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Card;
