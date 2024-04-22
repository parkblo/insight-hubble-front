import { Button, ButtonProps } from "@mui/material";
import colors from "constants/colors";

interface HubbleButtonProps extends ButtonProps {
  selected?: boolean;
}

function HubbleButton({ selected, ...props }: HubbleButtonProps) {
  const style = {
    default: {
      width: "100%",
      height: "100%",
      borderRadius: "30px",
      backgroundColor: colors.purple,
      opacity: "0.9",
      "&:hover": {
        backgroundColor: colors.purple,
        opacity: "1",
      },
    },
    unselected: {
      width: "100%",
      height: "100%",
      borderRadius: "30px",
      backgroundColor: "white",
      color: "gray",
      opacity: "1",
      "&:hover": {
        backgroundColor: "white",
        boxShadow: "10px",
      },
    },
  };

  if (selected === false) {
    return <Button sx={style.unselected} variant="contained" {...props} />;
  } else {
    return <Button sx={style.default} variant="contained" {...props} />;
  }
}

export default HubbleButton;
