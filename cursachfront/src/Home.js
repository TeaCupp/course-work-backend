import React, { Component } from "react";
import AppNav from "./AppNav";
import Chart from 'react-apexcharts'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Helmet} from 'react-helmet';




class Home extends Component{
    state = { }
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }]
        }
    }
    render() {
        return (
            <div>
                <AppNav/>
            <h2 style={{display: 'flex', justifyContent:'center', alignItem:'center', height: '100vh'}}>
            <h2><Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} /></h2>
            </h2>
                <Helmet>
                    <style>{'body { background-color: lightblue; }'}</style>
                </Helmet>
            </div>




        );
    }
}
export default Home;
