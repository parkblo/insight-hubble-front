import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  margin-top: 20px;
  width: 70%;
`;

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #e0e0e0",
    height: "100vh",
  },
  logo: {
    width: "100%",
  },
  profile: {
    marginTop: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "70%",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    bgcolor: deepPurple[500],
    marginLeft: "10%",
    marginTop: "1%",
  },
  profileLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft: 2,
  },
  signInLabel: {
    color: "blue",
  },
  navigator: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    width: "70%",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
  },
  navigatorItem: {
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    marginLeft: "10px",
    fontWeight: "bold",
    active: {
      color: "black",
    },
    inactive: {
      color: "gray",
    },
  },
  postButton: {
    width: "100%",
    borderRadius: "10px",
    bgcolor: "#7059FF",
    color: "white",
    "&:hover": {
      bgcolor: deepPurple[400],
    },
  },
};
