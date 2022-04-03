import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import LandingPage from "./components/views/LandingPage/LandingPage";
import MainPage from "./components/views/MainPage/MainPage";
import NotFound from "./components/views/NotFound/NotFound";
import Error from "./components/views/Error/Error";
import LoginPage from "./components/views/LoginPage/LoginPage";
import SignupPage from "./components/views/SignupPage/SignupPage";
import TransferPage from "./components/views/TransferPage/TransferPage";

import DepositPage from "./components/views/DepositPage/DepositPage";
import DepositKidPage from "./components/views/DepositAgesPage/DepositKidPage";
import DepositAdultPage from "./components/views/DepositAgesPage/DepositAdultPage";
import DepositElderPage from "./components/views/DepositAgesPage/DepositElderPage";

import FaceAIPage from "./components/views/FaceAIPage/FaceAIPage";

function App() {
  return (
    <ErrorBoundary FallbackComponent={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/transfer" element={<TransferPage />} />
          <Route exact path="/deposit" element={<DepositPage />} />
          <Route exact path="/depositkid" element={<DepositKidPage />} />
          <Route exact path="/depositadult" element={<DepositAdultPage />} />
          <Route exact path="/depositelder" element={<DepositElderPage />} />

          <Route exact path="/faceai" element={<FaceAIPage />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
