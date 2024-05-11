import React from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import SearchButton from "components/SearchButton/SearchButton";
import PostItem from "components/PostItem/PostItem";
import { getRecentPost, getSearchPost } from "api/api";

function Discover() {
  const [data, setData] = React.useState({ state: "", data: [] }); //TODO: 데이터 변경
  const [searchString, setSearchString] = React.useState("");

  const handleChange = (e: any) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    const response = await getSearchPost(searchString);
  };

  React.useEffect(() => {
    async function fetchRecentPost() {
      const response = await getRecentPost();
      if (response) {
        setData({ state: "최근 게시글", data: response.data });
      }
    }

    fetchRecentPost();
  }, []);

  return (
    <Box>
      <MenuTitle title="Discover" />
      <CategoryTitle title="검색" />
      <Grid container spacing={2}>
        <Grid item xs={7.5}>
          <HubbleTextField value={searchString} onChange={handleChange} />
        </Grid>
        <Grid item xs={1}>
          <SearchButton onClick={handleSubmit} />
        </Grid>
      </Grid>
      <CategoryTitle title={data.state} />
      <PostItem />
    </Box>
  );
}

export default Discover;
