import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
//     const total = props.dataPoints
// .map((dataPoint) => dataPoint.value)
// .reduce((total, amount) => total + amount);
    const dataPointValues = props.dataPoints.map((dataPoint) => (dataPoint.value));
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    totalValue={props.totalValue}
                    maxValue={totalMaximum}
                    lable={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart
