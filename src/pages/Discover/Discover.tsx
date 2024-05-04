import React from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

import MenuTitle from "components/MenuTitle/MenuTitle";
import CategoryTitle from "components/MenuTitle/CategoryTitle";
import HubbleTextField from "components/HubbleTextField/HubbleTextField";
import SearchButton from "components/SearchButton/SearchButton";
import PostItem from "components/PostItem/PostItem";

function Discover() {
  const [data, setData] = React.useState({ state: "", data: [] }); //TODO: 데이터 변경
  const [searchString, setSearchString] = React.useState("");

  const getRecentPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/board");
      // 성공 로직
      setData({ state: "최근 게시글", ...response.data });
    } catch (error: any) {
      // 실패 로직
      console.log(error);
    }
  };
  const getSearchPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/?"); //TODO: URL 변경
      // 성공 로직
      setData({ state: "검색 결과", ...response.data });
    } catch (error: any) {
      // 실패 로직
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e: any) => {
    axios
      .post("http://localhost:3000/?", searchString) // TODO: URL 변경
      .then((respone: any) => {
        getSearchPost();
      })
      .catch((error: any) => {
        console.log(error);
        alert("요청이 실패했습니다. 다시 시도해주세요.");
      });
  };

  React.useEffect(() => {
    getRecentPost();
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
