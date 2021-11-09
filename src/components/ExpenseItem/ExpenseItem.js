import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../Wrapper/Card' 
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    // const currentDate=new Date();
    // const date=currentDate.toLocaleDateString();
    // console.log(props)
    // const {title,date,price}=props;
    // console.log(title);
    // console.log(date);
    
    return (
        <Card className="expense-item">
         <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price"> Rs.{props.price}</div>
            </div>
        </Card>
    )
}