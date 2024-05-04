import * as React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import styles from "./PostItemStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { isVisible } from "@testing-library/user-event/dist/utils";

function PostHeader(postObject: any) {
  // 메뉴 관련 함수
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    navigate("/post", {
      state: {
        post_id: postObject.item.post_id,
        category: postObject.item.post_type,
        isVisible: postObject.item.isVisible,
        title: postObject.item.title,
        content: postObject.item.content,
        source: postObject.item.boardInsight,
        editMode: true,
      },
    });
  };
  const handleDelete = () => {
    let result = window.confirm(
      `"${postObject.item.title}" 게시글을 정말 삭제하시겠습니까?`
    );
    if (result) {
      axios
        .delete(`/api/post/${postObject.item.post_id}`)
        .then(() => {
          window.alert("정상적으로 삭제되었습니다.");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          window.alert("삭제 중 오류가 발생했습니다.");
        });
    }
  };

  // 메뉴 컴포넌트
  const postMenu = (
    <Box>
      <IconButton
        id="post-menu-button"
        aria-controls={open ? postObject.item.post_id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="1"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "post-menu-button",
        }}
      >
        <MenuItem onClick={handleEdit}>수정</MenuItem>
        <MenuItem onClick={handleDelete}>삭제</MenuItem>
      </Menu>
    </Box>
  );

  // 느낌표 컴포넌트
  const exclamation = (
    <Avatar sx={styles.exclaimation}>
      <PriorityHighIcon />
    </Avatar>
  );

  // 물음표 컴포넌트
  const question = (
    <Avatar sx={styles.question}>
      <QuestionMarkIcon />
    </Avatar>
  );

  return (
    <Box sx={styles.header}>
      <Box sx={styles.header.userProfile}>
        {postObject.item.post_type === "question" ? question : null}
        {postObject.item.post_type === "exclamation" ? exclamation : null}
        <Typography sx={styles.userName}>
          {postObject.item.user_name}
        </Typography>
        <Typography sx={styles.userId}>{postObject.item.user_id}</Typography>
      </Box>
      <Box sx={styles.header.options}>
        <Button sx={styles.header.options.bookmark}>
          <BookmarkIcon sx={{ fontSize: "20px" }} />{" "}
          {postObject.item.bookmark_cnt}
        </Button>
        {postMenu}
      </Box>
    </Box>
  );
}

export default PostHeader;
