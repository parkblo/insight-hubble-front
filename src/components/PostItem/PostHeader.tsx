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

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import {
  addBookmark,
  deleteBookmark,
  deleteComment,
  deletePost,
} from "api/api";

function PostHeader(postObject: any) {
  // 메뉴 관련 함수
  const [bookmarkcnt, setBookmarkcnt] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setBookmarkcnt(postObject.item.bookmarkCount);
    setIsBookmarked(postObject.item.isBookmarked);
  }, [postObject]);

  const handleEdit = () => {
    if (postObject.item.boardType === "comment") {
      navigate("/edit", {
        state: {
          comment_id: postObject.item.boardId,
          content: postObject.item.boardContents,
        },
      });
    } else {
      navigate("/post", {
        state: {
          post_id: postObject.item.boardId,
          category: postObject.item.boardType,
          isVisible: postObject.item.boardSecure,
          title: postObject.item.boardTitle,
          content: postObject.item.boardContents,
          source: postObject.item.boardInsight,
          boardParentId: postObject.item.boardParentId,
          editMode: true,
        },
      });
    }
  };
  const handleDelete = async () => {
    if (postObject.item.boardType === "comment") {
      let result = window.confirm(
        `"${postObject.item.content}" 댓글을 정말 삭제하시겠습니까?`
      );
      if (result) {
        deleteComment(postObject.item.boardId);
      }
      return;
    }

    let result = window.confirm(
      `"${postObject.item.boardTitle}" 게시글을 정말 삭제하시겠습니까?`
    );
    if (result) {
      deletePost(postObject);
    }
  };

  const handleBookmark = async () => {
    if (isBookmarked) {
      await deleteBookmark(
        postObject,
        setBookmarkcnt,
        bookmarkcnt,
        setIsBookmarked
      );
      return;
    } else {
      await addBookmark(
        postObject,
        setBookmarkcnt,
        bookmarkcnt,
        setIsBookmarked
      );
      return;
    }
  };

  // 메뉴 컴포넌트
  const postMenu = (
    <Box>
      <IconButton
        id="post-menu-button"
        aria-controls={open ? postObject.item.boardId : undefined}
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
        <MenuItem
          onClick={handleEdit}
          disabled={
            postObject.item.boardWriterId !== localStorage.getItem("username")
          }
        >
          수정
        </MenuItem>
        <MenuItem
          onClick={handleDelete}
          disabled={
            postObject.item.boardWriterId !== localStorage.getItem("username")
          }
        >
          삭제
        </MenuItem>
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

  // 댓글 컴포넌트
  const comment = (
    <Avatar sx={styles.commentAvatar}>
      <ChatBubbleIcon />
    </Avatar>
  );

  return (
    <Box sx={styles.header}>
      <Box sx={styles.header.userProfile}>
        {postObject.item.boardType === "question" ? question : null}
        {postObject.item.boardType === "exclamation" ? exclamation : null}
        {postObject.item.boardType === "comment" ? comment : null}
        <Typography sx={styles.userName}>
          {postObject.item.boardWriterNickname}
        </Typography>
        <Typography sx={styles.userId}>
          @{postObject.item.boardWriterId}
        </Typography>
      </Box>
      <Box sx={styles.header.options}>
        {postObject.item.boardType === "comment" ? null : (
          <Button sx={styles.header.options.bookmark} onClick={handleBookmark}>
            {isBookmarked ? (
              <BookmarkIcon sx={{ fontSize: "20px" }} />
            ) : (
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            )}
            {bookmarkcnt}
          </Button>
        )}
        {postMenu}
      </Box>
    </Box>
  );
}

export default PostHeader;
