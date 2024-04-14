import { Box } from "@mui/material";

import MenuTitle from "components/MenuTitle/MenuTitle";
import MarksSidebar from "components/MarksSidebar/MarksSidebar";
import MarksPostBox from "components/MarksPostBox/MarksPostBox";
import styles from "./MyMarkStyles";

function MyMarkExclamation() {
  return (
    <Box>
      <MenuTitle title="My Marks" />
      <Box sx={styles.container}>
        <Box>
          <MarksSidebar />
        </Box>
        <Box>
          <MarksPostBox />
        </Box>
      </Box>
    </Box>
  );
}

export default MyMarkExclamation;
