import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";

import { ButtonLink, styles } from "./SidebarStyles";
import { menus } from "constants/menus";
import SidebarItem from "./SidebarItem";
import { Typography } from "@mui/material";
import { AuthContext } from "context/AuthContext";

export default function Sidebar() {
  const pathName = useLocation().pathname;
  const { auth, setAuth } = React.useContext(AuthContext);
  const currentUserName = window.localStorage.getItem("username");

  React.useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") {
      setAuth(true);
    }
  });

  return (
    <Box sx={styles.container}>
      {/* logo */}
      <ButtonLink to="/">
        <img src="img/logo.png" alt="insight hubble" style={styles.logo} />
      </ButtonLink>

      {/* profile */}
      <Box sx={styles.profile}>
        <Avatar sx={styles.avatar}></Avatar>
        <Box sx={styles.profileLabel}>
          <Typography sx={{ fontSize: "0.9rem" }}>
            {auth ? `${currentUserName}님, 환영합니다!` : "로그인 해주세요!"}
          </Typography>
          {auth ? (
            <Box
              onClick={() => {
                window.localStorage.clear();
                window.localStorage.setItem("auth", "false");
                setAuth(false);
              }}
              sx={{ cursor: "pointer", color: "blue" }}
            >
              Sign Out
            </Box>
          ) : (
            <Link to="/SignIn" style={{ textDecoration: "none" }}>
              <Typography sx={styles.signInLabel}>Sign In</Typography>
            </Link>
          )}
        </Box>
      </Box>

      {/* navigator */}
      <Box sx={styles.navigator}>
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index} style={{ textDecoration: "none" }}>
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </Link>
          );
        })}
      </Box>

      {/* post button */}
      <ButtonLink to="/post">
        <Button sx={styles.postButton}>
          <CreateIcon />
          <Box sx={{ width: "1px" }}></Box>
          <Typography>게시글 작성하기</Typography>
        </Button>
      </ButtonLink>
    </Box>
  );
}
