import { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import styles from "./PostItemStyles";

function PostExclamation(postObject: any) {
  // 느낌표 컴포넌트
  const exclamation = (
    <Box>
      <Avatar sx={styles.comment.exclaimation}>
        <PriorityHighIcon />
      </Avatar>
      <Avatar sx={styles.comment.add}>
        <AddIcon />
      </Avatar>
    </Box>
  );

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/post", {
      state: {
        source: postObject.item.title,
        boardParentId: postObject.item.boardParentId,
      },
    }); // TODO: 상태 전달 수정
  };

  return (
    <Box sx={styles.comment}>
      <Box sx={styles.comment.addBox} onClick={handleClick}>
        {exclamation}
        <Typography sx={styles.comment.addLabel}>
          이 궁금증에 대한 본인의 해결 과정을 기록해보세요
        </Typography>
      </Box>
    </Box>
  );
}

export default PostExclamation;
