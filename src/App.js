import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoggedInPage from "./components/loggedIn/LoggedInPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <React.Fragment>
      {/* <MainPage /> */}
      <Routes>
        <Route path='*' element={<MainPage/>}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='welcome' element={<LoggedInPage/> }/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
