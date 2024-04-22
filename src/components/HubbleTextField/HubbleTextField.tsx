import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

function HubbleTextField(props: TextFieldProps) {
  const style = {
    width: "100%",
    paddingLeft: "10px",
    ".MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    ".MuiInputBase-input": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  };

  return <TextField sx={style} {...props} />;
}

export default HubbleTextField;
