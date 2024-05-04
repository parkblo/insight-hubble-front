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

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function PostHeader(postObject: any) {
  // 메뉴 관련 함수
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 메뉴 컴포넌트
  const postMenu = (
    <Box>
      <IconButton
        id="post-menu-button"
        aria-controls={open ? "post-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="post-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "post-menu-button",
        }}
      >
        <MenuItem onClick={handleClose}>Menu1</MenuItem>
        <MenuItem onClick={handleClose}>Menu2</MenuItem>
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
