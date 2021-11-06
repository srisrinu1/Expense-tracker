import React from 'react'
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {
    return (
        <div className="expenses">
        
        {props.expenses.map((expense,index) => (
            <ExpenseItem key={props.expenses[index].id} title={props.expenses[index].expenseTitle} price={props.expenses[index].price} date={props.expenses[index].expenseDate}/>
          ))}
       
        
        </div>
    )
}
