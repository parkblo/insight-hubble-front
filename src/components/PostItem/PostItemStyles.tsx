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
    marginRight: "5px",
    borderRadius: "15px",
  },
  question: {
    backgroundColor: colors.coralPink,
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
};

export default styles;
