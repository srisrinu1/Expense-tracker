import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../Wrapper/Card';
import './Expenses.css';

export default function Expenses(props) {
    return (
        <Card className="expenses">
        
        {props.expenses.map((expense,index) => (
            <ExpenseItem key={props.expenses[index].id} title={props.expenses[index].expenseTitle} price={props.expenses[index].price} date={props.expenses[index].expenseDate}/>
          ))}
       
        
        </Card>
    )
}
