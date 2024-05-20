import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import styles from "./HomeItemStyles";

function SummaryList(info: any) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Paper sx={styles.summary.itemContainer} elevation={3}>
            <Box>
              <AssignmentIcon sx={styles.summary.itemIcon} />
            </Box>
            <Box>
              <Typography sx={styles.summary.itemText}>
                최근 한달간 게시글<br></br>
                {info.info.monthlyBoards}개 작성
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={styles.summary.itemContainer} elevation={3}>
            <Box>
              <TipsAndUpdatesIcon sx={styles.summary.itemIcon} />
            </Box>
            <Box>
              <Typography sx={styles.summary.itemText}>
                내가 해결한 물음표<br></br>
                {info.info.solvedQuestion}개
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={styles.summary.itemContainer} elevation={3}>
            <Box>
              <QuestionMarkIcon sx={styles.summary.itemIcon} />
            </Box>
            <Box>
              <Typography sx={styles.summary.itemText}>
                해결을 기다리는<br></br>나의 물음표는{" "}
                {info.info.unsolvedQuestion}개
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SummaryList;
