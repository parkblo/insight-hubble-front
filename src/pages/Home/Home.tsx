import React from "react";
import { Box } from "@mui/material";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import NotificationList from "components/HomeItem/NotificationList";
import RemindList from "components/HomeItem/RemindList";
import SummaryList from "components/HomeItem/SummaryList";

function Home() {
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
