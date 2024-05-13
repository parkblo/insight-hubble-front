import { Box, Typography } from "@mui/material";

import styles from "./PostItemStyles";
import PostHeader from "./PostHeader";
import PostComment from "./PostComment";
import PostExclamation from "./PostExclamation";
import { Link } from "react-router-dom";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function PostChildren(postObject: any) {
  return (
    <>
      {postObject.item.child.map((childPost: any) => (
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
              {childPost.boardContents}
            </Typography>
            {/* {postObject.item.boardInsight ? (
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
        )} */}
          </Box>
        </Box>
      ))}
    </>
  );
}

export default PostChildren;
