import React, {useEffect, useState} from "react";
import AppNav from "./AppNav";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Helmet} from 'react-helmet';
import {Group} from "@visx/group";
import {Pie} from "@visx/shape";
import {Text} from "@visx/text";

const category = [
    { symbol: "Products", color: "#0033ad" },
    { symbol: "Utilities", color: "#ff69b4" },
    { symbol: "Pharmacy", color: "#32cd32" },
    { symbol: "Clothes", color: "#8b0000" },
    { symbol: "Technology", color: "#d2691e" },
    { symbol: "Household", color: "#006400" },
    { symbol: "Beauty", color: "#8b0000" },
    { symbol: "Gifts", color: "#8b0000" },
    { symbol: "Travelling", color: "#8b0000" },
    { symbol: "Healthy", color: "#8b0000" },
    { symbol: "Entertainment", color: "#8b0000" }];

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
            let categories = Object.keys((bodyExp)).map((val, k) =>  {
                let color = category.find(c => c.symbol === val);
                console.log(color);
                console.log(val);
                return {name: val, sum: bodyExp[val], color: color.color}
            });
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
                                <Text textAnchor="middle" fill={active.color} fontSize={55} dy={-20}>
                                    {`${Math.floor(active.sum)} UAH`}
                                </Text>

                                <Text textAnchor="middle"
                                      fill={active.color}
                                      fontSize={20}
                                      dy={20}>
                                    {`${active.name}`}
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text textAnchor="middle" fill="#00000" fontSize={55} dy={-20}>
                                    {`${Math.floor(
                                        expenseSummary.reduce((acc, category) => acc + category.sum, 0)
                                    )} UAH`}
                                </Text>

                                <Text textAnchor="middle" fill="#00000" fontSize={20} dy={20}>
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

