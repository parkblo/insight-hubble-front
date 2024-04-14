import React from "react";
import { Grid, Box } from "@mui/material";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import SearchButton from "components/SearchButton/SearchButton";
import PostItem from "components/PostItem/PostItem";

function Discover() {
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
