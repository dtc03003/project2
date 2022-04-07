import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Test from "./components/views/LandingPage/Test";
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
import DepositKidPage from "./components/views/DepositAgesPage/DepositKidPage";
import DepositAdultPage from "./components/views/DepositAgesPage/DepositAdultPage";
import DepositElderPage from "./components/views/DepositAgesPage/DepositElderPage";

import FaceAIPage from "./components/views/FaceAIPage/FaceAIPage";
import EventAgePage from "./components/views/FaceAIPage/EventAgePage";
import FaceLoadingPage from "./components/views/FaceAIPage/FaceLoadingPage";

import PrivateRoute from './utils/PrivateRoute';



function App() {
  return (
    <ErrorBoundary FallbackComponent={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/loading" element={<LoadingPage />} />
          <Route exact path="/result" element={<ResultPage />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />

          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/checkbalance" element={<CheckBalancePage />} />
            <Route exact path="/transfer" element={<Transferpage />} />
          </Route>

          <Route exact path="/faceai" element={<FaceAIPage />} />

          <Route exact path="/deposit" element={<DepositPage />} />
          <Route exact path="/depositkid" element={<DepositKidPage />} />
          <Route exact path="/depositadult" element={<DepositAdultPage />} />
          <Route exact path="/depositelder" element={<DepositElderPage />} />
          
          <Route exact path="/faceai" element={<FaceAIPage />} />
          <Route exact path="/event" element={<EventAgePage />} />
          <Route exact path="/faceloading" element={<FaceLoadingPage />} />

          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
