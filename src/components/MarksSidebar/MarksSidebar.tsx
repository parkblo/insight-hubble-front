import { Box, Button } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import styles from "./MarksSidebarStyles";
import { Link, useLocation } from "react-router-dom";

function MarksSidebar() {
  const pathName = useLocation().pathname;

  const menus = [
    { path: "/mymark/question", name: "question" },
    { path: "/mymark/exclamation", name: "exclamation" },
    { path: "/mymark/bookmark", name: "bookmark" },
    { path: "/mymark/comment", name: "comment" },
  ];
  return (
    <Box sx={styles.container}>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <Button
              sx={[
                styles.button.common,
                styles.button[menu.name],
                pathName === menu.path && styles.button.active,
              ]}
            >
              {menu.name === "question" ? (
                <QuestionMarkIcon sx={styles.icon} />
              ) : null}
              {menu.name === "exclamation" ? (
                <PriorityHighIcon sx={styles.icon} />
              ) : null}
              {menu.name === "bookmark" ? (
                <BookmarkIcon sx={styles.icon} />
              ) : null}
              {menu.name === "comment" ? (
                <ChatBubbleIcon sx={styles.icon} />
              ) : null}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
}

export default MarksSidebar;
