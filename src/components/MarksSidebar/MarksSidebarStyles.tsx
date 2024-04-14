import colors from "constants/colors";
import React from "react";

interface ButtonStyle {
  common: React.CSSProperties;
  question: React.CSSProperties;
  exclamation: React.CSSProperties;
  bookmark: React.CSSProperties;
  comment: React.CSSProperties;
  [key: string]: React.CSSProperties;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    common: {
      color: "white",
      opacity: 0.8,
      borderRadius: "10px 0px 0px 10px",
      height: "50px",
      width: "100%",
      "&:hover": {
        opacity: 1.0,
      },
    },
    question: {
      backgroundColor: colors.coralPink,
      "&:hover": {
        backgroundColor: colors.coralPink,
      },
    },
    exclamation: {
      backgroundColor: colors.pastelOrange,
      "&:hover": {
        backgroundColor: colors.pastelOrange,
      },
    },
    bookmark: {
      backgroundColor: colors.skyBlue,
      "&:hover": {
        backgroundColor: colors.skyBlue,
      },
    },
    comment: {
      backgroundColor: "gray",
      "&:hover": {
        backgroundColor: "gray",
      },
    },
    active: {
      opacity: 1.0,
    },
  } as ButtonStyle,
  icon: {
    width: "20px",
    height: "20px",
  },
};

export default styles;
