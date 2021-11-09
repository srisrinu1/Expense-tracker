import React from 'react'
import Chart from '../Chart/Chart'
export default function ExpensesChart(props) {
    const ChartDataPoints=[
  {label:'Jan',value:0},
  {label:'Feb',value:0},
  {label:'Mar',value:0},
  {label:'Apr',value:0},
  {label:'May',value:0},
  {label:'Jun',value:0},
  {label:'Jul',value:0},
  {label:'Aug',value:0},
  {label:'Sept',value:0},
  {label:'Oct',value:0},
  {label:'Nov',value:0},
  {label:'Dec',value:0}
    ]
    for(const expense of props.expenses){
        const expenseMonth=new Date(expense.date).getMonth();
        ChartDataPoints[expenseMonth].value +=parseInt(expense.amount);
    }
    console.log(ChartDataPoints);
    return (
        <div>
            <Chart dataPoints={ChartDataPoints}/>
        </div>
    )
}
