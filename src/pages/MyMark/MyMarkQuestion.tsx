import { Box } from "@mui/material";

import MenuTitle from "components/MenuTitle/MenuTitle";
import MarksSidebar from "components/MarksSidebar/MarksSidebar";
import MarksPostBox from "components/MarksPostBox/MarksPostBox";
import styles from "./MyMarkStyles";
import React from "react";
import { getMyPage } from "api/api";

function MyMarkQuestion() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getMyPage("questions", setData);
  }, []);

  return (
    <Box>
      <MenuTitle title="My Marks" />
      <Box sx={styles.container}>
        <Box>
          <MarksSidebar />
        </Box>
        <Box>
          <MarksPostBox postObject={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default MyMarkQuestion;
