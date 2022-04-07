import React, { useEffect, useState } from "react";
// import { useForm } from 'react-hook-form';
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import { Button } from "bootstrap";

export default function T_Body() {
  const [userAccount, setAccount] = useState("12345-6789");
  const [userBalance, setBalance] = useState("");
  const [Sstate, setSstate] = useState(false);

  useEffect(() => {
    GetAccount();
  }, []);

  // 자신의 계좌와 잔액을 불러오는 부분
  function GetAccount() {
    const token = localStorage.getItem("accessToken");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get("/api/account/lookup")
      .then((Response) => {
        // 계좌번호
        setAccount((account) =>
          JSON.stringify(Response.data.accountNumber).slice(1, -1)
        );
        // 잔액
        setBalance(JSON.stringify(Response.data.balance));
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  // 조건부 렌더링
  const [folding1, setFolding1] = useState(false);

  const foldMessage1 = () => {
    setFolding1((show) => !show);
  };

  // selectbox
  const ACCOUNTDATA = [{ value: `${userAccount}`, name: `${userAccount}` }];

  function SelectBox(props) {
    return (
      <select onChange={changeSelectBox}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }

  function changeSelectBox(e) {
    setAccount(e.target.value);
  }

  return (
    <div style={{height:'80vh'}}>
      <Box
        style={{
          height: "50px",
          // backgroundColor: "aliceblue",
          padding: "3vh",
          fontSize: "2vh",
          paddingLeft: "11vh",
          fontWeight: "bolder",
        }}
      >
        이체
      </Box>
      <hr style={{ width: "17vh", marginLeft: "10vh" }}></hr>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "aliceblue",
          paddingLeft: "15vh",
          fontWeight: "bolder",
          fontSize: "3vh",
        }}
      >
        Sbank 고객님을 위한 이체 서비스 제공
        <br></br>
        <h5>쉽고 간단한 이체 서비스 3 단계면 끝!</h5>
        <br></br>
      </Box>
      <div className="t_body">
        <div className="box">
          {/* 계좌선택 */}
          <div className="selectAccount">
            <h1>계좌선택</h1>
            <div className="accountArea">
              {/* 조회하기 */}
              {/* <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                계좌선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>{ userAccount }</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
              <SelectBox  options={ACCOUNTDATA} />
              <button style={{margin:'1vh',border:'none',borderRadius:'10px',color:'white',background:'rgb(0, 119, 255)'}} onClick={foldMessage1}>선택</button>
            </div>
            <div className="balanceArea">
              <h1>{userBalance} 원</h1>
            </div>
          </div>

          {/* 은행입력 */}
          <div className="selectBank">
            <SelectBankBox
              folding={folding1}
              account={userAccount}
              balance={userBalance}
              GetAccount={GetAccount}
            ></SelectBankBox>
          </div>
        </div>
      </div>
    </div>
  );
}

// 은행 선택 박스
function SelectBankBox({ folding, account, balance, GetAccount }) {
  const [folding2, setFolding2] = useState(false);
  const [bank, setBank] = useState();

  const foldMessage2 = () => {
    setFolding2((show) => !show);
  };

  const BANKNAME = [
    { value: "SBank", name: "S뱅크" },
    { value: "KBank", name: "K뱅크" },
    { value: "NBank", name: "N뱅크" },
    { value: "DBank", name: "D뱅크" },
  ];

  function changeSelectBox(e) {
    setBank(e.target.value);
  }

  function SelectBox(props) {
    return (
      <select onChange={changeSelectBox}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }

  if (!folding) return null;

  return (
    <div>
      {/* 계좌입력+이체금액 */}
      <div className="transfer">
        <h1 style={{paddingBottom:'1.5vh'}}>은행선택</h1>
        <SelectBox options={BANKNAME}></SelectBox>
        <button onClick={foldMessage2} style={{margin:'1vh',border:'none',borderRadius:'10px',color:'white',background:'rgb(0, 119, 255)'}}>선택</button>
      </div>
      <div>
        <TransferBox
          folding={folding2}
          account={account}
          GetAccount={GetAccount}
        ></TransferBox>
      </div>
    </div>
  );
}

// 계좌, 금액 입력 후 전송
function TransferBox({ folding, account, GetAccount }) {
  const [receiver, setReceiver] = useState("박싸피");

  const [transferData, setTransferData] = useState({
    senderAccount: account,
    receiverAccount: "",
    statement: 0,
    money: 0,
  });

  const { senderAccount, receiverAccount, statement, money } = transferData;

  function onChange(e) {
    const { name, value } = e.target;

    setTransferData({
      ...transferData,
      [name]: value,
    });
  }

  // 받는 사람 이름 받아오기
  function getName() {
    const token = localStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`/api/account/find/byAccount/${receiverAccount}`)
      .then((Response) => {
        setReceiver((prev) => (prev = Response.data));
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });

    return receiver;
  }

  // 계좌이체 구현부분
  function onClick() {
    getName();
    // 금액 및 수신자 확인
    if (receiver != undefined) {
      Swal.fire({
        title: `${receiver} 님에게`,
        text: `${money}원을 입금 하시겠습니까?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "송금하기",
        cancelButtonText: "취소하기",
      }).then((result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem("accessToken");

          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          axios
            .post(`api/account/transfer`, transferData)
            .then((Response) => {
              GetAccount(); // 잔액 최신화
              setReceiver(Response.data);
              Swal.fire(
                "송금완료",
                `${receiver} 님에게 ${money}원을 송금완료 했습니다.`,
                "success"
              ).then((result) => {
                if (result.isConfirmed) {
                  console.log("여기가 작동이 된다면 좋겠다.아아아아");
                }
              });
            })
            .catch((Error) => {
              console.log(Error);
              Swal.fire("송금실패", `송금실패 했습니다.`, "error");
            });
        }
      });
    }
  }

  if (!folding) return null;

  return (
    <div
      style={{
        border: "black 1px solid",
        padding: "2vh",
        borderRadius: "30px",
        margin:'50px',
      }}
    >
      <h1 style={{paddingBottom:'1vh'}}>정보입력</h1>
      <div  style={{paddingBottom:'1vh'}}>
        계좌번호 입력 :
        <input
          name="receiverAccount"
          placeholder="계좌번호"
          onChange={onChange}
          value={receiverAccount}
        />
      </div>
      <div>
        송금금액 입력 :
        <input
          name="money"
          placeholder="금액입력"
          onChange={onChange}
          value={money}
        />
      </div>
      <button onClick={onClick} style={{marginTop:'1vh', border:'none',borderRadius:'10px',color:'white',background:'rgb(0, 119, 255)'}}>송금</button>
    </div>
  );
}
