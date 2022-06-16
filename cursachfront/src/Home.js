import React, {useEffect, useState} from "react";
import AppNav from "./AppNav";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Helmet} from 'react-helmet';
import {Group} from "@visx/group";
import {Pie} from "@visx/shape";
import {Text} from "@visx/text";

// const coins = [
//     { symbol: "ADA", amount: 200, color: "#0033ad", inUSD: 1.48 },
//     { symbol: "SOL", amount: 5, color: "#ff69b4", inUSD: 37.6 },
//     { symbol: "BTC", amount: 0.005, color: "#32cd32", inUSD: 37363 },
//     { symbol: "BTC", amount: 0.005, color: "#d2691e", inUSD: 37363 },
//     { symbol: "BTC", amount: 0.005, color: "#006400", inUSD: 37363 },
//     { symbol: "BTC", amount: 0.005, color: "#8b0000", inUSD: 37363 },
// ];

export default function Home() {
    const [active, setActive] = useState(null);
    const width = 450;
    const half = width/2;
    console.log(12);

    const [expenseSummary, setExpenseSummary] = useState([]);

    useEffect(() => {
        const getExpenseSummary = async () => {
            const responseExp = await fetch('/api/expensesSummary');
            const bodyExp = await responseExp.json();
            console.log(bodyExp);
            let categories = Object.keys((bodyExp)).map((val, k) =>  {return {name: val, sum: bodyExp[val]}});
            setExpenseSummary(categories);
        }
        getExpenseSummary();
    }, []);



        return (
            <div>
                <AppNav/>
            <h2 style={{display: 'flex', justifyContent:'center', alignItem:'center', height: '100vh'}}>

                <svg width={width} height={width}>
                    <Group top={half} left={half}>
                        <Pie
                            data={expenseSummary}
                            pieValue={(data) => data.sum}
                            outerRadius={half}
                            innerRadius={({data}) =>{
                                const size = 7;
                                return half - size;
                            }}
                            padAngle={0.01}
                        >
                            {(pie) => {
                                return pie.arcs.map(arc => {
                                    return(
                                        <g key={arc.data.symbol}
                                           onMouseEnter={() => setActive(arc.data)}
                                           onMouseLeave={() => setActive(null)}
                                        >
                                            <path d={pie.path(arc)} fill={arc.data.color}></path>
                                        </g>
                                    );
                                });
                            }}
                        </Pie>


                        {active ? ( <>
                                <Text textAnchor="middle" fill="#000000" fontSize={55} dy={-20}>
                                    {`${Math.floor(active.sum)} UAH`}
                                </Text>

                                <Text textAnchor="middle"
                                      fill={"#8b0000"}
                                      fontSize={20}
                                      dy={20}>
                                    {`${active.name}`}
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text textAnchor="middle" fill="#000000" fontSize={55} dy={-20}>
                                    {`${Math.floor(
                                        expenseSummary.reduce((acc, category) => acc + category.sum, 0)
                                    )} UAH`}
                                </Text>

                                <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                                    {`${expenseSummary.filter(category => category.sum > 0).length} Categories`}
                                </Text>
                            </>
                        )}


                    </Group>
                </svg>
            </h2>
                <Helmet>
                    <style>{'body { background-color: lightcyan; }'}</style>
                </Helmet>
            </div>




        );
    }

