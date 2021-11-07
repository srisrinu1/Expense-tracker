import React,{useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm() {
    // const [InputTitle,setInputTitle]=useState('');
    // const [InputAmount,setInputAmount]=useState('');
    // const [InputDate,setInputDate]=useState('');
    // const inputTitle=(e)=>{
    //     setInputTitle(e.target.value);
    // }
    // const inputAmount=(e)=>{
    //     setInputAmount(e.target.value);
    // }
    // const inputDate=(e)=>{
    //     setInputDate(e.target.value);
    // }
    const initialValue={enteredTitle:"",enteredAmount:"",enteredDate:""}
    const [data,setData]=useState(initialValue);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData(values => ({...values, [name]: value}));
    }
    console.log(data.enteredAmount);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        const expensesData={
           title:data.enteredTitle,
           amount:data.enteredAmount,
           Date:new Date(data.enteredDate)
        }
        console.log(expensesData);
        setData(initialValue);
    }
   
    return (
        <div>
            <form onSubmit={submitHandler}>
             <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text" name="enteredTitle" value={data.enteredTitle}onChange={handleChange}/>
            </div>
            <div className="new-expense__control">
             <label>Amount</label>
             <input type="number" name="enteredAmount"  value={data.enteredAmount} min="0.01" step="0.01" onChange={handleChange}/>
            </div>
            <div className="new-expense__control">
             <label>Date</label>
             <input type="date" name="enteredDate" value={data.enteredDate} min="2019-01-01" max="2030-01-01" onChange={handleChange}/>
            </div>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            </div>
             
            
            </form>
        </div>
    )
}
