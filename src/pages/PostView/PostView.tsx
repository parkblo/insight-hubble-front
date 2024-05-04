import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import PostDetails from "components/PostItem/PostDetails";
import styles from "./PostViewStyles";
import dummy from "dummydata/dummy.json";

function PostView(props: any) {
  // data 가져오기
  const { postid } = useParams();
  const post = dummy.find((item: any) => item.post_id == postid);

  return (
    <Box sx={styles.container}>
      <PostDetails item={post} />
    </Box>
  );
}

export default PostView;
