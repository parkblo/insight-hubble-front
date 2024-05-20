import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import NotificationList from "components/HomeItem/NotificationList";
import RemindList from "components/HomeItem/RemindList";
import SummaryList from "components/HomeItem/SummaryList";
import { getMainData } from "api/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = React.useState({
    state: false,
    monthly_posts: 0,
    solved_question: 0,
    unsolved_question: 0,
    postsWithin30days: [],
    postsMoreThan30days: [],
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "false") {
      navigate("/SignIn");
      return;
    }

    getMainData(setData);
  }, []);

  return (
    // TODO: 실제 fetch 받은 데이터 넘겨주기
    <Box>
      <MenuTitle title="Home" />
      <CategoryTitle title="나의 활동 정리" />
      <SummaryList info={data} />
      <CategoryTitle
        title="나의 리마인드"
        subTitle="해결을 기다리는 나의 물음표들"
      />
      <RemindList info={data} />
      {/* <CategoryTitle title="확인하지 않은 알림" />
      <NotificationList /> */}
    </Box>
  );
}

export default Home;
