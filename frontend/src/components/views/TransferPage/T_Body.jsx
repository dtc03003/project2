import React, { Component, useState, useEffect } from "react";
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

export default function T_Body() {

    return (
        <div>
            <div className='Check_Balance'>
                <h1>잔액 조회</h1>
                <div>
                    <span>계좌 번호 </span>
                    <GetAccount />
                    <button onClick={clicked}>조회하기</button>
                </div>
            </div>
            <M_Chart></M_Chart>
        </div>
    )
}

function clicked() {
    console.log("클릭됨");
    const token = localStorage.getItem("accessToken")

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.post('/api/user/info')
        .then((Response) => {
            console.log(JSON.stringify(Response.data.name))
        })
    .catch((Error)=>{console.log(Error)}) 
}

function GetAccount() {
    const [userAccount, setAccount] = useState('');
    const [userBalance, setBalance] = useState('');
    const token = localStorage.getItem("accessToken")

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get('/api/account/lookup')
        .then((Response) => {
                setAccount(JSON.stringify(Response.data.accountNumber))
                setBalance(JSON.stringify(Response.data.balance))
            })
        .catch((Error) => { console.log(Error) }) 
    return (
        <div>
            <span>{ userAccount }</span>
            <span>{ userBalance } 원</span>
        </div>
    )
}


class M_Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "소비금액",
                data: [24, 41, 35, 51, 49, 62, 34, 91, 26, 78, 53, 85]
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
                align: 'left'
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
            width={500}
            height={300}
            />
        );
    }
}

