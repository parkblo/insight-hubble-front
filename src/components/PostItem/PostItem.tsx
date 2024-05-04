import * as React from "react";
import { Typography, Box } from "@mui/material";

import styles from "./PostItemStyles";
import PostHeader from "./PostHeader";
import dummy from "dummydata/dummy.json";
function PostItem(postObject: any) {
  return (
    // TO DO: postObject props에 실제 데이터 받아오기.

    <Box>
      {dummy.map((item: any) => (
        <Box sx={styles.container}>
          <PostHeader item={item} />
          <Box sx={styles.postBox}>
            <Typography sx={styles.postBox.title}>{item.title}</Typography>
            <Typography sx={styles.postBox.content}>{item.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default PostItem;
