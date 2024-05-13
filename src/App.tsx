import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "pages/Home/Home";
import Discover from "pages/Discover/Discover";
import MyMarkQuestion from "pages/MyMark/MyMarkQuestion";
import MyMarkExclamation from "pages/MyMark/MyMarkExclamation";
import MyMarkBookmark from "pages/MyMark/MyMarkBookmark";
import MyMarkComment from "pages/MyMark/MyMarkComment";
import Post from "pages/Post/Post";
import PostView from "pages/PostView/PostView";
import EditComment from "pages/Post/EditComment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "context/AuthContext";

const MyTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Pretendard Variable",
    },
  },
});

function App() {
  const [auth, setAuth] = React.useState(false);

  // 토큰 만료 체크
  React.useEffect(() => {
    const checkAuthExp = () => {
      const exp = window.localStorage.getItem("exp");
      if (exp) {
        const now = new Date().getTime();
        if (Number(exp) < now) {
          window.localStorage.clear();
          window.localStorage.setItem("auth", "false");
          setAuth(false);
          alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
          window.location.reload();
        }
      }
    };

    setInterval(checkAuthExp, 1000 * 60); // 1분마다 체크
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <ThemeProvider theme={MyTheme}>
          <BrowserRouter>
            <Grid container>
              <Grid xs={2.5}>
                <Sidebar></Sidebar>
              </Grid>
              <Grid xs={8.5} sx={{ marginLeft: "30px" }}>
                <Routes>
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/signUp" element={<SignUp />} />
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
                  <Route path="/view/:postid" element={<PostView />} />
                  <Route path="/edit/" element={<EditComment />} />
                </Routes>
              </Grid>
            </Grid>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
