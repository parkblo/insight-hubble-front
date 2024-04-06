import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import SignIn from './pages/SignIn/SignIn';
import Sidebar from './components/Sidebar/Sidebar';
import Home from 'pages/Home/Home';
import Discover from 'pages/Discover/Discover';
import MyMark from 'pages/MyMark/MyMark';
import Post from 'pages/Post/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container>
          <Grid xs={2.5}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid xs={8.5} sx={{marginLeft:"30px"}}>
            <Routes>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/mymark" element={<MyMark />} />
              <Route path="/post" element={<Post />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
