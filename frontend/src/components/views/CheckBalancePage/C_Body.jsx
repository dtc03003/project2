import React, { Component, useState, useEffect } from "react";
import ApexCharts from 'react-apexcharts';
import axios from 'axios';
import Board from './Board';
// import styles from './CheckBalance'
import styles from './CheckBalance.css'
import { Box } from "@mui/material";

export default function T_Body() {
    const [userAccount, setAccount] = useState('');
    const [userBalance, setBalance] = useState('');
    const [userHistory, setHistory] = useState('');

    useEffect(() => {
        getHistroy();
    }, []);
    
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
        return (
            <div className='inner'>
                <h3>계좌 번호</h3>
                { userAccount }
                <h1> { userBalance }원</h1>
            </div>
        )
    }

    function getHistroy() {
        const token = localStorage.getItem("accessToken")

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get('/api/account/find/account/consumption/history/2022')
            .then((Response) => { 
                setHistory(JSON.stringify(Response.data))
            })
    }

    return (
        <div className='c_body'>
            <div><Box
        style={{
          height: "50px",
          // backgroundColor: "aliceblue",
          padding: "3vh",
          fontSize: "2vh",
          
          fontWeight: "bolder",
        }}
      >
        조회
      </Box>
      <hr style={{ width: "15vh" }}></hr>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "aliceblue",
          fontWeight: "bolder",
          fontSize: "2.5vh",
          paddingBottom:'4.5vh'
        }}
      >
        Sbank 고객님을 위한 계좌 조회 서비스 제공
        <br></br>
        <h5>쉽고 간단한 조회 서비스 월별 사용 금액도 함께!</h5>
        <br></br>
      </Box></div>
                <h1 style={{paddingBottom:'1vh'}}>잔액 조회</h1>
            <div className='Check_Balance'>
                <div className='accountArea'><GetAccount/></div>
                <M_Chart/>
            </div>
            <Board ></Board>
        </div>
    )
}

class M_Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "소비금액",
                data: [24, 41, 35, 51, 49, 62, 35, 91, 26, 78, 53, 85]
            }],

        options: {  
            chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '월별 사용금액',
                align: 'center'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
            categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            }
        }
        }
    }
    render() {
        return (
        <ApexCharts
            options={this.state.options}
            series={this.state.series}
            typs='line'
            width={470}
            height={300}
            />
        );
    }
}

