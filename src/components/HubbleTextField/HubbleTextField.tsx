import React from "react";
import { TextField } from "@mui/material";

function HubbleTextField() {
  const style = {
    width: "100%",
    ".MuiOutlinedInput-root": {
      borderRadius: "30px",
      paddingLeft: "10px",
      height: "40px",
    },
  };

  return <TextField sx={style} />;
}

export default HubbleTextField;
