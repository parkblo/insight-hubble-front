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

function PostDetails(postObject: any) {
  return (
    <Box>
      <PostHeader item={postObject.item} />
      <Box sx={styles.details}>
        <Typography sx={styles.details.date}>
          {formatDate(postObject.item.created_at)}
        </Typography>
        <Typography sx={styles.details.title}>
          {postObject.item.title}
        </Typography>
        <Typography sx={styles.details.content}>
          {postObject.item.content}
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
      {/* TODO: 추가적으로 이미 존재하는 코멘트 추가 필요 */}
      <PostExclamation item={postObject.item} />
      <PostComment item={postObject.item} />
    </Box>
  );
}

export default PostDetails;
