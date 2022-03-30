import React, { useState } from "react";
import { withRouter, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { Box, Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import "./Accounts.css";
// import { Container } from 'react-bootstrap';
import axios from "axios";

function LoginPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [activeBtn, setActiveBtn] = useState(false); // 아이디, 비밀번호 유효성 검사 & 비밀번호 일치 여부
  const [Open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  //로그인 버튼 활성화
  const onActiveBtn = () => {
    if (Id && Password && Password.trim().length >= 8 
    // && activeId
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const onIdHandler = (e) => {
    setId(e.target.value.trim());
    // isId(e.target.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.target.value.trim());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(Id, Password))
      .then((res) => {
        if (res.payload.accessToken) {
          localStorage.setItem("accessToken", res.payload.accessToken);
          localStorage.setItem("refreshToken", res.payload.refreshToken);
          navigate("/");
        }
      })
      .catch(setOpen(true));
  };


  return (
    <div className="bod">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
        onSubmit={onSubmitHandler}
        component="form"
        noValidate
        autoComplete="off"
      >
        <div className="login-wrap">
          <div className="login-html">
            {/* <div><h1 className='headerst'>N:ear</h1></div> */}

            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />
            <label for="tab-1" className="tab">
              로그인
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
              onClick={() => {
                navigate("/signup");
              }}
            />
            <label for="tab-2" className="tab">
              회원가입
            </label>
            {/* SIGN UP버튼 누를 경우 회원가입페이지로 랜더링되게 변경 */}
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" className="label">
                    아이디
                  </label>
                  <input
                    autoFocus
                    style={{ color: "black" }}
                    id="user"
                    type="text"
                    className="input"
                    value={Id || ""}
                    onChange={onIdHandler}
                    onKeyUp={onActiveBtn}
                    />

                </div>
                <br></br>
                <div className="group">
                  <label for="pass" className="label">
                    비밀번호
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    autoComplete='current-password'
                    value={Password || ""}
                    onChange={onPasswordHanlder}
                    onKeyUp={onActiveBtn}
                  />
                </div>
                <br></br>
                <br></br>
                <div style={{ marginTop: "30px" }} class="hr"></div>
                <div className="group">
                  <Button
                    style={{ 
                      fontSize: "21px" ,
                      background : activeBtn
                      ? 'linear-gradient(to right, #467DFF, #2226FF)'
                      : '#1162EE8F',
                    color: 'white',
                    }}
                    disabled={!activeBtn}
                    type="submit"
                    className="button"
                    value="로그인"
                    variant='contained'
                  >로그인</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 1000,
          style: {
            border: "1px solid #713200",
            padding: "16px",
            margin: "10vh",
            color: "#713200",
          },
        }}
      /> */}
    </div>
  );
}
export default LoginPage;
