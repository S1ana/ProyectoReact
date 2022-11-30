import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FormCards(props) {
  return (
    <div>
      <TextField
        onChange={props.nameHandler}
        variant="outlined"
        label="Nombre"
        name="nombre"
        placeholder="Nombre"
      />
      <TextField
        onChange={props.telHandler}
        variant="outlined"
        label="Teléfono"
        name="tel"
        placeholder="Teléfono"
      />
      <TextField
        onChange={props.mailHandler}
        variant="outlined"
        label="Email"
        name="email"
        placeholder="Email"
      />
      <Button onClick={props.addCard} variant="contained">
        Añadir contacto
      </Button>
    </div>
  );
}

export default FormCards;
