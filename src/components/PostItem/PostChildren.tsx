import { Box, Typography } from "@mui/material";

import styles from "./PostItemStyles";
import PostHeader from "./PostHeader";
import PostComment from "./PostComment";
import PostExclamation from "./PostExclamation";
import { Link } from "react-router-dom";
import React from "react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function PostChildren(postObject: any) {
  React.useEffect(() => {
    console.log(postObject.item.child);
  });

  return (
    <>
      {postObject.item.child !== undefined &&
        postObject.item.child.map((childPost: any) => (
          <Box sx={styles.viewContainer}>
            <PostHeader item={childPost} />
            <Box sx={styles.details}>
              {/* <Typography sx={styles.details.date}>
          {formatDate(postObject.item.created_at)}
        </Typography> */}
              <Typography sx={styles.details.title}>
                {childPost.boardTitle}
              </Typography>
              <Typography sx={styles.details.content}>
                {childPost.boardType === "comment"
                  ? childPost.content
                  : childPost.boardContents}
              </Typography>
              {postObject.item.boardInsight ? (
                <Typography sx={styles.details.insight}>
                  {"글의 영감: "}
                  <Link
                    to={`/view/${postObject.item.boardParentId}`}
                    style={{ color: "inherit" }}
                  >
                    {postObject.item.boardInsight}
                  </Link>
                </Typography>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        ))}
    </>
  );
}

export default PostChildren;
