import { Box, Typography } from "@mui/material";

import PostItem from "components/PostItem/PostItem";
import styles from "./MarksPostBoxStyles";

function MarksPostBox() {
  return (
    <Box sx={styles.container}>
      <PostItem />
    </Box>
  );
}

export default MarksPostBox;
