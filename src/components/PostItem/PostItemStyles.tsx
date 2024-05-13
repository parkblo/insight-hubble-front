import colors from "constants/colors";

const styles = {
  // Box
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    userProfile: {
      display: "flex",
      alignItems: "center",
    },
    options: {
      display: "flex",
      alignItems: "center",
      bookmark: {
        height: "30px",
        backgroundColor: colors.skyBlue,
        opacity: "0.8",
        color: "black",
        borderRadius: "15px",
        "&:hover": {
          backgroundColor: colors.skyBlue,
          opacity: "1",
        },
      },
    },
  },
  postBox: {
    backgroundColor: "white",
    border: `1px solid ${colors.lightGray}`,
    borderRadius: "20px",
    marginTop: "5px",
    padding: "5px 20px 5px 20px",
    "&:hover": {
      border: `1px solid black`,
    },
    title: {
      fontSize: "20px",
      fontWeight: "medium",
    },
    content: {
      color: colors.deepGray,
    },
  },
  // Avatar
  exclaimation: {
    backgroundColor: colors.pastelOrange,
    width: "35px",
    height: "35px",
    marginRight: "10px",
    borderRadius: "15px",
  },
  question: {
    backgroundColor: colors.coralPink,
    width: "35px",
    height: "35px",
    marginRight: "10px",
    borderRadius: "15px",
  },
  commentAvatar: {
    backgroundColor: "gray",
    width: "35px",
    height: "35px",
    marginRight: "10px",
    borderRadius: "15px",
  },
  // Typography
  userName: {
    marginRight: "3px",
  },

  userId: {
    color: colors.gray,
  },
  details: {
    marginTop: "20px",
    marginLeft: "17.5px",
    marginBottom: "20px",
    paddingLeft: "25px",
    borderLeft: `1.5px solid ${colors.blue}`,
    date: {
      color: colors.gray,
      fontSize: "14px",
    },
    title: {
      color: colors.purple,
      fontSize: "24px",
      fontWeight: "medium",
    },
    content: {
      marginTop: "15px",
      fontSize: "16px",
      color: "black",
      whiteSpace: "pre-wrap",
    },
    insight: {
      marginTop: "15px",
      fontSize: "16px",
      color: colors.deepGray,
    },
  },
  comment: {
    marginTop: "20px",
    addBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      opacity: "0.7",
      "&:hover": {
        opacity: "1",
      },
    },
    exclaimation: {
      backgroundColor: colors.pastelOrange,
      width: "35px",
      height: "35px",
      marginRight: "10px",
      borderRadius: "15px",
    },
    commentIcon: {
      backgroundColor: colors.midnightBlue,
      width: "35px",
      height: "35px",
      marginRight: "10px",
      borderRadius: "15px",
    },
    add: {
      backgroundColor: colors.skyBlue,
      marginLeft: "25px",
      marginTop: "-10px",
      width: "15px",
      height: "15px",
      borderRadius: "15px",
    },
    addLabel: {
      color: "black",
      fontSize: "14px",
    },
    textField: {
      marginLeft: "30px",
      marginTop: "5px",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      width: "100%",
    },
    button: {
      marginTop: "5px",
      width: "100px",
    },
  },
  viewContainer: {
    marginBottom: "20px",
  },
};

export default styles;
