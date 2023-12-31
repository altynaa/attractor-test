import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./features/users/Login";
import Redirect from "./features/users/Redirect";
import Profile from "./features/users/Profile";
import ProfileForm from "./features/users/components/ProfileForm";
import AppToolBar from "./components/UI/AppToolBar";
import {Container, CssBaseline} from "@mui/material";
import Repositories from "./features/repositories/Repositories";
import FindUsers from "./features/users/FindUsers";

function App() {
  return (
      <>
          <CssBaseline/>
          <header>
              <AppToolBar/>
          </header>
          <main>
              <Container maxWidth="xl">
                  <Routes>
                      <Route path="/" element={<Login/>}/>
                      <Route path="/redirect" element={<Redirect/>}/>
                      <Route path="/profile" element={<Profile/>}/>
                      <Route path="/profileForm" element={<ProfileForm/>}/>
                      <Route path="/repositories" element={<Repositories/>}/>
                      <Route path="/findUsers" element={<FindUsers/>}/>
                      <Route path="*" element={<h2>Page not found</h2>}/>
                  </Routes>
              </Container>
          </main>
      </>
  );
}

export default App;
