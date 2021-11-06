import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem() {
    const currentDate=new Date();
    const date=currentDate.toLocaleDateString();
    return (
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-item__description">
            <h2>Mobile Recharge</h2>
            <div className="expense-item__price">Rs.48</div>
            </div>
        </div>
    )
}
