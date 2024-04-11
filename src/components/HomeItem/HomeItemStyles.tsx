const styles = {
  summary: {
    itemContainer: {
      borderRadius: "20px",
      padding: "15px",
      marginRight: "15px",
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        boxShadow: 6,
      },
    },
    itemIcon: {
      fontSize: "50px",
      color: "#7059FF",
    },
    itemText: {
      textAlign: "center",
      fontWeight: "bold",
    },
  },
  remind: {
    container: {
      marginBottom: "20px",
    },
    dateText: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    itemContainer: {
      border: "1px solid #808080",
      padding: "7px",
      paddingLeft: "20px",
      fontSize: "20px",
      fontWeight: "medium",
      borderRadius: "20px",
      marginBottom: "10px",
      width: "80%",
      "&:hover": {
        backgroundColor: "#B8ACFF",
      },
    },
  },
  notification: {
    container: {
      border: "1px solid #808080",
      padding: "7px",
      paddingLeft: "20px",
      fontSize: "20px",
      fontWeight: "medium",
      borderRadius: "20px",
      marginBottom: "10px",
      width: "80%",
    },
  },
};

export default styles;
