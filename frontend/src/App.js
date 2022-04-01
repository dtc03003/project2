import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary';
import LandingPage from "./components/views/LandingPage/LandingPage";
import MainPage from "./components/views/MainPage/MainPage";
import NotFound from "./components/views/NotFound/NotFound";
import Error from "./components/views/Error/Error";
import LoginPage from "./components/views/LoginPage/LoginPage";
import SignupPage from "./components/views/SignupPage/SignupPage";
import TransferPage from "./components/views/TransferPage/TransferPage";
import FaceAIPage from "./components/views/FaceAIPage/FaceAIPage";
import FaceLoadingPage from "./components/views/FaceAIPage/FaceLoadingPage";

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
          <Route exact path="/faceai" element={<FaceAIPage />} />
          <Route exact path="/faceloading" element={<FaceLoadingPage />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
