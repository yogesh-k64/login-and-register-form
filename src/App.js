import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Console from "./components/adminOrUserUI/Console";
import FlowChart from "./components/flowchart/FlowChart";
import MainPage from "./components/MainPage";
const LoggedInPage = React.lazy(() =>
  import("./components/loggedIn/LoggedInPage")
);

function App() {
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  return (
    <React.Fragment>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          {!isLogged && <Route path="*" element={<MainPage />} />}
          {isLogged && <Route path="*" element={<LoggedInPage />} />}
          <Route
            path="/"
            element={<Navigate to={isLogged ? "/welcome" : "/login"} />}
          />
          <Route path="/welcome" element={<LoggedInPage />} />

          <Route path="/flowchart" element={<FlowChart />} />
          <Route path="/console" element={<Console />}/>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
