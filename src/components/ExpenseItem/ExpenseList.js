import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
export default function ExpenseList(props) {
    let expensesContent=<p style={{color:'white',textAlign:'center'}}>No expenses found.</p>
    if(props.expenses.length===0){
        return(<h2 className="expenses-list__fallback">Found no expenses.</h2>);
    }
    return (
        <ul className="expenses-list">
        {props.expenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date}/>
          ))}
        </ul>
    )
}
