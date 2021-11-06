import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    // const currentDate=new Date();
    // const date=currentDate.toLocaleDateString();
    // console.log(props)
    const {date,title,price}=props;
    
    return (
        <div className="expense-item">
         <ExpenseDate date={date}/>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{price}</div>
            </div>
        </div>
    )
}
