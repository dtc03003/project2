import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../../_actions/user_action";
import "../LoginPage/Accounts.css";
import axios from "axios";
import { Box, Button , Modal,Typography,Backdrop} from "@mui/material";
import { Check } from "@mui/icons-material";

function SignupPage(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [BirthDay, setBirthday] = useState("");
  const [Phone, setPhone] = useState("");
  const [Authority, setAuthority] = useState("");

  //중복 여부 확인
  const [DuIdCheck, setDuIdCheck] = useState(null);
  const [DuEmailCheck, setDuEmailCheck] = useState(null);

  //중복 경고 창 오픈
  const [IdOpen, setIdOpen] = useState(false);
  const [EmailOpen, setEmailOpen] = useState(false);

  const handleIClose = () => setIdOpen(false);
  const handleEClose = () => setEmailOpen(false);

  const [activeBtn, setActiveBtn] = useState(false); // 아이디, 비밀번호 유효성 검사 & 비밀번호 일치 여부
  const [activeEmail, setActiveEmail] = useState(null); // 이메일 유효성 검사
  const [activeId, setActiveId] = useState(null); // 아이디 유효성 검사
  const [activePw, setActivePw] = useState(null); // 비밀번호 유효성 검사
  const [activeName, setActiveName] = useState(null); // 이름 유효성 검사
  const [activeBirthday, setActiveBirthday] = useState(null); // 이름 유효성 검사
  const [activePhone, setActivePhone] = useState(null); // 이름 유효성 검사
  
  const [activeDpBtn, setActiveDpBtn] = useState(false); // 이메일 중복확인 버튼 보이기 여부
  const [activeDpIdBtn, setActiveDpIdBtn] = useState(false); // 이메일 중복확인 버튼 보이기 여부
  //

  // //회원가입버튼활성화
  const onActiveBtn = () => {
    if (isSamePwd() && ConfirmPassword !== "") {
      if (Id && activePw && activeId) {
        setActiveBtn(true);
      }
    }
  };
  // 이메일 유효성 검사
  const isEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_]+@+(([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,})$/i;
    if (email) {
      setActiveEmail(emailRegex.test(email));
      setActiveDpBtn(emailRegex.test(email));
    } else {
      setActiveEmail(true);
      setActiveDpBtn(false);
    }
  };
  //아이디 유효성 검사
  const isId = (id) => {
    const idRegex = /^[a-zA-Z0-9_]{6,20}$/i;
    if (id) {
      setActiveId(idRegex.test(id));
      setActiveDpIdBtn(idRegex.test(id));
    } else {
      setActiveId(true);
      setActiveDpIdBtn(false);
    }
  };

  // 비밀번호 유효성 검사
  const isPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (password) {
      setActivePw(passwordRegex.test(password));
    } else {
      setActivePw(true);
    }
  };

  const isName = (name) => {
    const nameRegex = /^[가-힣]{1,6}$/i;
    if (name) {
      setActiveName(nameRegex.test(name));
    } else {
      setActiveName(true);
    }
  };
  const isBirthday = (birthday) => {
    const birthdayRegex = /^[0-9]{6}$/i;
    if (birthday) {
      setActiveBirthday(birthdayRegex.test(birthday));
    } else {
      setActiveBirthday(true);
    }
  };
  const isPhone = (phone) => {
    const phoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/i;
    if (phone) {
      setActivePhone(phoneRegex.test(phone));
    } else {
      setActivePhone(true);
    }
  };

  //입력 창(타이핑 감지)
  const onIdHandler = (e) => {
    // console.log(e.target.value.trim());
    setId(e.target.value.trim());
    isId(e.target.value.trim()); //아이디 유효성검사
    setDuIdCheck(null);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.target.value.trim());
    isPassword(e.target.value.trim()); //비번 유효성검사
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value.trim());
  };

  //비밀번호 체크
  const isSamePwd = () => {
    if (Password === ConfirmPassword || ConfirmPassword === "") {
      return true;
    } else {
      return false;
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value.trim());
    isEmail(e.target.value.trim()); //이메일 유효성검사
    setDuEmailCheck(null);
  };

  const onNameHanlder = (e) => {
    setName(e.target.value.trim());
    isName(e.target.value.trim());
  };

  const onBirthDayHanlder = (e) => {
    setBirthday(e.target.value.trim());
    isBirthday(e.target.value.trim());
  };

  const onPhoneHanlder = (e) => {
    setPhone(e.target.value.trim());
    isPhone(e.target.value.trim());
  };

  const onAuthorityHanlder = (e) => {
    setAuthority(e.target.value.trim());
    //isAuthority(e.target.value.trim());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      signupUser(Id, Password, Name, Email, BirthDay, Phone, Authority)
    ).then(() => {
      navigate("/login");
    });
  };

  //중복 체크

  const idCheck = () => {
    axios({
      method: "get",
      url: `https://j6d201.p.ssafy.io:9000/api/user/duplicate/id/id=${Id}`,
    })
      .then((res) => {
        if (res.data.data === false) {
          setIdOpen(true);
        } else {
          setDuIdCheck(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIdOpen(true);
      });
  };

  const emailCheck = () => {
    axios({
      method: "get",
      url: `https://j6d201.p.ssafy.io:9000/api/user/duplicate/email/email=${Email}`,
    })
      .then((res) => {
        if (res.data.data === false) {
          setEmailOpen(true); //사용 가능 수정해야함
        } else {
          setDuEmailCheck(true); //이미 사용중
        }
      })
      .catch((err) => {
        console.log(err);
        setEmailOpen(true);
      });
  };

  // // 스타일 선언
  // const modalStyle = {
  //   position: 'absolute',
  //   top: '40%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: '80%',
  //   backgroundColor: '#ffffff',
  //   border: '2px solid white',
  //   borderRadius: '12px',
  //   boxShadow: 24,
  //   p: 4,
  //   padding: '10%',
  //   opacity: '80%',
  // };
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
        <div style={{ height: "70vh", width: "160vh" }} class="signup-wrap">
          <div
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              paddingTop: "80px",
              paddingBottom: "0px",
            }}
            class="login-html"
          >
            <input
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
              id="tab-1"
              type="radio"
              name="tab"
              class="sign-in"
              onClick={() => {
                navigate("/login");
              }}
            />
            <label for="tab-1" class="tab">
              로그인
            </label>
            {/* SIGN IN버튼 누를 경우 login페이지로 랜더링되게 변경 */}
            <input
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
              id="tab-2"
              type="radio"
              name="tab"
              class="sign-up"
              checked
            />
            <label for="tab-2" class="tab">
              회원가입
            </label>

            <div class="login-form">
              <Box class="sign-up-htm">
                <div class="group">
                  <label for="pass" class="label">
                    이름
                  </label>
                  <input
                    autoFocus
                    style={{ color: "black" }}
                    id="pass"
                    type="text"
                    class="input"
                    placeholder="1~6자 내로 입력해주세요."
                    value={Name || ""}
                    onChange={onNameHanlder}
                  />
                  {activeName === false ?(
                    <span className="err-msg">한글 이름 1자 이상 6자 이내로 입력해주세요</span>
                  ) : null}
                </div>

                <div class="group">
                  <label for="pass" class="label">
                    생년월일
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="text"
                    class="input"
                    placeholder="생년월일 6자리를 입력해주세요"
                    value={BirthDay || ""}
                    onChange={onBirthDayHanlder}
                  />
                  {activeBirthday === false ?(
                    <span className="err-msg">생년월일 6자리를 입력해주세요 예시)901221 YYMMDD</span>
                  ) : null}
                </div>

                <div class="group">
                  <label for="pass" class="label">
                    휴대폰 번호
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="text"
                    class="input"
                    placeholder="휴대폰 번호를 입력해주세요"
                    value={Phone || ""}
                    onChange={onPhoneHanlder}
                  />
                  {activePhone === false ?(
                    <span className="err-msg">'-'를 포함하여 휴대폰 번호를 입력해주세요 예시)010-0000-0000</span>
                  ) : null}
                </div>

                <div class="group">
                  <label for="pass" class="label">
                    이메일
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="email"
                    class="input"
                    placeholder="메일주소를 입력해주세요."
                    value={Email || ""}
                    onChange={onEmailHandler}
                    onKeyUp={onActiveBtn}
                  />
                  {/* 이메일 형식이 맞으면 중복체크 버튼 보이고 중복 확인 해달라는 메시지 보이기  */}
                  {activeDpBtn === false ? null : (
                    <div>
                      {/* 이메일 중복 검사 결과 false면 체크 버튼 / true면 체크표시로 바꾸기 */}
                      {DuEmailCheck === null ? (
                        <Button
                          id="check-btn"
                          onClick={emailCheck}
                          className="childemail"
                          variant="outlined"
                        >
                          <span className="check-txt">중복확인</span>
                        </Button>
                      ) : (
                        <Check id="checkiconbg" className="childemail check-icon" />
                      )}
                    </div>
                  )}
                </div>
                {/* 이메일 중복&유효성검사 불러오기*/}
                {activeEmail === true &&
                DuEmailCheck !== true &&
                activeDpBtn === true ? (
                  <span className="err-msg">이메일 중복 확인을 해주세요.</span>
                ) : null}
                {activeEmail === false ? (
                  <span className="err-msg">이메일 형식을 확인해주세요.</span>
                ) : null}

                <div class="group">
                  <label for="user" style={{ marginTop: "8px" }} class="label">
                    아이디
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="user"
                    type="text"
                    class="input"
                    placeholder="6~20자 내로 입력해주세요."
                    value={Id || ""}
                    onChange={onIdHandler}
                    onKeyUp={onActiveBtn}
                  />
                  {/* 아이디 형식이 맞으면 중복체크 버튼 보이고 중복 확인 해달라는 메시지 보이기  */}
                  {activeDpIdBtn === false ? null : (
                    <div>
                      {/* 아이디 중복 검사 결과 false면 체크 버튼 / true면 체크표시로 바꾸기 */}
                      {DuIdCheck === null ? (
                        <Button
                          id="check-btn"
                          onClick={idCheck}
                          className="childid"
                          variant="outlined"
                        >
                          <span className="check-txt">중복확인</span>
                        </Button>
                      ) : (
                        <Check id="checkiconbg" className="childid check-icon" />
                      )}
                    </div>
                  )}
                </div>
                {/* 아이디 중복&유효성검사 불러오기*/}
                {activeId === true &&
                DuIdCheck !== true &&
                activeDpIdBtn === true ? (
                  <span className="err-msg">아이디 중복 확인을 해주세요.</span>
                ) : null}
                {activeId === false ? (
                  <span className="err-msg">아이디 형식을 확인해주세요.</span>
                ) : null}

                <div class="group">
                  <label for="pass" class="label">
                    비밀번호
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    autoComplete="current-password"
                    value={Password || ""}
                    placeholder="문자, 숫자, 기호를 조합하여 8~20자 내로 입력해주세요."
                    onChange={onPasswordHanlder}
                    onKeyUp={onActiveBtn}
                  />
                  {activePw === false ? (
                    <span className="err-msg">
                      문자, 숫자, 기호를 조합하여 8~20자 내로 입력해주세요.
                    </span>
                  ) : null}
                </div>

                <div class="group">
                  <label for="pass" class="label">
                    비밀번호 확인
                  </label>
                  <input
                    style={{ color: "black" }}
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    autoComplete="current-password"
                    value={ConfirmPassword || ""}
                    placeholder="비밀번호를 확인해주세요"
                    onChange={onConfirmPasswordHandler}
                    onKeyUp={onActiveBtn}
                  />
                  {isSamePwd() === false ?(
                    <span>비밀번호가 일치하지 않습니다.</span>
                    ) : null}
                </div>

                <div class="group">
                  <Button
                  className='button'
                    style={{ 
                      fontSize: "21px" ,
                      background : activeBtn
                      ? 'linear-gradient(to right, #467DFF, #2226FF)'
                      : '#1162EE8F',
                    color: 'white',
                    }}
                    disabled={!activeBtn}
                    type="submit"
                    class="button"
                    value="회원가입"
                    variant='contained'
                  >회원가입</Button>
                </div>

                <div style={{ marginTop: "30px" }} class="hr"></div>
                <div class="foot-lnk">
                  <label
                    style={{ fontSize: "20px" }}
                    for="tab-1"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    이미 계정이 있으신가요?
                  </label>
                  {/* 버튼 누를 경우 login페이지로 랜더링되게 변경 */}
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Box>
      
      {/* <div>
      <Modal
          open={IdOpen}
          onClose={handleIClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          onClose={handleIClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box style={modalStyle}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              중복 확인 실패
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              이미 가입된 이메일입니다.
            </Typography>
          </Box>
        </Modal>
      </div> */}
    
    </div>
  );
}

export default SignupPage;
