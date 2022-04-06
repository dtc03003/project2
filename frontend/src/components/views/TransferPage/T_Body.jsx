import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import Result from './Result';

export default function T_Body() {
    const [userAccount, setAccount] = useState('12345-6789');
    const [userBalance, setBalance] = useState('');

    useEffect(() => {
        GetAccount()
    }, [])

    // 자신의 계좌와 잔액을 불러오는 부분
    function GetAccount() {
        const token = localStorage.getItem("accessToken")

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get('/api/account/lookup')
            .then((Response) => {
                    // 계좌번호
                    setAccount(account => JSON.stringify(Response.data.accountNumber).slice(1, -1))
                    // 잔액
                    setBalance(JSON.stringify(Response.data.balance))
                })
            .catch((Error) => { console.log(Error) }) 
    }

    // 조건부 렌더링
    const [folding1, setFolding1] = useState(false);

    const foldMessage1 = () => {
        setFolding1((show) => !show);
    };

    return (
        <div className='t_body'>
            <h1>이체하기</h1>

            {/* 계좌선택 */}
            <div className='selectAccount'>
                <h1>계좌선택</h1>
                <div >
                    {/* 조회하기 */}
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            계좌선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>{ userAccount }</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button onClick={foldMessage1}>선택</button>
                </div>
                {userBalance}             
            </div>
            
            {/* 은행입력 */}
            <div className='selectBank'>
                <SelectBankBox folding={folding1} account={userAccount} balance={userBalance} GetAccount={GetAccount}></SelectBankBox>
            </div>

        </div>
    )
}

// 은행 선택 박스
function SelectBankBox({ folding, account, balance , GetAccount}) {
    const [folding2, setFolding2] = useState(false);
    const [bank, setBank] = useState();

    const foldMessage2 = () => {
        setFolding2((show) => !show);
    };

    const BANKNAME = [
        { value: "SBank", name:"S뱅크"},
        { value: "KBank", name:"K뱅크"},
        { value: "NBank", name:"N뱅크"},
        { value: "DBank", name:"D뱅크"}
    ];

    function changeSelectBox(e) {
        console.log(e.target.value)
        setBank(e.target.value);
    };

    function SelectBox(props) {
        return (
            <select onChange={changeSelectBox}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select>
        )
    }
    
    if (!folding) return null;
    
    return (
        <div>
            {/* 계좌입력+이체금액 */}
            <div className='transfer'>
                <SelectBox options={BANKNAME}></SelectBox>
                <button onClick={foldMessage2}>선택</button>
            </div>
            <div>
                <TransferBox folding={folding2} account={account} GetAccount={GetAccount}></TransferBox>
            </div>
        </div>
    );
}

// 계좌, 금액 입력 후 전송
function TransferBox({ folding, account, GetAccount }) {
    const [receiver, setReceiver] = useState();

    const [transferData, setTransferData] = useState({
        senderAccount: account,
        receiverAccount: "",
        statement:0,
        money: 0,
    })

    const {  senderAccount, receiverAccount, statement, money } = transferData;
    
    function onChange(e) {
        const { name, value } = e.target;

        setTransferData({
            ...transferData,
            [name]: value,
        });
    };
     // 받는 사람 이름 받아오기
    function getName() {
            const token = localStorage.getItem("accessToken")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.get(`/api/account/find/byAccount/${receiverAccount}`)
                .then((Response) => {
                    setReceiver(Response.data)
                    console.log(Response.data)
                    })
                .catch((Error) => { console.log(Error) }) 
            
            return receiver
    }

    // 계좌이체 구현부분
    function onClick() {
        getName();
        console.log(receiver)

        // 금액 및 수신자 확인
        if (window.confirm(receiver + "님께 " + money + "원을 송금하시겠습니까?")) {
            const token = localStorage.getItem("accessToken")
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.post(`api/account/transfer`, transferData)
                .then((Response) => {
                GetAccount();   // 잔액 최신화
                setReceiver(Response.data)  
                alert("송금이 완료되었습니다.");
            })
            .catch((Error) => { console.log(Error) }) 

        } else {
            alert("송금이 취소되었습니다.");
        }
    }

    if (!folding) return null;

    return (
        <div>
            <div>
                계좌번호 입력 :
                <input name="receiverAccount"
                    placeholder="계좌번호" 
                    onChange={onChange} 
                    value={receiverAccount}>
                </input>
            </div>
            <div>
                송금금액 입력 :
                <input name="money"
                    placeholder="금액입력" 
                    onChange={onChange} 
                    value={money}>
                </input>
            </div>
            <button onClick={onClick}>송금</button>
        </div>
    );
}