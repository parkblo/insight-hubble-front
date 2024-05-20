import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import PostDetails from "components/PostItem/PostDetails";
import styles from "./PostViewStyles";
import dummy from "dummydata/dummy.json";
import React from "react";
import { getPost } from "api/api";

function PostView() {
  // data 가져오기
  const { postid } = useParams();
  const post = dummy.find((item: any) => item.boardId == postid);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    getPost(postid, setData);

    console.log(data);
  }, [postid]);

  return (
    <Box sx={styles.container}>
      <PostDetails item={data} />
    </Box>
  );
}

export default PostView;
