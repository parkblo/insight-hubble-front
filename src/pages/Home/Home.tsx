import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import NotificationList from "components/HomeItem/NotificationList";
import RemindList from "components/HomeItem/RemindList";
import SummaryList from "components/HomeItem/SummaryList";
import { getMainData } from "api/api";

function Home() {
  const [data, setData] = React.useState({
    state: false,
    monthly_posts: 0,
    solved_question: 0,
    unsolved_question: 0,
    postsWithin30days: [],
    postsMoreThan30days: [],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getMainData();
      if (response) {
        console.log(response.data); //test
        setData({ state: true, ...response.data });
      }
    }

    fetchData();
  }, []);

  return (
    <Box>
      <MenuTitle title="Home" />
      <CategoryTitle title="나의 활동 정리" />
      <SummaryList />
      <CategoryTitle
        title="나의 리마인드"
        subTitle="해결을 기다리는 나의 물음표들"
      />
      <RemindList />
      <CategoryTitle title="확인하지 않은 알림" />
      <NotificationList />
    </Box>
  );
}

export default Home;
