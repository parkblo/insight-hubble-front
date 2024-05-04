import React from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import SearchButton from "components/SearchButton/SearchButton";
import PostItem from "components/PostItem/PostItem";

function Discover() {
  const [data, setData] = React.useState({});

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/board");
      // 성공 로직
      setData(response.data);
    } catch (error: any) {
      // 실패 로직
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <MenuTitle title="Discover" />
      <CategoryTitle title="검색" />
      <Grid container spacing={2}>
        <Grid item xs={7.5}>
          <HubbleTextField />
        </Grid>
        <Grid item xs={1}>
          <SearchButton />
        </Grid>
      </Grid>
      <CategoryTitle title="최근 게시글" />
      <PostItem />
    </Box>
  );
}

export default Discover;
