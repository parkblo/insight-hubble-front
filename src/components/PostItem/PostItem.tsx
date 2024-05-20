import * as React from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./PostItemStyles";
import PostHeader from "./PostHeader";
import dummy from "dummydata/dummy.json";
function PostItem(postObject: any) {
  const nonstyle = {
    color: "inherit",
    textDecoration: "none",
  };

  React.useEffect(() => {
    console.log(postObject);
  }, [postObject]);

  return (
    // TO DO: postObject props에 실제 데이터 받아오기.

    <Box>
      {postObject.postObject.map((item: any) => (
        <Box sx={styles.container}>
          <PostHeader item={item} />
          <Link
            style={nonstyle}
            to={`/view/${item.boardId}`}
            key={item.boardId}
          >
            <Box sx={styles.postBox}>
              <Typography sx={styles.postBox.title}>
                {item.boardTitle}
              </Typography>
              <Typography sx={styles.postBox.content}>
                {item.boardType === "comment"
                  ? item.content
                  : item.boardContents}
              </Typography>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default PostItem;
