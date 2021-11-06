import React from 'react'
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    // const currentDate=new Date();
    // const date=currentDate.toLocaleDateString();
    // console.log(props)
    const {date,title,price}=props;
    const month=date.toLocaleString("en-US",{month:"long"});
    const day=date.toLocaleString("en-US",{day:"2-digit"});
    const year=date.toLocaleString("en-US",{year:"numeric"})
    return (
        <div className="expense-item">
          <div className="">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            </div>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{price}</div>
            </div>
        </div>
    )
}
