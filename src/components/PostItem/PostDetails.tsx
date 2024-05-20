import { Box, Typography } from "@mui/material";

import styles from "./PostItemStyles";
import PostHeader from "./PostHeader";
import PostComment from "./PostComment";
import PostExclamation from "./PostExclamation";
import PostChildren from "./PostChildren";
import { Link } from "react-router-dom";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

function PostDetails(postObject: any) {
  return (
    <Box>
      <PostHeader item={postObject.item} />
      <Box sx={styles.details}>
        <Typography sx={styles.details.date}>
          {formatDate(postObject.item.createAt)}
        </Typography>
        <Typography sx={styles.details.title}>
          {postObject.item.boardTitle}
        </Typography>
        <Typography sx={styles.details.content}>
          {postObject.item.boardContents}
        </Typography>
        {postObject.item.boardParentId !== -1 ? (
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
          <Typography sx={styles.details.insight}>
            {"글의 영감: "}
            {postObject.item.boardInsight !== null
              ? postObject.item.boardInsight
              : "없음"}
          </Typography>
        )}
      </Box>
      <PostChildren item={postObject.item} />
      <PostExclamation item={postObject.item} />
      <PostComment item={postObject.item} />
    </Box>
  );
}

export default PostDetails;
