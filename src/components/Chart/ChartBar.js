import React from 'react';
import "./ChartBar.css";
const ChartBar = (props) => {
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.totalValue) * 100) + '%';
        console.log(barFillHeight);
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height : {barFillHeight}}}></div>
                <div className="chart-bar__lable">{props.label}</div>
            </div>
        </div>
    );
};

export default ChartBar;
