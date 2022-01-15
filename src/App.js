import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LoggedInPage from "./components/loggedIn/LoggedInPage";
import MainPage from "./components/MainPage";

function App() {
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  return (
    <React.Fragment>
      <Routes>
        {!isLogged && <Route path="*" element={<MainPage />} />}
        {isLogged && <Route path="*" element={<LoggedInPage />} />}
        <Route
          path="/"
          element={<Navigate to={isLogged ? "/welcome" : "/login"} />}
        />

        <Route path="/welcome" element={<LoggedInPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
