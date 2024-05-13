import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./HomeItemStyles";

// TODO: 포스트 테이블 정의 변경에 따라서 수정이 필요할 수 있음.
interface postDataType {
  post_id: number;
  title: string;
  created_at: string;
}

const nonstyle = {
  color: "inherit",
  textDecoration: "none",
};

function RemindList() {
  const dummywithin30days = [
    {
      post_id: 1,
      post_title: "물리학과 우주에 관한 신기한 현상들에 대한 질문",
    },
    {
      post_id: 2,
      post_title: "과학과 기술의 미래 전망",
    },
    {
      post_id: 3,
      post_title: "인공 지능의 윤리적 문제와 발전 가능성",
    },
  ];

  const dummyover30days = [
    {
      post_id: 4,
      post_title: "역사적 사건의 실제 원인과 결과에 대한 해석",
    },
    {
      post_id: 5,
      post_title: "미래의 사회적 변화와 문화적 영향",
    },
    {
      post_id: 6,
      post_title: "심리학적 특성과 인간 행동의 복잡성",
    },
  ];

  return (
    <Box>
      <Typography sx={styles.remind.dateText}>최근 한 달 이내</Typography>
      {dummywithin30days.map((item: any) => (
        <Link to={`/view/${item.post_id}`} style={nonstyle}>
          <Box key={item.post_id} sx={styles.remind.itemContainer}>
            {item.post_title}
          </Box>
        </Link>
      ))}
      <Box sx={{ height: "20px" }}></Box>
      <Typography sx={styles.remind.dateText}>한 달보다 오래된</Typography>
      {dummyover30days.map((item: any) => (
        <Box key={item.post_id} sx={styles.remind.itemContainer}>
          {item.post_title}
        </Box>
      ))}
    </Box>
  );
}

export default RemindList;
