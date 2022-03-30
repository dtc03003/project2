import React, { Component } from "react";
import ApexCharts from 'react-apexcharts'

export default function T_Body() {
    return (
        <div>
            <div className='Check_Balance'>
                <h1>잔액 조회</h1>
                <div>
                    <span>계좌 번호 </span>
                    <span>1234-5678-90</span>
                    <button>조회하기</button>
                </div>
                <div>
                    <span>24,500</span>
                    <span>원</span>
                </div>
            </div>
            <M_Chart></M_Chart>
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