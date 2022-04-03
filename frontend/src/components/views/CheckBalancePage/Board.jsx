import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';

export default function Board() {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState([]);
    const [account, setAccount] = useState([]);
    const [test, setTest] = useState([]);

    const nextId = useRef(11);
    

    useEffect(async () => {
        const token = localStorage.getItem("accessToken")
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        // 자신 계좌번호 받아오기
        await getAccountF();

        function getAccountF() {
            axios.get('/api/account/lookup')
            .then((Response) => {
                setAccount(account => JSON.stringify(Response.data.accountNumber).slice(1, -1))
            })
            .catch((Error) => { console.log(Error) })
        }
        
        //  거래내역 불러오기
        if (Object.keys(account).length !== 0) {
            await axios.get(`/api/account/find/account/record/${account}`)
                .then((Response) => {
                    setInfo(Response.data)
                })     
        }
    }, [account]);
    
    const handleSave = (data) => {
        if (data.historyId) {
            setInfo(
                info.map(row => data.historyId === row.id ? {
                    accountId: data.accountId,
                    historyId: data.historyId,
                    money: data.money,
                    receiver: data.receiver,
                    receiverAccount: data.receiverAccount,
                    sender: data.sender,
                    senderAccount: data.senderAccount,
                    statement: data.statement,
                    transactionDate: data.transactionDate
                } : row)
            )
        }
    }

    return (
        <div className='outer'>
            <div className='text-xl font-bold mt-5 mb-5 text-center'>이체 정보</div>
            <table className='inner'>
                <thead className='justify-between'>
                    <tr className='bg-gray-800'>
                        <th className='text-gray-300 px-4 py-3'>상태</th>
                        <th className='text-gray-300 px-4 py-3'>보낸사람</th>
                        <th className='text-gray-300 px-4 py-3'>받은사람</th>
                        <th className='text-gray-300 px-4 py-3'>금액</th>
                        <th className='text-gray-300 px-4 py-3'>이체날짜</th>
                    </tr>
                </thead>
                <Tr info={info} />
            </table>
        </div>
    )
}