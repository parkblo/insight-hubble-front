import { Button, ButtonProps } from "@mui/material";
import colors from "constants/colors";

function HubbleButton(props: ButtonProps) {
  const style = {
    width: "100%",
    height: "100%",
    borderRadius: "30px",
    backgroundColor: colors.purple,
    opacity: "0.9",
    "&:hover": {
      backgroundColor: colors.purple,
      opacity: "1",
    },
  };

  return <Button sx={style} variant="contained" {...props} />;
}

export default HubbleButton;
