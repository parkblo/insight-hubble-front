import { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddIcon from "@mui/icons-material/Add";

import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import HubbleButton from "components/HubbleButton/HubbleButton";
import styles from "./PostItemStyles";

function PostComment(postObject: any) {
  const [addMode, setAddMode] = useState(false);
  const [comment, setComment] = useState("");

  // 느낌표 컴포넌트
  const exclamation = (
    <Box>
      <Avatar sx={styles.comment.commentIcon}>
        <ModeCommentIcon />
      </Avatar>
      <Avatar sx={styles.comment.add}>
        <AddIcon />
      </Avatar>
    </Box>
  );

  const handleClick = () => {
    if (addMode) {
      setAddMode(false);
    } else {
      setAddMode(true);
    }
  };

  const handleChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <Box sx={styles.comment}>
      <Box sx={styles.comment.addBox} onClick={handleClick}>
        {exclamation}
        <Typography sx={styles.comment.addLabel}>
          이 궁금증에 대한 본인의 의견을 남겨보세요
        </Typography>
      </Box>
      <Box sx={styles.comment.textField}>
        {addMode && (
          <Box>
            <HubbleTextField
              multiline
              name="inputComment"
              value={comment}
              onChange={handleChange}
            />
            <Box sx={styles.comment.buttonContainer}>
              <Box sx={styles.comment.button}>
                <HubbleButton onClick={handleSubmit}>등록</HubbleButton>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PostComment;
