import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";

import SignIn from "./pages/SignIn/SignIn";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "pages/Home/Home";
import Discover from "pages/Discover/Discover";
import MyMarkQuestion from "pages/MyMark/MyMarkQuestion";
import MyMarkExclamation from "pages/MyMark/MyMarkExclamation";
import MyMarkBookmark from "pages/MyMark/MyMarkBookmark";
import MyMarkComment from "pages/MyMark/MyMarkComment";
import Post from "pages/Post/Post";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Pretendard Variable",
    },
    h5: {
      fontSize: "1.0rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1.0rem",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <Grid container>
            <Grid xs={2.5}>
              <Sidebar></Sidebar>
            </Grid>
            <Grid xs={8.5} sx={{ marginLeft: "30px" }}>
              <Routes>
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/mymark/question" element={<MyMarkQuestion />} />
                <Route
                  path="/mymark/exclamation"
                  element={<MyMarkExclamation />}
                />
                <Route path="/mymark/bookmark" element={<MyMarkBookmark />} />
                <Route path="/mymark/comment" element={<MyMarkComment />} />
                <Route path="/post" element={<Post />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
