import { Box, Typography } from "@mui/material";

import PostItem from "components/PostItem/PostItem";
import styles from "./MarksPostBoxStyles";

function MarksPostBox({ postObject }: { postObject: any }) {
  return (
    <Box sx={styles.container}>
      <PostItem postObject={postObject} />
    </Box>
  );
}

export default MarksPostBox;
