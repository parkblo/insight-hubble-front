import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import colors from "constants/colors";

function SearchButton(props: ButtonProps) {
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

  return (
    <Button sx={style} variant="contained" {...props}>
      <SearchIcon />
    </Button>
  );
}

export default SearchButton;
