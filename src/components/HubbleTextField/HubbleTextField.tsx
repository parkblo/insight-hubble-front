import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

function HubbleTextField(props: TextFieldProps) {
  const style = {
    width: "100%",
    ".MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "10px",
      height: "40px",
    },
  };

  return <TextField sx={style} {...props} />;
}

export default HubbleTextField;
