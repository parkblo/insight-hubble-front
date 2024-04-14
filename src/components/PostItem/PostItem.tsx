import * as React from "react";
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styles from "./PostItemStyles";

interface typePostObject {
  userName: string;
  userId: string;
  bookmarkCount: number;
  title: string;
  content: string;
}

function PostItem() {
  // 메뉴 관련 함수
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const dummy = [
    {
      post_id: 1,
      post_type: "question",
      user_name: "카타르시스",
      user_id: "@pitachu0410",
      bookmark_cnt: 172,
      title: "우주에 대한 궁금증",
      content:
        "안녕하세요! 우주에 관심이 생겨 몇 가지 궁금증이 생겼습니다. 첫째, 우주의 확장은 어떻게 이루어지고 있는 걸까요? 우주가 어떻게 확장되고 있는지 그 원리에 대해 알고 싶습니다. 둘째, 우주의 구조는 어떻게 되어 있나요? 우리가 알고 있는 우주의 구조와 별들, 은하, 그리고 큰 구조들이 형성되는 과정에 대해 궁금합니다.",
    },
    {
      post_id: 2,
      post_type: "exclamation",
      user_name: "Spring바람휘날리며",
      user_id: "@kimcoding",
      bookmark_cnt: 45,
      title: "JVM(Java Virtual Machine)에 대한 개요",
      content:
        "JVM(Java Virtual Machine)은 자바 프로그램을 실행하기 위한 가상 머신으로, 자바 프로그램을 플랫폼과 독립적으로 실행할 수 있도록 해줍니다. JVM은 자바 어플리케이션의 실행 환경을 제공하며 자바 바이트 코드를 실제 기계 코드로 변환하여 실행합니다. 아래는 JVM에 대한 상세한 정보입니다.",
    },
    {
      post_id: 3,
      post_type: "question",
      user_name: "synTheSize",
      user_id: "@warprecordd7",
      bookmark_cnt: 32,
      title: "모듈러 신디사이저 사용법에 대한 질문",
      content:
        "안녕하세요! 신디사이저 모듈러를 사용하는 방법에 대해 궁금증이 있습니다.첫째, 신디사이저 모듈러란 무엇인가요? 모듈러 신디사이저는 일반적인 신디사이저와 어떻게 다른지, 주요 특징은 무엇인지 알고 싶습니다. 둘째, 모듈러 신디사이저의 구성 요소는 어떻게 되나요? 모듈러 신디사이저는 어떤 모듈들로 구성되어 있고, 각 모듈의 역할과 기능은 무엇인지 궁금합니다.",
    },
  ];

  return (
    <Box>
      {dummy.map((item: any) => (
        <Box sx={styles.container}>
          {/* // 상단 부분임다. 요거 포스트 헤더.tsx로 분리해야할듯. justify-content:space-between 사용 */}
          <Box sx={styles.header}>
            <Box sx={styles.header.userProfile}>
              {item.post_type === "question" ? question : null}
              {item.post_type === "exclamation" ? exclamation : null}
              <Typography sx={styles.userName}>{item.user_name}</Typography>
              <Typography sx={styles.userId}>{item.user_id}</Typography>
            </Box>
            <Box sx={styles.header.options}>
              <Button sx={styles.header.options.bookmark}>
                <BookmarkIcon sx={{ fontSize: "20px" }} /> {item.bookmark_cnt}
              </Button>
              {postMenu}
            </Box>
          </Box>
          <Box sx={styles.postBox}>
            <Typography sx={styles.postBox.title}>{item.title}</Typography>
            <Typography sx={styles.postBox.content}>{item.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default PostItem;
