import React from 'react';
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const dataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ]
    console.log('p0',props.expenses)
    for(let expense of props.expenses){
        const getMonth = expense.date.getMonth() //start 0 to 11
        dataPoints[getMonth].value+=expense.amount
    }

    return (
        <Chart dataPoints={dataPoints}/>
    );
};

export default ExpensesChart;