import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./SidebarStyles";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface MenuType {
  name: String;
  path: String;
}

function SidebarItem({
  menu,
  isActive,
}: {
  menu: MenuType;
  isActive: boolean;
}) {
  return isActive === true ? (
    <Box sx={styles.navigatorItem}>
      {menu.name === "홈" ? (
        <HomeIcon sx={styles.navigatorItem.active} />
      ) : null}
      {menu.name === "탐색" ? (
        <ExploreIcon sx={styles.navigatorItem.active} />
      ) : null}
      {menu.name === "나의 마크" ? (
        <BookmarkIcon sx={styles.navigatorItem.active} />
      ) : null}
      <Box sx={{ width: "10px" }}></Box>
      <Typography sx={styles.navigatorItem.active}>{menu.name}</Typography>
    </Box>
  ) : (
    <Box sx={styles.navigatorItem}>
      {menu.name === "홈" ? (
        <HomeIcon sx={styles.navigatorItem.inactive} />
      ) : null}
      {menu.name === "탐색" ? (
        <ExploreIcon sx={styles.navigatorItem.inactive} />
      ) : null}
      {menu.name === "나의 마크" ? (
        <BookmarkIcon sx={styles.navigatorItem.inactive} />
      ) : null}
      <Box sx={{ width: "10px" }}></Box>
      <Typography sx={styles.navigatorItem.inactive}>{menu.name}</Typography>
    </Box>
  );
}

export default SidebarItem;
