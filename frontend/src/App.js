import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {ErrorBoundary} from 'react-error-boundary';
import LandingPage from "./components/views/LandingPage/LandingPage";
import MainPage from "./components/views/MainPage/MainPage";
import NotFound from "./components/views/NotFound/NotFound";
import Error from "./components/views/Error/Error";
import LoginPage from "./components/views/LoginPage/LoginPage";
import SignupPage from "./components/views/SignupPage/SignupPage";
import CheckBalancePage from "./components/views/CheckBalancePage/CheckBalance";

import Transferpage from './components/views/TransferPage/TransferPage';
import LoadingPage from "./components/views/LandingPage/LoadingPage";
import ResultPage from "./components/views/LandingPage/ResultPage"

import DepositPage from "./components/views/DepositPage/DepositPage";
import DepositCarousel from "./components/views/DepositPage/DepositCarousel";

import FaceAIPage from "./components/views/FaceAIPage/FaceAIPage";
import FaceLoadingPage from "./components/views/FaceAIPage/FaceLoadingPage";


function App() {
  return (
    <ErrorBoundary FallbackComponent={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/loading" element={<LoadingPage />} />
          <Route exact path="/result" element={<ResultPage />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/checkbalance" element={<CheckBalancePage />} />
          <Route exact path="/faceai" element={<FaceAIPage />} />
          <Route exact path="/transfer" element={<Transferpage />} />

          <Route exact path="/deposit" element={<DepositPage />} />
          <Route exact path="/depositcarousel" element={<DepositCarousel />} />
          

          <Route exact path="/faceai" element={<FaceAIPage />} />
          <Route exact path="/faceloading" element={<FaceLoadingPage />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
